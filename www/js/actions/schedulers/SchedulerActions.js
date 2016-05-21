"use strict";
import dispatcher from "../../dispatcher";
import ActionResponse from "../ActionResponse";
import SchedulerService from "../../services/schedulers/SchedulerService";

var actions = {
  create: "START_SCHEDULE_CREATION",
  edit: "START_SCHEDULE_EDIT"
};

module.exports = {
  actions: actions,
  create: function () {
    let service = new SchedulerService();

    service.getDefaultSchedule()
      .then((data) => {
        console.log("data", data);
        dispatcher.dispatch(new ActionResponse(null, actions.create, data));
      }, (err) => {
        dispatcher.dispatch(new ActionResponse(err, actions.create));
      });
  },
  edit: function (scheduleId) {
    let service = new SchedulerService();

    service.findById(scheduleId)
      .then((data) => {
        dispatcher.dispatch(new ActionResponse(null, actions.edit, data));
      }, (err) => {
        dispatcher.dispatch(new ActionResponse(err, actions.edit));
      });
  }
};
