import express from "express";
import config from "../init/config";
import logger from "../init/logger";
import strings from "../common/strings";
import errorCode from "../common/error-code";
import responseBody from "../common/responseBody";

const path = `http://${config.env.ip}:${config.env.port}/foods/`;
const items = [
  {
    image: `${path}Hamburger.png`,
    name: "Hamburger",
    price: 10,
  },
  {
    image: `${path}Pizza.png`,
    name: "Pizza",
    price: 20,
  },
  {
    image: `${path}ApplePie.png`,
    name: "Apple Pie",
    price: 5,
  },
  {
    image: `${path}ThanksgivingTurkey.png`,
    name: "Thanksgiving Turkey",
    price: 150,
  },
  {
    image: `${path}FriedChicken.png`,
    name: "Fried Chicken",
    price: 20,
  },
  {
    image: `${path}BuffaloWings.png`,
    name: "Buffalo Wings",
    price: 8,
  },
  {
    image: `${path}Biscuits.png`,
    name: "Biscuits",
    price: 2,
  },
  {
    image: `${path}Baguette.png`,
    name: "Baguette",
    price: 3,
  },
  {
    image: `${path}DanishPastry.png`,
    name: "Danish Pastry",
    price: 1,
  },
  {
    image: `${path}Marmalade.png`,
    name: "Marmalade",
    price: 5,
  },
  {
    image: `${path}Porridge.png`,
    name: "Porridge",
    price: 18,
  },
  {
    image: `${path}Kipper.png`,
    name: "Kipper",
    price: 7,
  },
  {
    image: `${path}Sausages.png`,
    name: "Sausages",
    price: 7,
  },
  {
    image: `${path}SemiSkimmedMilk.png`,
    name: "Semi-Skimmed Milk",
    price: 2,
  },
  {
    image: `${path}DriedApricots.png`,
    name: "Dried Apricots",
    price: 6,
  },
  {
    image: `${path}Sultanas.png`,
    name: "Sultanas",
    price: 3,
  },
  {
    image: `${path}Raspberry.png`,
    name: "Raspberry",
    price: 1,
  },
  {
    image: `${path}Strawberry.png`,
    name: "Strawberry",
    price: 1,
  },
  {
    image: `${path}IceCream.png`,
    name: "Ice Cream",
    price: 3,
  },
  {
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
    return res.send(responseBody.make(errorCode.success, strings.systemError));
  }
});

export default foods;
