module.exports = (api) => {
  api.cache(true);
  const babelEnv = api.env();
  if (
    babelEnv === "production" ||
    process.env.NODE_ENV === "production" ||
    process.env.BABEL_ENV === "production"
  ) {
    return {
      presets: ["module:metro-react-native-babel-preset"],
      exclude: ["**/*.png", "**/*.jpg", "**/*.gif"],
      plugins: [
        "transform-remove-console",
        "@babel/plugin-transform-runtime",
        [
          "module-resolver",
          {
            root: ["."],
            alias: {
              "@assets": "./assets",
              "@analytics": "./analytics",
              "@api": "./src/api",
              "@const": "./src/const",
              "@css": "./src/css",
              "@context": "./src/context",
              "@element": "./src/element",
              "@fireBase": "./src/fireBase",
              "@HOC": "./src/HOC",
              "@hooks": "./src/hooks",
              "@images": "./src/images",
              "@language": "./src/language",
              "@libJS": "./src/libJS",
              "@nativeModule": "./src/nativeModule",
              "@navigation": "./src/navigation",
              "@redux": "./src/redux",
              "@resources": "./src/resources",
              "@screen": "./src/screen",
              "@security": "./src/security",
              "@sentry": "./src/sentry",
              "@server": "./src/server",
              "@services": "./src/services",
              "@sql": "./src/sql",
              "@socket": "./src/socket",
              "@util": "./src/util"
            }
          }
        ]
      ]
    };
  }
  return {
    plugins: [
      "@babel/plugin-transform-runtime",
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@assets": "./assets",
            "@analytics": "./analytics",
            "@api": "./src/api",
            "@const": "./src/const",
            "@css": "./src/css",
            "@context": "./src/context",
            "@element": "./src/element",
            "@fireBase": "./src/fireBase",
            "@HOC": "./src/HOC",
            "@hooks": "./src/hooks",
            "@images": "./src/images",
            "@language": "./src/language",
            "@libJS": "./src/libJS",
            "@nativeModule": "./src/nativeModule",
            "@navigation": "./src/navigation",
            "@redux": "./src/redux",
            "@resources": "./src/resources",
            "@screen": "./src/screen",
            "@security": "./src/security",
            "@sentry": "./src/sentry",
            "@server": "./src/server",
            "@services": "./src/services",
            "@sql": "./src/sql",
            "@socket": "./src/socket",
            "@util": "./src/util"
          }
        }
      ]
    ],
    exclude: ["**/*.png", "**/*.jpg", "**/*.gif"]
  };
};
