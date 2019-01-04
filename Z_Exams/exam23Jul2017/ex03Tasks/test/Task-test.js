let expect = require('chai').expect;
let Task = require("../Task").Task;

describe("class Task test", function () {
    let task;
    let dateInTheFuture = new Date();
    dateInTheFuture.setDate(60);
    expect(() => task = new Task('New Task', dateInTheFuture), "Instance creation failed, make sure you have submitted a class").to.not.throw();

    let dateWayAhead = new Date();
    task = new Task('New Task', dateInTheFuture);

    dateWayAhead.setDate(90);

    console.log(dateWayAhead > task.deadline);

    let string = task.toString();
    expect(string).to.contains('[\u26A0]', "Task icon doesn't match status");
    expect(string).to.contains('overdue', "Task should display (overdue)");
});