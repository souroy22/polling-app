"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema for Option document
const optionSchema = new mongoose_1.Schema({
    text: { type: String, required: true, trim: true },
    votes: { type: Number, default: 0 },
}, { timestamps: true });
// Model for Option document
const Option = (0, mongoose_1.model)("Option", optionSchema);
exports.default = Option;
//# sourceMappingURL=optionsModel.js.map