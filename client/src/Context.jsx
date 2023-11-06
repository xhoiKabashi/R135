// MyContext.js
import { createContext } from "react";

// to change the language
const Lang = createContext();

// to define if user is logged in or not
export const AuthContext = createContext(false);

export default Lang;
