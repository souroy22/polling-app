"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questionsController_1 = __importDefault(require("../controllers/questionsController"));
const optionsController_1 = __importDefault(require("../controllers/optionsController"));
const validationCheck_1 = __importDefault(require("../middlewares/validationCheck"));
const questionRouter = express_1.default.Router();
questionRouter.get("/", questionsController_1.default.getAllQuestion);
questionRouter.post("/create", validationCheck_1.default.validateCreateQuestion, questionsController_1.default.createQuestion);
questionRouter.get("/:id", questionsController_1.default.getQuestionById);
questionRouter.post("/:id/options/create", validationCheck_1.default.validateCreateOption, optionsController_1.default.addOption);
questionRouter.delete("/:id", questionsController_1.default.deleteQuestion);
exports.default = questionRouter;
//# sourceMappingURL=questionsRoutes.js.map