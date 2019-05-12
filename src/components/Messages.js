import React from "react";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

const Messages = props => {
  return (
    <div>
      <div>
        <Link to="/">Dependency Explorer</Link>
      </div>
      <div style={{ margin: "10px 10px 0px 10px" }}>
        <Message>
          <Message.Header>{props.message}</Message.Header>
        </Message>
      </div>
    </div>
  );
};

export default Messages;
