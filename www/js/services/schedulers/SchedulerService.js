"use strict";
const Q = require('q');
const BaseService = require('../BaseService');
const appErrors = require('../../errors/app-errors');
const moment = require('moment');
require('moment-weekday-calc');
const TaskGroup = require('./TaskGroup');

class SchedulerService extends BaseService {
  constructor() {
    super();
  }

  getDefaultSchedule() {
    let deadLine = moment().add(30, 'days');
    let defaultTasks = [
      {
        description: "Tarefa 1",
        days: 2,
        startDate: null
      },
      {
        description: "Tarefa 2",
        days: 4,
        startDate: null
      }];

    let schedule = {
      _id: null,
      deadLine: deadLine,
      initialDate: moment(),
      taskGroups: [new TaskGroup("Grupo 1", defaultTasks)]
    };

    this.calculateTaskGroups(schedule.deadLine, schedule.taskGroups);
    return Q(schedule);
  }

  findById(scheduleId) {

    return Q({});
  }

  calculateTaskGroups(deadLineGroup, taskGroups) {
    taskGroups.forEach((taskGroup, index) => {
      this.calculateTaskDays(deadLineGroup, taskGroup.tasks);
    });
  }

  calculateTaskDays(deadLineGroup, tasks) {
    let deadLine = deadLineGroup.clone();
    let workDaysToGoBack = 0;

    tasks.forEach((task, index) => {
      workDaysToGoBack += task.days;
      task.startDate = deadLine.addWorkdays(workDaysToGoBack * -1);
    });
  }
}

module.exports = SchedulerService;