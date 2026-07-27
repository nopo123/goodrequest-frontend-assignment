import 'styled-components';

import type { DesignTokens } from './tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends DesignTokens {}
}
