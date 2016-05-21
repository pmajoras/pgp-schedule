

class TaskGroup {
  constructor(groupName, tasks) {
    this.groupName = groupName || "TaskGroup";
    this.tasks = tasks || [];
  }
}

module.exports = TaskGroup;