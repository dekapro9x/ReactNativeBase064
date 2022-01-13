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
