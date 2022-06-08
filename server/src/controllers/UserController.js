const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const { CODE_1000 } = require("../middelewares/codeAuth");

const UserController = {
  async login(request, response) {
    try {
      const { ten_dang_nhap, mat_khau } = request.body.body;
      console.log("Kiểm tra validate API login:", request.body.body);
      console.log("Tài khoản:", ten_dang_nhap);
      console.log("Mật khẩu:", mat_khau);
      if (!ten_dang_nhap) {
        return response.status(200).json({
          mess: "Username invalid!",
          data: {},
          isError: true
        });
      }
      if (!mat_khau) {
        return response.status(200).send({
          mess: "Password invalid!",
          data: {},
          isError: true
        });
      }
      const token = generateToken({ id: ten_dang_nhap });
      return response.status(200).json({
        code: CODE_1000,
        mess: "Login success!",
        ten_dang_nhap,
        token,
        isError: false
      });
    } catch (error) {
      console.log("error", error);
      return response.status(500).json({ message: "Server Error!", error });
    }
  },
};

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 783000,
  });
}

module.exports = UserController;