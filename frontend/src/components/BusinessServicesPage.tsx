import TextInput from "./TextInput";
import logo from "../assets/logo.svg";
import { Field } from "formik";

const BusinessServicesPage = ({
  stateUpdateKey,
  handleChange,
  values,
}: any) => {
  const radioCSS =
    "text-left mt-2 w-96 h-11 bg-gray-50 rounded-lg justify-start items-center gap-2 inline-flex p-2";
  return (
    <div className="w-120 flex-col items-center inline-flex">
      <div className="w-120 flex-col  items-center inline-flex">
        <img src={logo} alt="logo" />
        <h1 className="w-120 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
          What are some of your business goals?
        </h1>
        <p className="w-4/6 text-center text-stone-900 text-base font-medium leading-normal mt-2 mb-2">
          Based on your industry, we've highlighted a few recommended goals.
          Feel free to make changes and add as many as you'd like!
        </p>

        <div className="flex flex-col items-start" role="group">
          <div className="flex flex-col">
            <p className="text-black text-sm font-bold uppercase w-96 text-left mt-4 mb-2">
              Marketing Goals
            </p>
            <label className={radioCSS}>
              <Field
                type="radio"
                name="marketingGoals"
                value="increase revenue"
              />
              <span className="m-2">Increase Revenue</span>
            </label>
          </div>

          <label className={radioCSS}>
            <Field
              type="radio"
              name="marketingGoals"
              value="increase traffic to locations"
            />
            <span className="m-2">Increase Traffic to Locations</span>
          </label>
          <label className={radioCSS}>
            <Field
              type="radio"
              name="marketingGoals"
              value="clean up brand misinformation"
            />
            <span className="m-2">Clean up Brand Misinformation</span>
          </label>
          <p className="text-black text-sm font-bold uppercase w-96 text-left mt-8 mb-2">
            Support Goals
          </p>
          <label className={radioCSS}>
            <Field
              type="radio"
              name="supportGoals"
              value="reduce customer support calls"
            />
            <span className="m-2">Reduce Customer Support Calls</span>
          </label>
        </div>
      </div>
      <p className="text-black text-sm font-bold uppercase w-96 text-left mt-4 mb-2">
        or, add your own goals
      </p>
      <TextInput
        name={stateUpdateKey}
        handleChange={handleChange}
        value={values.businessServices}
        placeholder="Add your own goals"
      />
    </div>
  );
};

export default BusinessServicesPage;
