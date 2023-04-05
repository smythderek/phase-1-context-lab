/* Your Code Here */

function createEmployeeRecord(array) {
    const eRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return eRecord;
}

function createEmployeeRecords(array) {
    const eRecordsAll = array.map(createEmployeeRecord);
    return eRecordsAll;
}

function createTimeInEvent(dateStamp) {
    // console.log("This is the value of this: ", this);
    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    }
    this.timeInEvents.push(timeInObj);

    return this;
}

function createTimeOutEvent(dateStamp) {
    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    }
    this.timeOutEvents.push(timeOutObj);

    return this;
}

function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find((e) => e.date === dateStamp).hour;
    const timeOut = this.timeOutEvents.find((e) => e.date === dateStamp).hour;

    return (timeOut - timeIn)/100;
}

function wagesEarnedOnDate(dateStamp) {    
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp);
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((record) => record.firstName === firstName)
}

function calculatePayroll(array) {
    const totalPay = array.map((employee) => {return allWagesFor.call(employee)});
    return totalPay.reduce((acc, cv) => acc + cv);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}