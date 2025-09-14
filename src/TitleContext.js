import { createContext } from "react";

const TitleContext = createContext({
  title: "Lukala Ngangu Développement",
  setTitle: () => {}
});

export default TitleContext;
