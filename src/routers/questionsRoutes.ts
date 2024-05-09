import express from "express";
import questionsController from "../controllers/questionsController";
import optionController from "../controllers/optionsController";

const questionRouter = express.Router();

questionRouter.get("/", questionsController.getAllQuestion);
questionRouter.post("/create", questionsController.createQuestion);
questionRouter.get("/:id", questionsController.getQuestionById);
questionRouter.use("/:id/options/create", optionController.addOption);
questionRouter.delete("/:id", questionsController.deleteQuestion);

export default questionRouter;
