import { createContext } from "react";

const LanguageContext = createContext({
  language: "en-US", // default
  setLanguage: () => {}
});

export default LanguageContext;
