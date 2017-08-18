import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Page extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-banner">
          <div className="title">Vault</div>
        </div>
        <div className="input-content">
          <div className="service-container">
            <div className="service-label">Service</div>
            <input className="serv-inputbox" type="text" autocomplete="on" />
          </div>
          <div className="passphrase-container">
            <div className="passphrase-label">Passphrase</div>
            <input
              className="phrase-inputbox"
              type="text "
              autocomplete="on"
              name="phrase "
            />
          </div>
        </div>
        <div className="output-content">
          <div className="password-container">
            <div className="pwd-label">Generated password</div>
            <input className="pwd-inputbox" type="text " name="pwd" />
          </div>
        </div>
        <div className="settings-container">
          <div className="btns">
            <button className="round-btn">abc</button>
            <button className="round-btn">ABC</button>
            <button className="round-btn">123</button>
            <button className="round-btn">!@#$%</button>
            <button className="round-btn">-/_</button>
            <button className="round-btn">SPACE</button>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Page />, document.getElementById("root"));
