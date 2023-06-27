import express from "express";
import config from "../init/config";
import logger from "../init/logger";
import strings from "../common/strings";
import errorCode from "../common/error-code";
import responseBody from "../common/responseBody";

const path = `http://${config.env.ip}:${config.env.port}/foods/`;
const items = [
  {
    id: 1,
    image: `${path}Hamburger.png`,
    name: "Hamburger",
    price: 9.99,
  },
  {
    id: 2,
    image: `${path}Pizza.png`,
    name: "Pizza",
    price: 18.99,
  },
  {
    id: 3,
    image: `${path}ApplePie.png`,
    name: "Apple Pie",
    price: 4.5,
  },
  {
    id: 4,
    image: `${path}ThanksgivingTurkey.png`,
    name: "Thanksgiving Turkey",
    price: 149.99,
  },
  {
    id: 5,
    image: `${path}FriedChicken.png`,
    name: "Fried Chicken",
    price: 20,
  },
  {
    id: 6,
    image: `${path}BuffaloWings.png`,
    name: "Buffalo Wings",
    price: 8,
  },
  {
    id: 7,
    image: `${path}Biscuits.png`,
    name: "Biscuits",
    price: 2,
  },
  {
    id: 8,
    image: `${path}Baguette.png`,
    name: "Baguette",
    price: 3,
  },
  {
    id: 9,
    image: `${path}DanishPastry.png`,
    name: "Danish Pastry",
    price: 1,
  },
  {
    id: 10,
    image: `${path}Marmalade.png`,
    name: "Marmalade",
    price: 5,
  },
  {
    id: 11,
    image: `${path}Porridge.png`,
    name: "Porridge",
    price: 18,
  },
  {
    id: 12,
    image: `${path}Kipper.png`,
    name: "Kipper",
    price: 7,
  },
  {
    id: 13,
    image: `${path}Sausages.png`,
    name: "Sausages",
    price: 7,
  },
  {
    id: 14,
    image: `${path}SemiSkimmedMilk.png`,
    name: "Semi-Skimmed Milk",
    price: 2.5,
  },
  {
    id: 15,
    image: `${path}DriedApricots.png`,
    name: "Dried Apricots",
    price: 6,
  },
  {
    id: 16,
    image: `${path}Sultanas.png`,
    name: "Sultanas",
    price: 2.99,
  },
  {
    id: 17,
    image: `${path}Raspberry.png`,
    name: "Raspberry",
    price: 1,
  },
  {
    id: 18,
    image: `${path}Strawberry.png`,
    name: "Strawberry",
    price: 1,
  },
  {
    id: 19,
    image: `${path}IceCream.png`,
    name: "Ice Cream",
    price: 3,
  },
  {
    id: 20,
    image: `${path}SmokedSalmon.png`,
    name: "Smoked Salmon",
    price: 16,
  },
];

const foods = express.Router();

/* ********* url parameters ********* **/
foods.get("/list", async (req, res, next) => {
  console.log("/list");
  try {
    return res.send(
      responseBody.make(errorCode.success, strings.success, items)
    );
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

foods.post("/order", async (req, res) => {
  console.log("/order");
  try {
    console.log(req.body);
    const { tableNo, orderList, total } = req.body;
    const acc = orderList.reduce((acc, cur) => acc + cur.total, 0);
    const check = Math.round(acc * 100) / 100;

    if (check !== total) {
      logger.error(`total:${total} and check:${check} mismatched`);
      return res.send(responseBody.make(errorCode.failure, strings.failure));
    }
    if (tableNo.length === 0) {
      logger.error(`tableNo empty`);
      return res.send(responseBody.make(errorCode.failure, strings.failure));
    }
    if (orderList.length === 0) {
      logger.error(`orderList empty`);
      return res.send(responseBody.make(errorCode.failure, strings.failure));
    }

    return res.send(responseBody.make(errorCode.success, strings.success));
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.send(responseBody.make(errorCode.failure, strings.systemError));
  }
});

export default foods;
