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

`NEXT_PUBLIC_API_BASE_URL` je adresa hosťovaného API zo zadania (zoznam útulkov, štatistiky, odoslanie príspevku). Bez tohto súboru appka pri štarte zhodí chybu.

### 3. Spusti dev server

```bash
npm run dev
```

Aplikácia beží na [http://localhost:3000](http://localhost:3000).

### Ďalšie príkazy

```bash
npm run build        # produkčný build
npm run start         # spustenie produkčného buildu (po npm run build)
npm run lint           # ESLint
npx tsc --noEmit       # type-check bez emitovania
```

## Tech stack

| Vrstva | Knižnica |
|---|---|
| Framework | Next.js 16 (App Router) |
| Jazyk | TypeScript |
| Server state | TanStack Query |
| Klient state | React Context + useReducer |
| Formulár | Formik + Zod |
| HTTP klient | axios |
| UI komponenty | MUI |
| Vlastné komponenty | styled-components |
| Lokalizácia | i18next / react-i18next (SK, EN) |

## Štruktúra projektu

```
src/
  api/            volania API — jeden súbor na doménu (napr. shelters.ts)
  app/            Next.js App Router — stránky a layout
  hooks/          TanStack Query hooky, zoskupené po doménach
  lib/
    lib.ts        axios instance (baseURL z env, error handling)
    i18n/         i18next konfigurácia a preklady (sk, en)
    query/        QueryClient provider a query keys
    theme/        MUI theme + styled-components theme, zdieľané design tokeny
    providers/    kompozícia všetkých providerov
  types/          zdieľané TypeScript typy a enumy
```

## API

Appka konzumuje 3 endpointy hosťovaného API (dokumentácia: https://frontend-assignment-api.goodrequest.dev/apidoc/):

- `GET /api/v1/shelters/` — zoznam zapojených útulkov
- `GET /api/v1/shelters/results` — celková vyzbieraná suma a počet darcov
- `POST /api/v1/shelters/contribute` — odoslanie príspevku
