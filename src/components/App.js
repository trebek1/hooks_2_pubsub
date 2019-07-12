import React, { useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import Context from "../context";
import "../pubsub";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state ", state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
