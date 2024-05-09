import express from "express";
import questionsController from "../controllers/questionsController";
import optionController from "../controllers/optionsController";
import validationCheck from "../middlewares/validationCheck";

const questionRouter = express.Router();

questionRouter.get("/", questionsController.getAllQuestion);
questionRouter.post(
  "/create",
  validationCheck.validateCreateQuestion,
  questionsController.createQuestion
);
questionRouter.get("/:id", questionsController.getQuestionById);
questionRouter.post(
  "/:id/options/create",
  validationCheck.validateCreateOption,
  optionController.addOption
);
questionRouter.delete("/:id", questionsController.deleteQuestion);

export default questionRouter;
