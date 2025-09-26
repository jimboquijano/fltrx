import { resolve } from 'path'
import { defineConfig } from 'vite'
import { minify } from 'terser'

function minifyBundles() {
  return {
    name: 'minifyBundles',
    async generateBundle(options, bundle) {
      for (let key in bundle) {
        if (bundle[key].type == 'chunk' && key.endsWith('.js')) {
          const minifyCode = await minify(bundle[key].code, {
            sourceMap: false
          })
          bundle[key].code = minifyCode.code
        }
      }
      return bundle
    }
  }
}

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/fltrx.js'),
      name: 'fltrx',
      fileName: (format) => `fltrx.${format}.js`
    }
  },
  plugins: [minifyBundles()]
})
