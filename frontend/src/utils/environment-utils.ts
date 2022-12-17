export interface EnvironmentVariables {
  API_URL: string;
}

declare global {
  interface Window {
    __env: EnvironmentVariables;
  }
}

export const environmentVariables: EnvironmentVariables =
  window.__env || ({} as EnvironmentVariables);
