import { Request, Response } from "express";
import Question from "../models/questionsModel";
import { getBaseUrl } from "../utility/getBaseURL";
import { formatQuestion } from "../utility/formatQuestionStructure";

const questionsController = {
  // Create a question
  createQuestion: async (req: Request, res: Response) => {
    try {
      const { title } = req.body;
      const question = await Question.create({ title });
      return res
        .status(200)
        .json({ text: question.title, options: [], id: question._id });
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },

  // Delete a question
  deleteQuestion: async (req: Request, res: Response) => {
    try {
      const questionId = req.params.id;
      const question = await Question.findById(questionId).populate("options");
      const hasVotes = question.options.some((option: any) => option.votes > 0);
      if (hasVotes) {
        return res
          .status(400)
          .json({ error: "Cannot delete question with votes on its options" });
      }
      await Question.findByIdAndDelete(questionId);
      return res.status(200).json({ message: "Question deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },

  // View a question with its options
  getQuestionById: async (req: Request, res: Response) => {
    try {
      const questionId = req.params.id;
      const question = await Question.findById(questionId).populate("options");
      const baseURL = getBaseUrl(req);
      const formattedQuestion = formatQuestion(question, baseURL);
      return res.status(200).json(formattedQuestion);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },

  // View all questions with its options
  getAllQuestion: async (req: Request, res: Response) => {
    try {
      const questions = await Question.find().populate("options");
      const baseURL = getBaseUrl(req);
      const formattedQuestions = questions.map((question: any) =>
        formatQuestion(question, baseURL)
      );
      return res.status(200).json(formattedQuestions);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },
};

export default questionsController;
