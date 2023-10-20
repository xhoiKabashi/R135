/* eslint-disable react/prop-types */
// MyProvider.js
import { useState } from "react";
import Lang from "./Context";

const MyProvider = ({ children }) => {
  const [data, setData] = useState("eng");

  return <Lang.Provider value={{ data, setData }}>{children}</Lang.Provider>;
};

export default MyProvider;
