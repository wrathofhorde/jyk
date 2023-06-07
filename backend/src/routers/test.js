import axios from "axios";
import express from "express";
import Users from "../models/user";
import logger from "../init/logger";
import strings from "../common/strings";
import Comments from "../models/comment";
import errorCode from "../common/error-code";
import responseBody from "../common/responseBody";

const test = express.Router();

test.get("/info", (req, res) => {
  const msg = `${req.method} ${req.originalUrl} success`;
  console.log(msg);
  logger.info(msg);
  return res.send(msg);
});

test.get("/warn", (req, res) => {
  const msg = `${req.method} ${req.originalUrl} success`;
  console.log(msg);
  logger.warn(msg);
  return res.send(msg);
});

test.get("/error", async (req, res) => {
  const url = "http://localhost:5000/get";

  try {
    const response = await axios.get(url, {
      params: {
        id: "1111",
        module: "1111",
      },
    });
    console.log(`${response.data}`);
    res.send(`${response.data}`);
  } catch (e) {
    const msg = `${url} failure: ${e.message}`;
    console.log(msg);
    logger.error(msg);
    res.send(responseBody.make(errorCode.failure, msg));
  }
});

test.post("/insert/user", async (req, res) => {
  try {
    const { name, age, married, comment } = req.body;
    await Users.create({ name, age, married, comment });
    res.send(responseBody.make(errorCode.success, strings.success));
  } catch (e) {
    const msg = `insert user: ${e.message}`;
    console.log(msg);
    logger.error(msg);
    res.send(responseBody.make(errorCode.failure, msg));
  }
});

test.post("/insert/comment", async (req, res) => {
  try {
    const { name, comment } = req.body;
    const result = await Users.findOne({
      attributes: ["id"],
      where: {
        name,
      },
    });
    const commenter = result.id;
    await Comments.create({ commenter, comment });
    res.send(responseBody.make(errorCode.success, strings.success));
  } catch (e) {
    const msg = `insert comment: ${e.message}`;
    console.log(msg);
    logger.error(msg);
    res.send(responseBody.make(errorCode.failure, msg));
  }
});
export default test;
