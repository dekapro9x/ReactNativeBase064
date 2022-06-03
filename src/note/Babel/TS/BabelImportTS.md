Cài các thư viện babel giúp import file JS cho các file.JS một cách dễ dàng hơn, ngắn gọn hơn mà ở bất cứ file gốc nào cũng không cần phải require("../*")
DOC: https://babeljs.io/docs/en/babel-preset-react
+ @babel/core
+ @babel/runtime
+ babel-jest
+ babel-plugin-module-resolver 
+ metro-react-native-babel-preset
# Bước 1: yarn add @babel/core @babel/runtime babel-jest babel-plugin-module-resolver metro-react-native-babel-preset

# Bước 2:Cấu hình tsconfig.json

VD:
       "paths": {
            "@assets/*": [
                "assets/*"
            ],
            "@analytics/*": [
                "analytics/*"
            ],
            "@api/*": [
                "src/api/*"
            ],
            "@constants/*": [
                "src/const/*"
            ],
            "@context/*": [
                "src/context/*"
            ],
            "@element/*": [
                "src/element/*"
            ],
            "@fireBase/*": [
                "src/fireBase/*"
            ],
            "@HOC/*": [
                "src/HOC/*"
            ],
            "@hooks/*": [
                "src/hooks/*"
            ],
            "@images/*": [
                "src/images/*"
            ],
            "@language/*": [
                "src/language/*"
            ],
            "@libJS/*": [
                "src/libJS/*"
            ],
            "@nativeModule/*": [
                "src/nativeModule/*"
            ],
            "@navigation/*": [
                "src/navigation/*"
            ],
            "@redux/*": [
                "src/redux/*"
            ],
            "@resources/*": [
                "src/resources/*"
            ],
            "@screen/*": [
                "src/screen/*"
            ],
            "@security/*": [
                "src/security/*"
            ],
            "@sentry/*": [
                "src/servicesApp/sentry/*"
            ],
            "@server/*": [
                "src/server/*"
            ],
            "@services/*": [
                "src/services/*"
            ],
            "@util/*": [
                "src/util/*"
            ],
            "*": [
                "./*",
                "node_modules/*"
            ],
        }

# Bước 3: Kiểm thử import TSconfig.
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


