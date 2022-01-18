Cài các thư viện babel giúp import file JS cho các file.JS một cách dễ dàng hơn, ngắn gọn hơn mà ở bất cứ file gốc nào cũng không cần phải require("../*")
DOC: https://babeljs.io/docs/en/babel-preset-react
# Bước 1: yarn add 
# devDependencies:
+ yarn add @babel/core -dev
+ yarn add @babel/runtime -dev
+ yarn add @babel/preset-env -dev
+ yarn add @babel/preset-react -dev
+ yarn add babel-jest -dev
+ yarn add metro-react-native-babel-preset -dev

# dependencies:
+ yarn add babel-plugin-module-resolver 
+ yarn add react-native-dotenv
+ yarn add @babel/preset-flow
+ yarn add babel-preset-env


# Bước 2:Cấu hình babel.config.js

VD:
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


# Bước 3: Cấu hình .babelrc
{
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "extensions": [
          ".ios.js",
          ".android.js",
          ".js",
          ".ts",
          ".tsx",
          ".json"
        ],
        "alias": {
          "src": "./src",
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
    ],
    [
      "module:react-native-dotenv"
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "transform-remove-console"
      ]
    }
  }
}

