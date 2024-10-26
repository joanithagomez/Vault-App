import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { PasswordToggle } from "./components/PasswordToggle";
import { CopyToClipboard } from "react-copy-to-clipboard";

var Vault = require("./vault.js");

class App extends React.Component {
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

    var passwordCopy = Object.assign({}, this.state);
    passwordCopy.password.value = new Vault({
      phrase: this.state.formvalues["passphrase"]
    }).generate(this.state.formvalues["service"]);

    if (this.state.formvalues["passphrase"] !== undefined) {
      this.setState({passwordCopy})      
    }
  }

  render() {
    return (
      <div>
          <div className="title-banner">
            <h1 className="title">Vault</h1>
          </div>
        <div>
          <section className="input-content col-12">
            <div className="service-container">
                <label>
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
            <div className="passphrase-container">
                <label>
                  Passphrase
                  <PasswordToggle passphrase={this.state.formvalues['passphrase']} onchange={this.handleChange.bind(this)}
                  />
                </label>
            </div>
          </section>
          <section className="output-content col-12">
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
                <button className="copy-btn">Copy Password</button>
              </div>
            </CopyToClipboard>
          </section>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
