/// <reference types="vite/client" />

import { type EnvironmentValues } from './vite-env-mode.enum'

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_ENVIRONMENT: EnvironmentValues
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
