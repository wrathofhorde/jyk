import sequelize from "sequelize";

class Comments extends sequelize.Model {
  static init(seq) {
    return super.init(
      {
        comment: {
          type: sequelize.STRING(100),
          allowNull: false,
        },
        created_at: {
          type: sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize: seq,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "Comments",
        tableName: "comments",
        charset: "tf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comments.belongsTo(db.Users, {
      foreignKey: "commenter",
      targetKey: "id",
    });
  }
}

export default Comments;
