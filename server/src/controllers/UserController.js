const User = require("../model/User");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 783000,
  });
}

module.exports = {
  async login(req, res) {
    try {
      const { mat_khau, ten_dang_nhap } = req.body;
      const user = await User.findOne({ where: { ten_dang_nhap } });
      if (!user) {
        return res.status(400).send({
          message: "E-mail invalid!",
          user: {},
        });
      }
      if (!bcrypt.compareSync(mat_khau, user.mat_khau)) {
        return res.status(400).send({
          message: "Password invalid",
          user: {},
        });
      }
      user.mat_khau = undefined;
      const token = generateToken({ id: user.id });
      return res.status(200).send({
        code: 1000,
        message: "success",
        user,
        token,
      });
    } catch (error) {
      return res.status(400).json({ message: "fail", error });
    }
  },
};
