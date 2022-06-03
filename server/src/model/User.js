const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
        ten_dang_nhap: { type: DataTypes.STRING(50), allowNull: false },
        ten_day_du: DataTypes.STRING(150),
        mat_khau: { type: DataTypes.STRING(50), allowNull: false },
        so_dien_thoai: DataTypes.STRING(15),
        email: DataTypes.STRING(100),
        id_don_vi: { type: DataTypes.INTEGER, allowNull: false },
        dia_chi: DataTypes.STRING(500),
        kich_hoat: { type: DataTypes.INTEGER(1), allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "user",
        tableName: "NguoiDung",
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.mat_khau = bcrypt.hashSync(user.mat_khau, salt);
          },
        },
      }
    );
  }
}

module.exports = User;