/**
 * Development environment.
 * Uses relative path /api-agent so the Angular dev server proxies to the agent
 * (http://localhost:4302), avoiding CORS. Agent must be running (e.g. npm run dev:agent in Orbin).
 */
export const environment = {
  production: false,
  /** Base URL for the dev agent: relative path so proxy is used (no CORS). */
  agentBaseUrl: '/api-agent',
};
