import { Schema, Types, model } from "mongoose";

// Interface for Option document
export interface IOption extends Document {
  text: string;
  votes: number;
}

// Schema for Option document
const optionSchema = new Schema<IOption>(
  {
    text: { type: String, required: true, trim: true },
    votes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Model for Option document
const Option = model<IOption>("Option", optionSchema);

export default Option;
