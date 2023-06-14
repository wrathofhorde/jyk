import testRouter from "./test";
import foodRouter from "./food";

const router = {
  "/test": testRouter,
  "/food": foodRouter,
};

export default router;
