import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment> // this is react fragment
      <button className="ui button">Cancel</button>
      <button className="ui button negative">Delete</button>
    </React.Fragment>
  );
  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
}

export default StreamDelete;