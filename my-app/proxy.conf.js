/**
 * Dev server proxy: /api-agent/* -> http://localhost:4302/*
 * Avoids CORS when the Angular app (e.g. localhost:4000) calls the A2UI agent.
 * Restart ng serve after changes. Ensure the agent is running: curl http://localhost:4302/api/ui/user-settings
 */
const PROXY_TARGET = 'http://localhost:4302';

module.exports = [
  {
    context: ['/api-agent'],
    target: PROXY_TARGET,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api-agent': ''
    },
    logLevel: 'debug',
    onError(err, req, res) {
      console.error('[proxy] Error proxying to agent:', err.message);
      res.writeHead(502, { 'Content-Type': 'text/plain' });
      res.end(
        'Proxy could not reach the agent at ' +
          PROXY_TARGET +
          '. Is it running? Try: curl ' +
          PROXY_TARGET +
          '/api/ui/user-settings'
      );
    }
  }
];
