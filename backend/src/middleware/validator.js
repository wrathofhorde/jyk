import jwt from "jsonwebtoken";
import logger from "../init/logger";
import config from "../init/config";
import strings from "../common/strings";
import errorCode from "../common/error-code";
import responseBody from "../common/responseBody";

const apiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (config.api.key !== apiKey) {
    logger.error(`API_KEY Error:${apiKey}`);
    return res.send(responseBody.make(errorCode.failure, strings.apikeyError));
  }
  return next();
};

const jsonWebToken = (req, res, next) => {
  try {
    const token = req.headers["jwt"];
    console.assert(config.api.secretKey.length !== 0, "secretKey empty");
    jwt.verify(token, config.api.secretKey);
    return next();
  } catch (e) {
    logger.error(`${e.message}, ${req.headers.jwt}`);
    if (e.name === "TokenExpiredError") {
      return res.send(responseBody.make(errorCode.failure, strings.jwtExpired));
    }
    return res.send(responseBody.make(errorCode.failure, strings.jwtInvalid));
  }
};

const sign = () => {
  const payload = {
    sub: "API",
    accountId: 1100002400,
    iss: "barunsonena.com",
    exp: 1660100020,
  };
  const options = {
    header: {
      typ: "JWT",
      alg: "HS256",
    },
    noTimestamp: true,
  };
  console.assert(config.api.secretKey.length !== 0, "secretKey empty");
  const token = jwt.sign(payload, config.api.secretKey, options);
  console.log(`jwt:${token}`);
};

const validator = {
  apiKey,
  jsonWebToken,
};

export default validator;
