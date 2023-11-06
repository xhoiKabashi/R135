import Cookies from "universal-cookie";
import { AuthContext } from "../../Context";
import { useContext, useEffect } from "react";

const cookies = new Cookies();

function About() {
  const token = cookies.get("TOKEN");
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      // Set the user as authenticated
      setUser(true);
    }
  }, [token, setUser]);

  return <div>About</div>;
}

export default About;
