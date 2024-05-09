"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatQuestion = void 0;
const formatQuestion = (question, baseURL) => {
    const formattedQuestion = {
        id: question._id,
        title: question.title,
        options: question.options.map((option) => ({
            id: option._id,
            text: option.text,
            votes: option.votes,
            link_to_vote: `${baseURL}/api/v1/options/${option._id}/add_vote`,
        })),
    };
    return formattedQuestion;
};
exports.formatQuestion = formatQuestion;
//# sourceMappingURL=formatQuestionStructure.js.map