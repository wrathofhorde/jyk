import config from "./config";
import winston from "winston";
import winstonHour from "winston-daily-rotate-file";

// 디버깅 시에 콘솔 출력이 필요하면 console 객체를 사용하면
// build 시 babel plug-in이 console 객체를 삭제해 줌

const { combine, timestamp, printf } = winston.format;
const logFormat = printf((info) => {
  return `[${info.timestamp} | ${info.level}] ${info.message}`;
});
const logger = winston.createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }), logFormat),
  transports: [
    new winstonHour({
      filename: "%DATE%.log", // datePattern 날짜 형식대로 사용
      datePattern: "YYYY-MM-DD-HH", // 지정한 마지막 단위로 log 생성, 현재는 시간 단위
      dirname: config.env.logDir, // 로그 파일 저장 디렉토리
      maxSize: config.env.logMaxSize, // 로그파일 최대 크기
      maxFiles: config.env.logMaxFiles, // 로그파일 보존 기간
    }),
  ],
});

logger.stream = {
  write: (msg) => {
    // 마지막 중복된 LF 제거
    logger.info(msg.substring(0, msg.lastIndexOf("\n")));
  },
};

// 실행 환경 로그에 저장
logger.info(
  `${config.env.product ? "Pro" : "Dev"} config: ${JSON.stringify(config.env)}`
);

export default logger;
