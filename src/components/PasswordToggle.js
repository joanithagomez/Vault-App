import React from "react";
export class PasswordToggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hidden: true, passphrase: "" }
        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow() {
        this.setState({
            hidden: !this.state.hidden
        })
    }
 
    render() {
        return (<div>            
            <input
                className="phrase-inputbox"
                type={this.state.hidden ? "password" : "text"} name="passphrase"
                value={this.props.passphrase}
                onChange={this.props.onchange}
            />
            <div className="show">
                <label>Show <input className="custom-checkbox" type="checkbox" onClick={this.toggleShow}/></label> 

            </div>
        </div>);
    }
}