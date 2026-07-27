# Good boy — Frontend Assignment

Darovací formulár pre nadáciu Good boy (GoodRequest frontend zadanie). Pôvodné zadanie je v [ASSIGNMENT.md](./ASSIGNMENT.md).

## Ako spustiť

### Predpoklady

- Node.js 20+ (testované na 24.18.0)
- npm

### 1. Nainštaluj závislosti

```bash
npm install
```

### 2. Nastav premenné prostredia

```bash
cp .env.example .env.local
```

`.env.local` obsahuje:

```
NEXT_PUBLIC_API_BASE_URL=https://frontend-assignment-api.goodrequest.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- `NEXT_PUBLIC_API_BASE_URL` — adresa hosťovaného API zo zadania (zoznam útulkov, štatistiky, odoslanie príspevku). Je **povinná**: ak chýba, `src/lib/lib.ts` zhodí aplikáciu pri štarte namiesto tichého zlyhania. Takýto pád zachytí `app/global-error.tsx`, takže používateľ nedostane bielu stránku.
- `NEXT_PUBLIC_SITE_URL` — absolútna adresa nasadenia. Používa sa pre `metadataBase`, canonical odkazy, `robots.txt` a `sitemap.xml`. Ak chýba, použije sa `http://localhost:3000`.

### 3. Spusti dev server

```bash
npm run dev
```

Aplikácia beží na [http://localhost:3000](http://localhost:3000).

### Ďalšie príkazy

```bash
npm run build
```

```bash
npm run start
```

```bash
npm run lint
```

```bash
npm run type-check
```

```bash
npm run format
```

```bash
npm run format:check
```

`format` zapíše zmeny, `format:check` iba kontroluje a je vhodný do CI. `start` vyžaduje predchádzajúci `build`.

## Tech stack

| Vrstva            | Knižnica                                      |
| ----------------- | --------------------------------------------- |
| Framework         | Next.js 16 (App Router)                       |
| Jazyk             | TypeScript (`strict`)                         |
| Server state      | TanStack Query                                |
| Klient state      | React Context + `useReducer`                  |
| Formulár          | Formik (`useFormik`) + Zod                    |
| HTTP klient       | axios                                         |
| UI komponenty     | MUI                                           |
| Štýlovanie        | `styled()` z `@mui/material/styles` (Emotion) |
| Lokalizácia       | i18next / react-i18next (SK, EN)              |
| Formátovanie kódu | Prettier                                      |

styled-components sa **nepoužíva** — všetko vlastné štýlovanie ide cez MUI `styled()` (Emotion), `sx`, alebo globálne cez `components.styleOverrides` v theme.

## Štruktúra projektu

Layer-first, nie feature-first.

```
src/
  api/            volania API — jeden súbor na doménu (shelters.ts)
  app/            Next.js App Router — routy, layout, error/404, robots, sitemap
  components/
    donation/     doménové kompozície darovacieho formuláru
    layout/       BrandLogo, SiteFooter, SplitLayout
    stats/        ContributionStats
    ui/           generické, doménovo nezávislé komponenty (+ ui/layout/)
  config/         navigation.ts, social.ts
  context/        DonationStepContext, DonationSubmissionContext
  hooks/          hooky zoskupené po doménach (donation/, shelters/, stats/, form/, navigation/)
  lib/
    lib.ts        axios instance (baseURL z env, mapovanie chýb na ApiError)
    i18n/         i18next konfigurácia a preklady (sk, en)
    query/        QueryClient provider a query keys
    seo/          SITE_URL, zdieľané openGraph/twitter polia, buildPageMetadata()
    theme/        MUI theme, design tokeny, typografia
    providers/    kompozícia všetkých providerov
  routes/         AppRoute enum a URL slovník
  types/          zdieľané typy AJ enumy
  utils/          format.ts, zodFormikValidate.ts
  views/          stránkové kompozície, ktoré routy v app/ iba obalia
```

Každý komponent má vlastný folder a k nemu `.styled.ts`; v JSX nie sú dlhé inline `sx` bloky.

## API

Appka konzumuje 3 endpointy hosťovaného API (dokumentácia: https://frontend-assignment-api.goodrequest.dev/apidoc/):

- `GET /api/v1/shelters/` — zoznam zapojených útulkov
- `GET /api/v1/shelters/results` — celková vyzbieraná suma a počet darcov
- `POST /api/v1/shelters/contribute` — odoslanie príspevku

## SEO

- **og:image** — `public/og-image.jpg` (1200×630), spolu s `og:image:width/height/alt` a `twitter:image`. Deklarovaný je ako jeden zdieľaný obrázok v `lib/seo/seo.ts`, takže ho dostanú všetky routy vrátane 404.
- **Rôzne titles a descriptions na jednotlivých stepoch formuláru** — `/donation` exportuje `generateMetadata`, ktoré číta `?step=` z URL a podľa neho vyberá titulok aj description z `meta.*` kľúčov v prekladoch. Klientský hook `useDonationStepUrl` zapisuje aktuálny step do URL, takže:
  - prvý step má čistú adresu `/donation`, ďalšie `?step=donor` a `?step=summary`,
  - zdieľaný odkaz na konkrétny step vyrenderuje serverom správny `<title>` a `description`,
  - neznáma hodnota parametra spadne na prvý step.
- **canonical** vždy smeruje na adresu bez query parametra, aby stepy netvorili duplicitný obsah.
- **`robots.ts`** a **`sitemap.ts`** — generované z `AppRoute` enumu, `/thank-you` je vylúčené z indexovania.
- Kvôli `searchParams` je `/donation` renderovaná dynamicky (`ƒ`), ostatné routy sú staticky prerenderované.

Metadata sú zámerne po slovensky. i18n beží na klientovi (bez `[lang]` segmentu), takže server pri renderovaní `<head>` nepozná jazyk používateľa; SSR výstup aj `<html lang>` sú slovenské a metadata sú s nimi konzistentné. Reálna viacjazyčnosť metadát by si vyžadovala jazyk v URL.

Pozor na zlučovanie metadát: Next zlučuje `Metadata` objekty **plocho**, takže page-level `openGraph` prepíše celý objekt z layoutu. Preto sú zdieľané polia (`type`, `locale`, `siteName`, `images`) vytiahnuté do `OPEN_GRAPH_BASE` / `TWITTER_BASE` a každá stránka ich spreaduje cez `buildPageMetadata()`.

## Error handling

| Súbor                  | Kedy sa použije                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `app/not-found.tsx`    | neexistujúca adresa (Next vracia 404 a sám pridá `noindex`) aj volanie `notFound()` |
| `app/error.tsx`        | runtime chyba pri renderovaní stránky; ponúka „Skúsiť znova" (`reset`) a kód chyby  |
| `app/global-error.tsx` | chyba v root layoute — napríklad chýbajúca povinná env premenná                     |

`not-found.tsx` a `error.tsx` sa renderujú vnútri root layoutu, takže majú k dispozícii theme aj preklady. `global-error.tsx` root layout nahrádza, preto má vlastné `<html>`/`<body>`, nepoužíva MUI ani i18next runtime a texty číta priamo zo slovenského prekladu.

Všetky tri stavy zdieľajú generický komponent `components/ui/MessagePanel` (ikona, titulok, popis, akcie), ktorý používa aj stránka po úspešnom odoslaní.

## Známé kompromisy

- Hodnoty formuláru sa neuchovávajú medzi načítaniami stránky, takže `?step=` po reloade normalizuje na prvý step — inak by používateľ skončil na prázdnom súhrne.
- `t()` kľúče nie sú typované cez `CustomTypeOptions`; `types/translation.ts` zatiaľ iba drží anglický preklad v zhode so slovenským.
- Jazyk sa určuje z nastavení prehliadača, appka neobsahuje prepínač jazyka.
- Projekt neobsahuje testy.
