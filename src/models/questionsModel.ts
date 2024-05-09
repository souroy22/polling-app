import { Schema, Types, model } from "mongoose";

// Interface for Question document
export interface IQuestion extends Document {
  title: string;
  options: Types.ObjectId[];
}

// Schema for Question document
const questionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true, trim: true },
    options: [{ type: Schema.Types.ObjectId, ref: "Option", default: [] }],
  },
  { timestamps: true }
);

// Model for Question document
const Question = model<IQuestion>("Question", questionSchema);

export default Question;
