let calendarTableArr;
let todaysDate = new Date();
let calendarArr;

/**
 * create a table at the top displaying the days of the week
 */
function createWeekdayHeader() {
    console.debug("createWeekdayHeader");
    for (let i = 0; i < WEEK_DAYS.length; i++) {
        let newTd = document.createElement("td");
        newTd.innerText = WEEK_DAYS[i];
        weekdayRow.appendChild(newTd);
    }
}

/**
 * Is there a faster or more efficient way to create a calendar array like this?
 */
function createCalendarTable() {
    console.debug("createCalendarTable");
    
    calendarArr = new CalendarArr();
    calendarArr.generateCells();
    calendarArr.generateDomCalendar();

}

/**
 * Sets the current month and year in the nav bar based on the system time
 */
function setNavTime() {
    console.debug("setNavTime")
    navTime.innerText = `${MONTHS[todaysDate.getMonth().toString()]} ${todaysDate.getFullYear().toString()}`;
}