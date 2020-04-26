import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    return (
      <button className="ui button primary">
        {/*this is used for having multiple contexts in one component. contextType is only for one context*/}
        <LanguageContext.Consumer>
          {(value) => value === "english" ? "Submit" : "Voorleggen"}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;