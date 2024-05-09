import { Request, Response } from "express";
import Option from "../models/optionsModel";
import Question from "../models/questionsModel";
import { formatQuestion } from "../utility/formatQuestionStructure";
import { getBaseUrl } from "../utility/getBaseURL";

const optionController = {
  // Add options to a specific question
  addOption: async (req: Request, res: Response) => {
    try {
      const questionId = req.params.id;
      console.log("questionId", questionId);

      const { text } = req.body;
      const option: any = await Option.create({ text });
      const updatedQuestion = await Question.findByIdAndUpdate(
        questionId,
        { $push: { options: option._id } }, // Push the new option's _id to the options array
        { new: true } // Return the updated document
      ).populate("options");

      // If the question was not found
      if (!updatedQuestion) {
        return res.status(404).json({ error: "Question not found" });
      }
      const baseURL = getBaseUrl(req);
      return res.status(200).json(formatQuestion(updatedQuestion, baseURL));
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },

  // Delete an option
  deleteOption: async (req: Request, res: Response) => {
    try {
      const optionId = req.params.id;
      const option = await Option.findById(optionId);
      if (!option) {
        return res.status(404).json({ error: "Option not found" });
      }
      if (option.votes > 0) {
        return res
          .status(400)
          .json({ error: "Cannot delete option with votes" });
      }
      await Option.findByIdAndDelete(optionId);
      return res.json({ message: "Option deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },

  // Add a vote to an option
  addVote: async (req: Request, res: Response) => {
    try {
      const optionId = req.params.id;
      const option = await Option.findById(optionId);
      option.votes++;
      await option.save();
      return res.status(200).json({ message: "Vote added successfully" });
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: "Something went wrong!" });
      }
    }
  },
};

export default optionController;
