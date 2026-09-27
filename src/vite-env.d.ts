/// <reference types="vite/client" />

interface Window {
  /** Set by main.tsx once the app bundle runs. Read by the fallback in index.html. */
  __SN_BOOTED__?: boolean;
}
