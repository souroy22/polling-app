"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const optionsController_1 = __importDefault(require("../controllers/optionsController"));
const optionRouters = express_1.default.Router();
optionRouters.post("/:id/add_vote", optionsController_1.default.addVote);
optionRouters.delete("/:id", optionsController_1.default.deleteOption);
exports.default = optionRouters;
//# sourceMappingURL=optionsRoutes.js.map