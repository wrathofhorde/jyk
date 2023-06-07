import path from "path";
import dotenv from "dotenv";

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








const config = {
  env: {
    product,
    port,
    responseWarnTime,
    logDir: process.env.LOG_DIR,
    logMaxSize: process.env.LOG_MAX_SIZE,
    logMaxFiles: process.env.LOG_MAX_FILES,
  },
  api: {
    key: process.env.API_KEY,
    host: process.env.API_HOST,
    auth: process.env.API_AUTH,
    secretKey: process.env.API_JWT_SECRET_KEY,
  },
  url: {
    nftToken: process.env.URL_NFT_TOKEN,
    nftBalance: process.env.URL_NFT_BALANCE,
    nftTokenAttr: process.env.URL_NFT_TOKEN_ATTR,
    nftTokenOwner: process.env.URL_NFT_TOKEN_OWNER,
    nftAllTokenid: process.env.URL_NFT_ALL_TOKEN_ID,
    nftTokenImgUrl: process.env.URL_NFT_TOKEN_IMG_URL,
    nftTotalBalance: process.env.URL_NFT_TOTAL_BALANCE,
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
