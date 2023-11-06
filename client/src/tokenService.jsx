// tokenService.js
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const acctualToken = (token) => {
  cookies.set("TOKEN", token, { path: "/" });
};

export const getToken = () => {
  return cookies.get("TOKEN");
};
