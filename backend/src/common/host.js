import axios from "axios";
import strings from "./strings";
import config from "../init/config";
import logger from "../init/logger";
import errorCode from "./error-code";
import responseBody from "./responseBody";

const get = (url) => {
  const Authorization = config.api.auth;
  return axios.get(url, {
    headers: { Authorization },
  });
};

const getFullUrl = (url, ...args) => {
  const len = url.split(":").length - 1;

  if (len !== args.length) {
    throw "getFullUrl url/args error";
  }

  const regex = /:(.*?)(?=\/)/;
  for (let i = 0; i < args.length; ++i) {
    url = url.replace(regex, args[i]);
  }

  return `${config.api.host}${url}`;
};

const requestGet = async (url, res) => {
  logger.info(`GET ${url}`);

  try {
    const response = await get(url);
    return res.send(
      responseBody.make(errorCode.success, strings.success, response.data)
    );
  } catch (e) {
    logger.error(e.message);
    return res.send(responseBody.make(errorCode.failure, e.message));
  }
};

const host = {
  get,
  getFullUrl,
  requestGet,
};

export default host;
