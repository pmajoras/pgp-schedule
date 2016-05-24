"use strict";
import React from "react";
import AppPanel from "../components/common/AppPanel.jsx";
import AppModal from "../components/common/AppModal.jsx";
import SchedulerEditor from "../components/schedulers/SchedulerEditor.jsx";
import { Tabs, Tab, OverlayTrigger, Popover } from 'react-bootstrap';
import AppDatePicker from "../components/common/AppDatePicker.jsx";
import moment from "moment";
import SchedulerStore from "../stores/schedulers/SchedulerStore";
import SchedulerActions from "../actions/schedulers/SchedulerActions";

const store = SchedulerStore;

export default class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.handleSchedulerChange = this.handleSchedulerChange.bind(this);

    this.state = {
      currentScheduler: store.getCurrentSchedule()
    }
  }

  componentWillMount() {
    store.addChangeListener(this.handleSchedulerChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this.handleSchedulerChange);
  }

  componentDidMount() {
    SchedulerActions.create();
  }

  handleSchedulerChange() {
    console.log("test", store.getCurrentSchedule());
    this.setState({ currentScheduler: store.getCurrentSchedule() });
  }

  render() {

    return (
      <div>
        <h1>
          CRONOGRAMAS!!!
        </h1>
        <SchedulerEditor currentScheduler={this.state.currentScheduler}/>
      </div>
    );
  }
}
