import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  treeshake: true,
  outDir: 'dist',
  onSuccess: 'tsc --emitDeclarationOnly --declaration --declarationDir dist/types'
})
