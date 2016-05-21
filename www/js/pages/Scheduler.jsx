"use strict";
import React from "react";
import AppPanel from "../components/common/AppPanel.jsx";
import AppModal from "../components/common/AppModal.jsx";
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
      showAddTask: false,
      currentSchedule: store.getCurrentSchedule()
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
    console.log(store.getCurrentSchedule());
  }

  render() {
    const today = moment().format("DD/MM/YYYY");

    return (
      <div>
        <h1>
          CRONOGRAMAS!!!
        </h1>
        <AppPanel removeHeader>
          <div class="row margin-bottom">
            <div class="col-xs-3">
              <label for="todayDate">
                Data:
              </label>
              <input class="form-control inline width-auto"
                type="text"
                id="todayDate" value={today} readOnly/>
            </div>
            <div class="col-xs-3">
              <label for="deadLineDate">
                Prazo:
              </label>
              <AppDatePicker id="deadLineDate" class="form-control"/>
            </div>
            <div class="col-xs-4">
              <OverlayTrigger trigger={["hover", "focus"]} placement="top"
                overlay={<Popover id="addTaskPopOver" title="Adicionar Tarefa">Adiciona uma tarefa para a lista selecionada.</Popover>}>
                <button class="button button-raised button-action button-circle pull-left"
                  onClick={() => this.setState({ showAddTask: true }) }>
                  <i class="fa fa-plus fa-1x"></i>
                </button>
              </OverlayTrigger>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
              </Tabs>
            </div>
          </div>
        </AppPanel>

        <AppModal show={this.state.showAddTask}
          onHide={() => this.setState({ showAddTask: false }) }>
          <h1>
            TESTE!
          </h1>
        </AppModal>
      </div>
    );
  }
}
