"use strict";
import React from "react";

class AppPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const message = this.props.headerMessage || "";
    let containerClasses = "panel panel-primary";
    if (this.props.classes) {
      containerClasses = containerClasses + " " + this.props.classes;
    }

    const header = this.props.removeHeader === true ? null :
      <div class="panel-heading">{message}</div>;

    return (
      <div class={containerClasses}>
        {header}
        <div class="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppPanel.propTypes = {
  headerMessage: React.PropTypes.string,
  classes: React.PropTypes.string
};

export default AppPanel;