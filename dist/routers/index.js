"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questionsRoutes_1 = __importDefault(require("./questionsRoutes"));
const optionsRoutes_1 = __importDefault(require("./optionsRoutes"));
const router = express_1.default.Router();
router.use("/questions", questionsRoutes_1.default);
router.use("/options", optionsRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map