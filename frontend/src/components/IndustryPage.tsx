import logo from "../assets/logo.svg";
import healthcareLogo from "../assets/Hospital.svg";
import financeLogo from "../assets/Bank.svg";
import retailLogo from "../assets/ECommerce.svg";
import telecommLogo from "../assets/Cellphone.svg";
import foodLogo from "../assets/food.svg";
import peopleLogo from "../assets/People.svg";
import techLogo from "../assets/tech.svg";

import { Field } from "formik";

const CustomRadio = ({
  value,
  selectedValue,
  onChange,
  imageUrl,
  label,
}: any) => {
  const isSelected = selectedValue === value;

  return (
    <div
      className={`custom-radio ${
        isSelected ? "selected border border-blue-600 bg-blue-100" : ""
      } w-64 h-24 p-4 bg-gray-50 rounded-lg flex-col justify-center items-center  inline-flex cursor-pointer m-2`}
      onClick={() => onChange(value)}
    >
      <img src={imageUrl} alt={label} />
      <div className="self-stretch text-center text-black text-lg font-bold">
        {value}
      </div>
    </div>
  );
};

const IndustryPage = ({ values, setFieldValue }: any) => {
  const handleRadioChange = (value: string, setFieldValue: any) => {
    setFieldValue("industry", value);
  };

  return (
    <div className="w-120 flex-col justify-start items-center inline-flex">
      <img src={logo} alt="logo" />
      <h1 className="w-96 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
        What industry are you in?
      </h1>
      <p className="w-108 text-center text-stone-900 text-base font-medium leading-normal mt-2 mb-2">
        This will help us recommend some business goals for you.
      </p>

      <Field
        name="industry"
        render={({ field }: any) => (
          <div className="radio-container">
            <CustomRadio
              value="healthcare"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={healthcareLogo}
              label="Healthcare"
            />
            <CustomRadio
              value="finance"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={financeLogo}
              label="Finance"
            />
            <CustomRadio
              value="retail"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={retailLogo}
              label="Retail"
            />
            <CustomRadio
              value="hospitality"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={peopleLogo}
              label="Hospitality"
            />
            <CustomRadio
              value="food services"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={foodLogo}
              label="Food Services"
            />
            <CustomRadio
              value="telecommunications"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={telecommLogo}
              label="Telecommunications"
            />
            <CustomRadio
              value="technology"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={techLogo}
              label="Technology"
            />
            <CustomRadio
              value="other"
              selectedValue={values.industry}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={financeLogo}
              label="Other"
            />
          </div>
        )}
      />
    </div>
  );
};
export default IndustryPage;
