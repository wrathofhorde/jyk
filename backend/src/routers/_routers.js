import testRouter from "./test";
import foodsRouter from "./foods";

const router = {
  "/test": testRouter,
  "/foods": foodsRouter,
};

export default router;
