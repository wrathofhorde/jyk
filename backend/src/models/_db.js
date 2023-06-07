import Users from "./user";
import Comments from "./comment";
import sequelize from "sequelize";
import config from "../init/config";
import logger from "../init/logger";

const nodejs = new sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db
);

const init = async () => {
  try {
    await nodejs.sync({ force: false });
    // call init() first on every model
    Users.init(db.nodejs.sequelize);
    Comments.init(db.nodejs.sequelize);
    // after init(), call associate(). keep the order
    Users.associate(db.nodejs);
    Comments.associate(db.nodejs);

    const log = `Connected to ${config.db.host}`;
    logger.info(log);
    console.log(log);
  } catch (e) {
    const log = `DB ERROR: ${e.message}`;
    console.log(log);
    logger.error(log);
  }
};

const db = {
  init,
  nodejs: {
    sequelize: nodejs,
    Users,
    Comments,
  },
};

export default db;
