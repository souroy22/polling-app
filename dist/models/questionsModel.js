"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema for Question document
const questionSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    options: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Option", default: [] }],
}, { timestamps: true });
// Model for Question document
const Question = (0, mongoose_1.model)("Question", questionSchema);
exports.default = Question;
//# sourceMappingURL=questionsModel.js.map