import express from "express";
import optionController from "../controllers/optionsController";

const optionRouters = express.Router();

optionRouters.post("/:id/add_vote", optionController.addVote);
optionRouters.delete("/:id", optionController.deleteOption);

export default optionRouters;
