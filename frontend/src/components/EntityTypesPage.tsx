import TextInput from "./TextInput";
import logo from "../assets/logo.svg";
import { Configuration, OpenAIApi } from "openai";
import { Field } from "formik";

import axios from "axios";

import { useState, useEffect } from "react";

const EntityTypesPage = ({ stateUpdateKey, handleChange, values }: any) => {
  const [entityTypes, setEntityTypes] = useState<string[]>([]);

  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const radioCSS =
    "text-left mt-2 w-96 h-11 bg-gray-50 rounded-lg justify-start items-center gap-2 inline-flex p-2";

  useEffect(() => {
    console.log(generatePrompt());

    const fetchEntities = async () => {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(),
        temperature: 0.6,
      });

      const entityTypes = parse(completion.data.choices[0].text);

      setEntityTypes(entityTypes);
    };

    fetchEntities();
  }, []);

  const generatePrompt = () => {
    return `For a business named ${values.companyName} in the industry
     of ${values.industry} with the business goals of ${values.marketingGoals},
      what are the 10 most useful relevant type of object or information
       associated with, that business? For example, a hospital might care about doctors,
        hospitals, diseases, and patients. Give 5 Entity Types with seperated by a comma with no new line characters.`;
  };

  const parse = (res: string | undefined) => {
    if (res) {
      const first = res.trim();
      let entityTypes = first.split(", ");

      const entityTypesWithoutCommas = entityTypes.map((typeString) => {
        return typeString.replace(/,/g, "");
      });
      // entityTypes = entityTypes.map(entity => entity.replace('/\,/g', ''))
      return entityTypesWithoutCommas;
    } else {
      return ["Store", "Item"];
    }
  };
  if (entityTypes.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-120 flex-col items-center inline-flex">
      <div className="w-120 flex-col  items-center inline-flex">
        <img src={logo} alt="logo" />
        <h1 className="w-120 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
          Here are a set of EntityTypes AI recommends? Which would you like to
          create
        </h1>

        <div className="flex flex-col items-start" role="group">
          <div className="flex flex-col">
            <p className="text-black text-sm font-bold uppercase w-96 text-left mt-4 mb-2">
              Custom EntityTypes
            </p>
            {entityTypes.length > 0
              ? entityTypes.map((type, index) => (
                  <label className={radioCSS} key={index}>
                    <Field
                      type="checkbox"
                      name="customEntityTypes"
                      value={type}
                    />
                    <span className="m-2">{type}</span>
                  </label>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityTypesPage;
