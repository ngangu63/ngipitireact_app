import { createContext } from "react";

export const LanguageContext = createContext({
  language: "en-US", // default
  setLanguage: () => {}
});

export default LanguageContext;
