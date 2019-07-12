import React, { useState } from "react";
import { useAppContext } from "./hooks";
import { newMessage } from "../state/actions";

function PublishMessage() {
  const {
    pubsub: { publish }
  } = useAppContext();
  const [text, setText] = useState("");
  const updateText = event => {
    setText(event.target.value);
  };
  const publishMessage = () => {
    if (text != "") publish(newMessage(text));
  };
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      publishMessage();
      setText("");
    }
  };
  return (
    <div>
      <h3>Got Something to say?</h3>
      <input value={text} onChange={updateText} />{" "}
      <button onClick={publishMessage} onKeyPress={handleKeyPress}>
        Publish it!
      </button>
    </div>
  );
}

export default PublishMessage;
