Cấu hình TS: 
Tạo file TS config + Apptree.
# Bước 1: yarn add eslint-import-resolver-typescript -D

# Bước 2: Tạo file tsconfig.json
Cấu hình paths: 
VD :
        "paths": {
            "@assets/*": [
                "assets/*"
            ],
            "@api/*": [
                "src/api/*"
            ],
          "src/const/*"
        
            "*": [
                "./*",
                "node_modules/*"
            ],
        }

# Bước 3: Chạy lệnh lấy cấu hình AppTree (cmd => tree )

Chú ý mấy thư viện react TS báo đỏ sai cấu hình:
Tham khảo: 
+ https://stackoverflow.com/questions/40899868/typescript-cannot-find-module-react

+ https://www.codegrepper.com/code-examples/whatever/Could+not+find+a+declaration+file+for+module+%27react-router-dom%27

+ https://www.codegrepper.com/code-examples/typescript/Could+not+find+a+declaration+file+for+module+%27validator%27

Kiểm tra các file cần cấu hình: 
# package.json
"eslint-import-resolver-typescript": "^2.5.0",
// Add in .eslintrc
"settings": {
        "import/resolver": {
            "typescript": {}	
        }
    }

# .eslintrc.js
module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:react/recommended"],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};

# tsconfig.json
"typeRoots": [  "./typings",  "./node_modules/@types/"]
"noImplicitAny": false