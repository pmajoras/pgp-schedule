"use strict";

const BaseStore = require('../BaseStore');
const dispatcher = require("../../dispatcher").default;
const schedulerActions = require("../../actions/schedulers/SchedulerActions");

class SchedulerStore extends BaseStore {
  constructor() {
    super({ currentSchedule: null });
  }

  handleCreateOrEditSchedule(err, payload) {
    if (!err) {
      this.mergeState({ currentSchedule: payload });
    }
    else {
      this.resetState();
    }
  }

  getCurrentSchedule() {
    let currentSchedule = this.getState().get("currentSchedule");
    return currentSchedule ? currentSchedule.toJS() : {};
  }

  /**
   * Handles the store actions.
   */
  handleActions(action) {
    switch (action.type) {
      case schedulerActions.actions.create: {
        this.handleCreateOrEditSchedule(action.err, action.payload);
        break;
      }
      case schedulerActions.actions.edit: {
        this.handleCreateOrEditSchedule(action.err, action.payload);
        break;
      }
      default:
        return true;
    }

    // If action was responded to, emit change event    
    this.emitChange();
    return true;
  }
}

const schedulerStore = new SchedulerStore();
dispatcher.register(schedulerStore.handleActions.bind(schedulerStore));

module.exports = schedulerStore;
