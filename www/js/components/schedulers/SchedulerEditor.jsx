"use strict";
import React from "react";
import moment from "moment";
import AppPanel from "../common/AppPanel.jsx";
import { Tabs, Tab, OverlayTrigger, Popover } from 'react-bootstrap';
import AppDatePicker from "../common/AppDatePicker.jsx";
import SchedulerActions from "../../actions/schedulers/SchedulerActions";


export default class SchedulerEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentScheduler = this.props.currentScheduler;
    console.log("current", currentScheduler);
    if (!currentScheduler || !currentScheduler.taskGroups) {
      return (<div>AXXXXXXXXXXXXXXXXXX</div>);
    }

    const today = moment();
    const deadLine = currentScheduler.deadLine;
    const tabs = [];
    currentScheduler.taskGroups.forEach((taskGroup, index) => {

      let tasks = taskGroup.tasks.map((task, idxTask) => <li key={idxTask}>{task.days} | {task.description} | {task.startDate.format("DD/MM/YYYY") }</li>);
      tabs.push(
        <Tab eventKey={index} key={index} title={taskGroup.groupName}>
          <ul class="list-group">
            {tasks}
          </ul>
        </Tab>);
    });

    console.log("currentScheduler", currentScheduler);

    return (
      <div>
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
              <AppDatePicker id="deadLineDate" startDate={deadLine} class="form-control"/>
            </div>
            <div class="col-xs-4">
              <OverlayTrigger trigger={["hover", "focus"]} placement="top"
                overlay={<Popover id="addTaskPopOver" title="Adicionar Tarefa">Adiciona uma tarefa para a lista selecionada.</Popover>}>
                <button class="button button-raised button-action button-circle pull-left">
                  <i class="fa fa-plus fa-1x"></i>
                </button>
              </OverlayTrigger>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <Tabs defaultActiveKey={1}>
                {tabs}
              </Tabs>
            </div>
          </div>
        </AppPanel>
      </div>
    );
  }
}
