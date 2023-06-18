import path from "path";
import dotenv from "dotenv";
import { networkInterfaces } from "os";

const DEF_PORT = 3000;
const DEF_RESPONSE_WARN_TIME = 3;
const product = process.env.NODE_ENV === "product";
const file = product ? "product" : "develop";

dotenv.config({ path: path.resolve(__dirname, `../_env/${file}.env`) });

let port = parseInt(process.env.PORT);
port = isNaN(port) ? DEF_PORT : port;

let responseWarnTime = parseFloat(process.env.RESPONSE_WARN_TIME);
responseWarnTime = isNaN(responseWarnTime)
  ? DEF_RESPONSE_WARN_TIME
  : responseWarnTime;

const results = {};
const nets = networkInterfaces();
const names = Object.keys(nets);

names.forEach((name) => {
  nets[name].forEach((net) => {
    // console.log(net);
    const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
    if (net.family === familyV4Value && !net.internal) {
      results[name] = net.address;
    }
  });
});

console.log(results);
const eths = Object.keys(results);
const ip = eths.length === 1 ? results[eths[0]] : "127.0.0.1";

const config = {
  env: {
    product,
    ip,
    port,
    responseWarnTime,
    logDir: process.env.LOG_DIR,
    logMaxSize: process.env.LOG_MAX_SIZE,
    logMaxFiles: process.env.LOG_MAX_FILES,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};

export default config;
