import logo from "../assets/logo.svg";
import TextInput from "./TextInput";

const HomePage = (props: any) => {
  return (
    <div className="w-120 flex-col justify-start items-center inline-flex">
      <img src={logo} alt="logo" />
      <h1 className="w-96 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
        Welcome to Yext!
      </h1>
      <p className="w-108 text-center text-stone-900 text-base font-medium leading-normal mt-2">
        Spinning up a personalized demo will only take a few moments.
      </p>
      <h1 className="w-96 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
        First, tell us about yourself
      </h1>
      <p className="text-black text-sm font-bold uppercase mt-4 mb-2 w-96 text-left">
        {props.prompt}
      </p>
      <TextInput
        name={props.stateUpdateKey}
        handleChange={props.handleChange}
        value={props.values.companyName}
        placeholder="Company Name"
      />
    </div>
  );
};

export default HomePage;
