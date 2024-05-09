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
const questionsModel_1 = __importDefault(require("../models/questionsModel"));
const getBaseURL_1 = require("../utility/getBaseURL");
const formatQuestionStructure_1 = require("../utility/formatQuestionStructure");
const questionsController = {
    // Create a question
    createQuestion: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title } = req.body;
            const question = yield questionsModel_1.default.create({ title });
            return res
                .status(200)
                .json({ text: question.title, options: [], id: question._id });
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
    // Delete a question
    deleteQuestion: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const questionId = req.params.id;
            const question = yield questionsModel_1.default.findById(questionId).populate("options");
            const hasVotes = question.options.some((option) => option.votes > 0);
            if (hasVotes) {
                return res
                    .status(400)
                    .json({ error: "Cannot delete question with votes on its options" });
            }
            yield questionsModel_1.default.findByIdAndDelete(questionId);
            return res.status(200).json({ message: "Question deleted successfully" });
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
    // View a question with its options
    getQuestionById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const questionId = req.params.id;
            const question = yield questionsModel_1.default.findById(questionId).populate("options");
            const baseURL = (0, getBaseURL_1.getBaseUrl)(req);
            const formattedQuestion = (0, formatQuestionStructure_1.formatQuestion)(question, baseURL);
            return res.status(200).json(formattedQuestion);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
    // View all questions with its options
    getAllQuestion: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const questions = yield questionsModel_1.default.find().populate("options");
            const baseURL = (0, getBaseURL_1.getBaseUrl)(req);
            const formattedQuestions = questions.map((question) => (0, formatQuestionStructure_1.formatQuestion)(question, baseURL));
            return res.status(200).json(formattedQuestions);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
                return res.status(500).json({ error: "Something went wrong!" });
            }
        }
    }),
};
exports.default = questionsController;
//# sourceMappingURL=questionsController.js.map