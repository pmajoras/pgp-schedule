"use strict";
import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class AppDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        {...this.props}
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this) } />
    );
  }
}