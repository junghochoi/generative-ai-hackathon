import "./App.css";

import WebFont from "webfontloader";

import FormManager from "./components/FormManager";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:300,400,500,600,700"],
      },
    });
  }, []);
  return (
    <>
      <FormManager />
    </>
  );
}

export default App;
