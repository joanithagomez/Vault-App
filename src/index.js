import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

var Vault = require("./vault.js");

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formvalues: {},
      password: {
        value: "",
        copied: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let formvalues = this.state.formvalues;
    let name = event.target.name;
    let value = event.target.value;
    formvalues[name] = value;

    this.setState({
      formvalues
    });

    if (this.state.formvalues["passphrase"] !== undefined) {
      this.state.password["value"] = new Vault({
        phrase: this.state.formvalues["passphrase"]
      }).generate(this.state.formvalues["service"]);
    }
  }

  render() {
    return (
      <div className="container">
        <a href="https://github.com/joanithagomez/Vault-App">
          <img
            className="github-ribbon"
            src="https://camo.githubusercontent.com/c6286ade715e9bea433b4705870de482a654f78a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f77686974655f6666666666662e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png"
          />
        </a>
        <div>
          <div className=" title-banner">
            <div className="title">Vault</div>
          </div>
          <div className="input-content col-12">
            <div className="service-container">
              <div>
                <label>
                  {" "}
                  Service
                  <input
                    className="serv-inputbox"
                    type="text"
                    name="service"
                    value={this.state.service}
                    onChange={this.handleChange.bind(this)}
                  />
                </label>
              </div>
            </div>
            <div className="passphrase-container">
              <div>
                <label>
                  Passphrase
                  <input
                    className="phrase-inputbox"
                    type="password"
                    name="passphrase"
                    value={this.state.passphrase}
                    onChange={this.handleChange.bind(this)}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="output-content col-12">
            <div className="password-container">
              <label className="pwd-label">
                Generated password
                <input
                  className="pwd-inputbox"
                  name="pwd"
                  type="text"
                  value={this.state.password["value"]}
                />
              </label>
            </div>

            <CopyToClipboard text={this.state.password["value"]}>
              <div className="btn-c">
                {" "}
                <div className="copy-btn">Copy Password</div>{" "}
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Page />, document.getElementById("root"));
