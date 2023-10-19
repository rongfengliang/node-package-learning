import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['app.js'],
  splitting: true,
  noExternal: ['npmlog'],
  sourcemap: false,
  outDir: 'distv2',
  clean: true,
})