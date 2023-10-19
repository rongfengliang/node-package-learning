const esbuild = require('esbuild');
esbuild.build({
  entryPoints: ['app.js'],
  bundle: true,
  target: "node14",
  platform:"node",
  sourcemap: false,
  outdir: 'distv3',
  minify: true
}).catch(() => process.exit(1));
