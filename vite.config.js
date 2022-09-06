import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess';
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // console.log('env variables', env.WEB_COMPONENTS)

  if (command == 'build') {
    return {
      build: {
        lib: {
          // entry: resolve(__dirname, 'src/lib/build.wc.js'),
          entry: resolve(__dirname, '.wc-build-temp/build.wc.js'),
          name: 'MaskingTape',
          // the proper extensions will be added
          fileName: 'masking-tape',

        },
        outDir: './dist/wc-lib',
        // rollupOptions: {
        //   // https://rollupjs.org/guide/en/#big-list-of-options
        //   input: ["./src/build.wc.svelte"],
        //   output: {
        //     format: "iife",
        //     dir: "dist-wc/build/",
        //   },
        // }
      },

      plugins: [svelte({
        preprocess: autoPreprocess(),
        compilerOptions: {
          customElement: true,
        },
      })]
    }
  }

  // default
  return {
    plugins: [svelte({
      preprocess: autoPreprocess(),
    })]
  }
})