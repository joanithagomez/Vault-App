import React from 'react';

export class Password extends React.Component {
  render() {
  return(
    <div className="password-container">
      <div className="pwd-label">Generated password</div>
      <input className="pwd-inputbox" type="text" value={this.state.password} />
    </div>
);
  }
}
