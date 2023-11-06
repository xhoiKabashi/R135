import { useEffect, useContext } from "react";
import TextComponents from "../../components/textcomponents/TextComponents";
import Chatbot from "../../components/chatbot/Chatbot";
import { AuthContext } from "../../Context";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function HomePage() {
  const token = cookies.get("TOKEN");
  const { setUser } = useContext(AuthContext);

  // prefents the logout in case the page get hard refreshd
  useEffect(() => {
    if (token) {
      setUser(true);
    }
  }, [token, setUser]);

  return (
    <>
      <TextComponents />
      <Chatbot />
    </>
  );
}

export default HomePage;
