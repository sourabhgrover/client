import React from "react";

import Modal from "../Modal";

const StreamDelete = () => {
  const action = (
    <React.Fragment>
      <button className="ui primary button negative">Delete</button>
      <button className="ui primary button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete{" "}
      <Modal title="Delete Stream" content="Delete Stream" action={action} />
    </div>
  );
};

export default StreamDelete;
