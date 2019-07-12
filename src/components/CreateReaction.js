import React from "react";
import { REACTION_OBJECTS } from "../state/types";
import { useAppContext } from "./hooks";
import { createReaction } from "../state/actions";

function CreateReaction({ messageId }) {
  const {
    state: { username },
    pubsub: { publish }
  } = useAppContext();
  const publishReaction = ({ type, emoji }) => () =>
    publish(createReaction({ emoji, messageId, type, username }));

  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map(reaction => {
        const { type, emoji } = reaction;
        return (
          <span onClick={publishReaction({ type, emoji })} key={type}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default CreateReaction;
