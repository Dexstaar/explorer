import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Spinner = () => {
  return (
    <div className="ui active">
      <div className="ui big text">
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    </div>
  );
};

export default Spinner;
