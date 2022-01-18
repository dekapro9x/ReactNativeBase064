module.exports = api => {
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
        [
          "module:react-native-dotenv",
          {
            moduleName: "@env",
            path: ".env",
            blacklist: null,
            whitelist: null,
            safe: true,
            allowUndefined: true,
          },
        ],
      ],
    };
  }
  return {
    presets: [
      "module:metro-react-native-babel-preset",
    ],
    exclude: ["**/*.png", "**/*.jpg", "**/*.gif"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: true,
          allowUndefined: true,
        },
      ],
    ],
  };
};
