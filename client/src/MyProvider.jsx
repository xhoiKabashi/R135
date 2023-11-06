/* eslint-disable react/prop-types */
// MyProvider.js
import { useState } from "react";
import Lang, { AuthContext } from "./Context";
// import axios from "axios";
const MyProvider = ({ children }) => {
  const [data, setData] = useState("eng");
  const [user, setUser] = useState(false);

  return (
    <Lang.Provider value={{ data, setData }}>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </Lang.Provider>
  );
};

export default MyProvider;
