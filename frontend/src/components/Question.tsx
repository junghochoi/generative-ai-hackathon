import { Formik } from "formik";
import TextInput from "./TextInput";
import HomePage from "./HomePage";
import { QuestionType } from "../constants/questionData";
import { useEffect, useState } from "react";

import IndustryPage from "./IndustryPage";
import BusinessServicesPage from "./BusinessServicesPage";
import YextServicesPage from "./YextServicesPage";
import SummaryPane from "./SummaryPane";
import LoadingPage from "./LoadingPage";
import EntityTypesPage from "./EntityTypesPage";

interface QuestionProps {
  question: {
    prompt: string;
    questionType: QuestionType;
    stateUpdateKey: string;
    choices?: string[];
  };
  nextQuestion: (values: any) => void;
}

const Question: React.FC<QuestionProps> = (props) => {
  const [lastQuestion, setLastQuestion] = useState(false);
  const [firstQuestion, setFirstQuestion] = useState(true);
  const [goToLoadingScreen, setGoToLoadingScreen] = useState(false);
  const [finalValues, setFinalValues] = useState({});

  //if we are on the last question, we show a slightly different UI
  useEffect(() => {
    if (props.question.stateUpdateKey === "additionalInformation") {
      setLastQuestion(true);
    }
    if (props.question.stateUpdateKey === "industry") {
      setFirstQuestion(false);
    }
  }, [props.question.stateUpdateKey]);

  const handleGenericClick = () => {
    //if user clicks show me a generic demo on the home screen, we send empty values to rpc
    const genericValues = {
      companyName: "",
      industry: "",
      businessServices: "",
      marketingGoals: "",
      supportGoals: "",
      yextServices: "",
      customEntityTypes: [],
      additionalInformation: "",
    };
    setGoToLoadingScreen(true);
    //TODO pass values to backend
    console.log(JSON.stringify(genericValues, null, 2));
    alert(JSON.stringify(genericValues, null, 2));
  };
  if (!goToLoadingScreen) {
    return (
      <div className="font-poppins">
        <Formik
          initialValues={{
            companyName: "",
            industry: "",
            businessServices: "",
            yextServices: "",
            additionalInformation: "",
            customEntityTypes: [],
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (lastQuestion) {
              alert(JSON.stringify(values, null, 2));
              setFinalValues(values);
              setGoToLoadingScreen(true);
              //TODO: this is where we need to pass our values to the backend!
              console.log(JSON.stringify(values, null, 2));
            } else {
              props.nextQuestion(values);
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col">
              {props.question.questionType === QuestionType.FreeResponse &&
                props.question.stateUpdateKey === "companyName" && (
                  <HomePage
                    prompt={props.question.prompt}
                    values={values}
                    handleChange={handleChange}
                    stateUpdateKey={props.question.stateUpdateKey}
                    setGoToLoadingScreen={setGoToLoadingScreen}
                  />
                )}

              {props.question.questionType === QuestionType.FreeResponse &&
                props.question.stateUpdateKey === "businessServices" && (
                  <BusinessServicesPage
                    prompt={props.question.prompt}
                    stateUpdateKey={props.question.stateUpdateKey}
                    handleChange={handleChange}
                    values={values}
                  />
                )}

              {props.question.questionType === QuestionType.MultipleChoice &&
                props.question.stateUpdateKey === "industry" && (
                  <IndustryPage values={values} setFieldValue={setFieldValue} />
                )}

              {props.question.questionType === QuestionType.MultipleChoice &&
                props.question.stateUpdateKey === "yextServices" && (
                  <YextServicesPage
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                )}

              {props.question.questionType === QuestionType.FreeResponse &&
                props.question.stateUpdateKey === "additionalInformation" && (
                  <div className="flex flex-col items-center ">
                    {/**
                     * let's add a summary of responses so far (TODO: create component for this)
                     * we can then generate entity types for them, show them, ask them if that's ok, let them edit
                     * new button for "Finish"
                     */}
                    <SummaryPane values={values} />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-52 h-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wider rounded-full justify-center items-center gap-2.5 inline-flex transition duration-300 ease-in-out m-6"
                    >
                      SPIN UP MY DEMO
                    </button>
                  </div>
                )}

              {props.question.questionType ===
                QuestionType.MultipleMultipleChoice &&
                props.question.stateUpdateKey === "customEntityTypes" && (
                  <div className="flex flex-col items-center ">
                    <EntityTypesPage
                      prompt={props.question.prompt}
                      stateUpdateKey={props.question.stateUpdateKey}
                      handleChange={handleChange}
                      values={values}
                    />
                  </div>
                )}

              {!lastQuestion ? (
                <div className="">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-32 h-10 px-8 py-3 my-8 bg-blue-600 hover:bg-blue-700 rounded-full justify-center items-center gap-2.5 inline-flex text-white text-sm font-bold uppercase tracking-wider transition duration-300 ease-in-out"
                  >
                    Next
                  </button>
                </div>
              ) : null}

              {firstQuestion ? (
                <div className="w-120 h-24 flex-col justify-center items-center gap-4 inline-flex">
                  <div className="w-120 h-11 flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-gray-500 text-base font-medium">
                      I don’t want to provide any personal information
                    </div>
                    <button
                      className="text-blue-600 text-sm font-bold uppercase tracking-wider"
                      onClick={handleGenericClick}
                    >
                      show me a generic demo
                    </button>
                  </div>
                  <div className="w-96 h-11 flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-gray-500 text-base font-medium">
                      I want a human to walk me through this
                    </div>
                    <div className="text-blue-600 text-sm font-bold uppercase tracking-wider cursor-pointer">
                      schedule a call
                    </div>
                  </div>
                </div>
              ) : null}
            </form>
          )}
        </Formik>
      </div>
    );
  } else {
    return (
      <div className="font-poppins">
        <LoadingPage values={finalValues} />
      </div>
    );
  }
};

export default Question;
