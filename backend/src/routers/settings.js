import express from "express";
import config from "../init/config";
import logger from "../init/logger";
import strings from "../common/strings";
import errorCode from "../common/error-code";
import responseBody from "../common/responseBody";

const settings = express.Router();

settings.post("/pin", async (req, res) => {
  console.log("/pin");
  try {
    const { pinCode } = req.body;
    console.log(pinCode);
    console.log(typeof pinCode);
    if (pinCode !== "2890") {
      return res.send(responseBody.make(errorCode.failure, strings.failure));
    }
    return res.send(responseBody.make(errorCode.success, strings.success));
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

export default settings;
