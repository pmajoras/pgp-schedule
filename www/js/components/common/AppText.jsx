"use strict";
import React from "react";
import FMUI from 'formsy-material-ui';

const { FormsyText } = FMUI;
const defaultStyle = {
  width: "100%"
};

export default class AppText extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  focus() {
    this.refs.formText.focus();
  }

  handleChange(event) {
  }

  render() {
    return (
      <FormsyText
        {...this.props}
        style={defaultStyle}
        ref="formText"
        onChange={this.handleChange}
        formNoValidate
        />
    );
  }
}
