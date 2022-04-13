const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
function myWeek(days) {
    var week = [...workDays, 'SAT', 'SUN']
    days = [...week];
    return week;
}
console.log(myWeek());
module.exports = myWeek;