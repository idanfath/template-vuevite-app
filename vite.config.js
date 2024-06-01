import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import VueRouter from 'unplugin-vue-router/vite'
// import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    // VueRouter({
    //   routesFolder: 'src/views',
    //   extensions: ['.vue'],
    // }),
    vue(),
    Icons({
      autoInstall: true,
    }),
    Components({
      dirs: ['./src/components'],
      extensions: ['vue'],
      directoryAsNamespace: true,
      resolvers: [
        IconsResolver(
          {
            componentPrefix: 'i', // default
          }
        ),
      ],
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      dirs: ['./src'],
      imports: [
        // VueRouterAutoImports,
        'vue',
        'vue-router',
        {
          // 'vue-router/auto': ['useLink', 'definePage'],
          '@vueuse/core': ['useStorage', 'useWindowSize'],
          'swiper/vue': ['Swiper', 'SwiperSlide'],
          '@vueuse/router': ['useRouteParams'],
          'axios': [['default', 'axios']], //default as axios
          'sweetalert2': [['default', 'Swal']],
          '@vuelidate/core': [['default', 'useValidate']],
          '@vuelidate/validators': ['email', 'required', 'minLength', 'maxLength', 'sameAs', 'requiredIf', 'requiredUnless', 'minValue', 'maxValue', 'alpha', 'alphaNum', 'numeric', 'integer', 'between', 'decimal', 'and', 'or', 'not', 'helpers'],
          '@iconify/vue': ['Icon'],
        }
      ]
    }),
  ],
  css: {
    postcss: {
      plugins: [
        require('swiper/css'),
        // other CSS imports...
      ],
    },
  },
})

