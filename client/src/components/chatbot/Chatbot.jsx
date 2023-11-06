import styles from "./Chatbot.module.css"; // Import the CSS Module
import { useState, useEffect } from "react";
import { Container, Button, Paper, TextField } from "@mui/material";
import { initialMessages, simulateBotResponse } from "./ChatbotData"; // Import the chat data and logic

const Chatbot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = { text: input, user: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate a bot response using the imported logic
    const botResponse = simulateBotResponse(input);
    setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { text: botResponse, user: "bot" },
      ]);
    }, 1000);
  };

  useEffect(() => {
    // Simulate a welcome message from the bot when the component loads
    setTimeout(() => {
      setMessages(initialMessages);
    }, 500);
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ height: "400px", overflowY: "scroll" }}>
        <div className={styles["chatbot-messages"]}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles["message"]} ${
                message.user === "bot" ? styles["bot"] : styles["user"]
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </Paper>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={input}
        onChange={handleInput}
        className={styles["textfield"]}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        style={{ marginTop: "10px" }}
        className={styles["button"]}
      >
        Send
      </Button>
    </Container>
  );
};

export default Chatbot;
