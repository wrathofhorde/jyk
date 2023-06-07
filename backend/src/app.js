import db from "./models/_db";
import app from "./init/server";
import logger from "./init/logger";
import config from "./init/config";

db.init();

const port = config.env.port;

app.listen(port, () => {
  console.log(`✅ http://localhost:${port}/`);
  logger.info(`Start Server port:${port}`);
});
