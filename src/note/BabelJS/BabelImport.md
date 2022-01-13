Cài các thư viện babel giúp import file JS cho các file.JS một cách dễ dàng hơn, ngắn gọn hơn mà ở bất cứ file gốc nào cũng không cần phải require("../*")
DOC: https://babeljs.io/docs/en/babel-preset-react
+ @babel/core
+ @babel/runtime
+ babel-jest
+ babel-plugin-module-resolver 
+ metro-react-native-babel-preset
# Bước 1: yarn add @babel/core @babel/runtime babel-jest babel-plugin-module-resolver metro-react-native-babel-preset

# Bước 2:Cấu hình babel.config.js

VD:
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    '@babel/plugin-transform-runtime',
    ['module-resolver', {
      root: ['.'],
      alias: { 
        '@assets': './assets',
        "@api":'./src/api',
        "@const":'./src/const',
        "@context":'./src/context',
        "@element":'./src/element',
        "@HOC":'./src/HOC',
        "@hooks":'./src/hooks',
        "@images":'./src/images',
        "@libJS":'./src/libJS',
        "@navigation":'./src/navigation',
        "@redux":'./src/redux',
        "@resources":'./src/resources',
        "@screen":'./src/screen',
        "@security":'./src/security',
        "@server":'./src/server',
        "@services":'./src/services',
        "@sql":'./src/sql',
        "@util":'./src/util',
      },
    }],
  ],
  exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};

# Bước 3: Kiểm thử import babelJS và TSconfig.
+ Vào file.js import qua babel js.
+ Vào file.ts import qua tsconfig.

+ Kiểm tra kết quả:
success Saved 8 new dependencies.
info Direct dependencies
├─ @babel/core@7.16.7
├─ @babel/runtime@7.16.7
├─ babel-jest@27.4.6
├─ babel-plugin-module-resolver@4.1.0
└─ metro-react-native-babel-preset@0.66.2
info All dependencies
├─ @babel/core@7.16.7
├─ @babel/runtime@7.16.7
├─ babel-jest@27.4.6
├─ babel-plugin-module-resolver@4.1.0
├─ find-babel-config@1.2.0
├─ metro-react-native-babel-preset@0.66.2
├─ pkg-up@3.1.0
└─ reselect@4.1.5
$ patch-package
patch-package 6.4.7
Applying patches...
react-native-bootsplash@4.0.2 ✔
Done in 17.12s.


