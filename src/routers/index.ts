import express from "express";
import questionRouter from "./questionsRoutes";
import optionRouters from "./optionsRoutes";

const router = express.Router();

router.use("/questions", questionRouter);
router.use("/options", optionRouters);

export default router;
