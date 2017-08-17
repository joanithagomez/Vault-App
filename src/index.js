import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Page extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-banner">
          <h1 className="title">Vault</h1>
        </div>
        <div className="input-content">
          <div className="service">
            <h2>Service</h2>
            <input className="serv" type="text" autocomplete="on" />
          </div>
          <div className="passphrase">
            <h2>Passphrase</h2>
            <input
              className="phrase"
              type="text "
              autocomplete="on"
              name="phrase "
            />
          </div>
        </div>
      <div className="output-content">
          <div className="password ">
            <h3>Generated password</h3>
            <input className="pwd" type="text " name="pwd" />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Page />, document.getElementById("root"));
