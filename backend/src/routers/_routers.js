import testRouter from "./test";
import foodsRouter from "./foods";
import settingsRouter from "./settings";

const router = {
  "/test": testRouter,
  "/foods": foodsRouter,
  "/settings": settingsRouter,
};

export default router;
