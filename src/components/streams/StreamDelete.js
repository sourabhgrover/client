import React from "react";

import Modal from "../Modal";

const StreamDelete = () => {
  const action = (
    <div>
      <button className="ui primary button negative">Delete</button>
      <button className="ui primary button">Cancel</button>
    </div>
  );
  return (
    <div>
      StreamDelete{" "}
      <Modal title="Delete Stream" content="Delete Stream" action={action} />
    </div>
  );
};

export default StreamDelete;
