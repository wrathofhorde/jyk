import express from "express";
import host from "../common/host";
import logger from "../init/logger";
import config from "../init/config";
import errorCode from "../common/error-code";
import validator from "../middleware/validator";
import responseBody from "../common/responseBody";

const nft = express.Router();

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/* ********* url parameters ********* **/
nft.get("/totalbalance", validator.apiKey, async (req, res, next) => {
  try {
    const url = host.getFullUrl(config.url.nftTotalBalance);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.success, strings.systemError));
  }
});

nft.get("/:wallet/balance", validator.apiKey, async (req, res) => {
  try {
    const { wallet } = req.params;
    const url = host.getFullUrl(config.url.nftBalance, wallet);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.success, strings.systemError));
  }
});

nft.get("/:wallet/:idx/tokenid", validator.apiKey, async (req, res) => {
  try {
    const { wallet, idx } = req.params;
    const url = host.getFullUrl(config.url.nftToken, wallet, idx);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

nft.get("/:wallet/alltokenid", validator.apiKey, async (req, res) => {
  try {
    const { wallet } = req.params;
    const url = host.getFullUrl(config.url.nftAllTokenid, wallet);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

nft.get("/:tokenid/owner", validator.apiKey, async (req, res) => {
  try {
    const { tokenid } = req.params;
    const url = host.getFullUrl(config.url.nftTokenOwner, tokenid);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

nft.get("/:tokenid/imgurl", validator.apiKey, async (req, res) => {
  try {
    const { tokenid } = req.params;
    const url = host.getFullUrl(config.url.nftTokenImgUrl, tokenid);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

nft.get("/:tokenid/attributes", validator.apiKey, async (req, res) => {
  try {
    const { tokenid } = req.params;
    const url = host.getFullUrl(config.url.nftTokenAttr, tokenid);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

/* ********* post method ********* */
nft.post("/balance", validator.jsonWebToken, async (req, res) => {
  try {
    const { wallet } = req.body;
    if (wallet === undefined) {
      return res.send(strings.BAD_PARAMETER);
    }
    const url = host.getFullUrl(config.url.nftBalance, wallet);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

/* ********* query parameters ********* */
nft.get("/owner", validator.apiKey, async (req, res) => {
  try {
    const { tokenid } = req.query;
    const url = host.getFullUrl(config.url.nftTokenOwner, tokenid);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

nft.get("/Tokenid", validator.apiKey, async (req, res) => {
  try {
    const { wallet, idx } = req.query;
    const url = host.getFullUrl(config.url.nftToken, wallet, idx);
    return host.requestGet(url, res);
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

export default nft;
