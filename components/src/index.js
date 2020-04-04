import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:45 PM"
        content="Nice thing!"
        avatarUrl={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 2:32 PM"
        content="Cool comment!"
        avatarUrl={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 1:17 PM"
        content="I like React!"
        avatarUrl={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
