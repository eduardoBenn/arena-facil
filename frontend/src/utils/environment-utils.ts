export interface EnvironmentVariables {
  API_URL: string;
}

declare global {
  interface Window {
    __env: EnvironmentVariables;
  }
}

// process.env.NODE_ENV

export const environmentVariables: EnvironmentVariables =
  window.__env ||
  ({
    API_URL: "http://localhost:8080",
  } as EnvironmentVariables);
