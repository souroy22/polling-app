"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const optionsModel_1 = __importDefault(require("../models/optionsModel"));
const questionsModel_1 = __importDefault(require("../models/questionsModel"));
const formatQuestionStructure_1 = require("../utility/formatQuestionStructure");
const getBaseURL_1 = require("../utility/getBaseURL");
const optionController = {
    // Add options to a specific question
    addOption: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const questionId = req.params.id;
            console.log("questionId", questionId);
            const { text } = req.body;
            const option = yield optionsModel_1.default.create({ text });
            const updatedQuestion = yield questionsModel_1.default.findByIdAndUpdate(questionId, { $push: { options: option._id } }, // Push the new option's _id to the options array
            { new: true } // Return the updated document
            ).populate("options");
            // If the question was not found
            if (!updatedQuestion) {
                return res.status(404).json({ error: "Question not found" });
            }
            const baseURL = (0, getBaseURL_1.getBaseUrl)(req);
            return res.status(200).json((0, formatQuestionStructure_1.formatQuestion)(updatedQuestion, baseURL));
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
    // Delete an option
    deleteOption: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const optionId = req.params.id;
            const option = yield optionsModel_1.default.findById(optionId);
            if (!option) {
                return res.status(404).json({ error: "Option not found" });
            }
            if (option.votes > 0) {
                return res
                    .status(400)
                    .json({ error: "Cannot delete option with votes" });
            }
            yield optionsModel_1.default.findByIdAndDelete(optionId);
            return res.json({ message: "Option deleted successfully" });
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
    // Add a vote to an option
    addVote: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const optionId = req.params.id;
            const option = yield optionsModel_1.default.findById(optionId);
            option.votes++;
            yield option.save();
            return res.status(200).json({ message: "Vote added successfully" });
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
};
exports.default = optionController;
//# sourceMappingURL=optionsController.js.map