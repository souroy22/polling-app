export const formatQuestion = (question: any, baseURL: string) => {
  const formattedQuestion = {
    id: question._id,
    title: question.title,
    options: question.options.map((option: any) => ({
      id: option._id,
      text: option.text,
      votes: option.votes,
      link_to_vote: `${baseURL}/api/v1/options/${option._id}/add_vote`,
    })),
  };
  return formattedQuestion;
};
