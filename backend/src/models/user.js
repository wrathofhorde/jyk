import sequelize from "sequelize";

class Users extends sequelize.Model {
  static init(seq) {
    return super.init(
      {
        name: {
          type: sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: sequelize.TINYINT,
          allowNull: false,
        },
        comment: {
          type: sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: sequelize.DATE,
          allowNull: false,
          defaultValue: sequelize.NOW,
        },
      },
      {
        sequelize: seq,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "Users",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Users.hasMany(db.Comments, { foreignKey: "commenter", sourceKey: "id" });
  }
}

export default Users;
