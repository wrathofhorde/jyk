// import hpp from "hpp";
// import helmet from "helmet";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import express from "express";
import config from "./config";
import logger from "./logger";
import responseTime from "response-time";
import routers from "../routers/_routers";

const app = express();

// if (config.env.product) {
//   app.use(hpp());
//   app.use(helmet());
// }

const morganFormat =
  ":remote-addr - :remote-user " +
  ":method :url HTTP/:http-version " +
  ":status :res[content-length] :user-agent";

app.use(morgan(morganFormat, { stream: logger.stream })); // morgan file에 저장
app.use(
  //응답시간이 3초 이상이면 로그로 남김...
  responseTime((req, res, time) => {
    if (time < config.env.responseWarnTime) return;
    const digit = 1000;
    time = Math.round(time * digit) / digit;
    logger.warn(`${req.method} ${req.originalUrl} ${time}ms`);
  })
);
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../public`));
// cors setting
app.use(cors());
// routing table 적용
for (let key in routers) {
  app.use(key, routers[key]);
}

app.get("/", (req, res) => {
  const react = config.env.product
    ? path.join(__dirname, "../react/index.html")
    : path.join(__dirname, "../../dst/react/index.html");
  res.sendFile(react);
});

export default app;
