import { useState } from "react";
import { questions } from "../constants/questionData";

import Question from "./Question";

interface FormState {
  questionInd: number;
  form: {
    companyName: string;
    industry: string;
    businessServices: string;
    yextServices: string;
    customEntityTypes: string[];
    additionalInformation: string;

  };
}

const FormManager = () => {
  const [formState, setFormState] = useState<FormState>({
    questionInd: 0,
    form: {
      companyName: "",
      industry: "",
      businessServices: "",
      yextServices: "",
      customEntityTypes:[""],
      additionalInformation: "",
    },
  });

  const nextQuestion = (values: any) => {
    // console.log(values);
    setFormState((prev) => ({
      questionInd: prev.questionInd + 1,
      form: {
        ...prev.form,
        ...values,
      },
    }));
  };

  const currQuestion = questions[formState.questionInd];

  console.log(currQuestion)
  return (
    <div>
      <Question question={currQuestion} nextQuestion={nextQuestion} />

      {/* <p>{ questions[formState.questionInd].prompt }</p> */}
    </div>
  );
};

export default FormManager;
