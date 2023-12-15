/*
    0 - free response
    1 - multiple choice
    2 - multiple multiple choice

*/

export enum QuestionType {
  FreeResponse,
  MultipleChoice,
  MultipleMultipleChoice,
}

export const questions = [
  {
    prompt: "What is your company name?",
    questionType: QuestionType.FreeResponse,
    stateUpdateKey: "companyName",
  },

  {
    prompt: "What industry are you in?",
    questionType: QuestionType.MultipleChoice,
    stateUpdateKey: "industry",
    choices: ["Technology", "Healthcare", "Finance", "E-Commerce", "Retail"],
  },

  {
    prompt: "What services does your business serve?",
    questionType: QuestionType.FreeResponse,
    stateUpdateKey: "businessServices",
    //choices: ["Give", "Take Money", "haha", "evil"],
  },
  {
    prompt: "What Yext services do you fancy?",
    questionType: QuestionType.MultipleChoice,
    stateUpdateKey: "yextServices",
    //choices: ["Give", "Take Money", "haha", "evil"],
  },
  {
    prompt: "Using AI, we believe these entity types are good for you. Which do you like?",
    questionType: QuestionType.MultipleMultipleChoice,
    stateUpdateKey: "customEntityTypes"
  },
  {
    prompt: "Anything else you want to tell us?",
    questionType: QuestionType.FreeResponse,
    stateUpdateKey: "additionalInformation",
    //choices: ["Give", "Take Money", "haha", "evil"],
  },
];
