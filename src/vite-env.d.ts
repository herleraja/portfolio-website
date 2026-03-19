/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_STACKOVERFLOW_ID: string
  readonly VITE_GITHUB_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


