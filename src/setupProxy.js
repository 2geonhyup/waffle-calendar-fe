const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/googlelogin", {
      target: "http://localhost:3005",
      changeOrigin: true,
    })
  );
};
