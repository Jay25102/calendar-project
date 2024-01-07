let calendarTableArr;
let todaysDate = new Date();
/**
 * generates table rows and columns so that the calendar isn't hard coded into the html
 * Todo:
 * is O(n^2) the most efficient way I can create these elements?
 * create 2d arr [[][]] representing calendar
 * based on each element, create rows and td
 * Maybe create an extra row on top to display weekday?
 * 
 * Is there a faster or more efficient way to create a calendar array like this?
 * If I knew about passing params into new Date() this would have been easier
 */
function createCalendarTable() {
    console.debug("createCalendarTable");

    calendarTableArr = [];

    // create a table at the top displaying the days of the week
    // move this stuff to a new function
    weekdayTable = document.querySelector("#weekday-table");
    let newTr = document.createElement("tr");
    newTr.id = "weekday-row";
    weekdayTable.appendChild(newTr);
    const weekdayRow = document.querySelector("#weekday-row");
    // move this as well
    for (let i = 0; i < WEEK_DAYS.length; i++) {
        let newTd = document.createElement("td");
        newTd.innerText = WEEK_DAYS[i];
        weekdayRow.appendChild(newTd);
    }

    // generate array with six rows and seven columns per row
    for (let i = 0; i < CAL_ROWS; i++) {
        calendarTableArr.push([]);
        // let newTr = document.createElement("tr");
        // newTr.classList.add("calendar-week");
        // calendarTable.appendChild(newTr);
        const currentRow = calendarTable.lastChild;
        for (let y = 0; y < CAL_COLS; y++) {
            calendarTableArr[i].push([]);
            // let newTd = document.createElement("td");
            // newTd.classList.add("calendar-day");
            // currentRow.appendChild(newTd);
        }
    }

    // add days to calendar array
    // console.log(WEEK_DAYS[new Date(2024, 0, 1).getDay()]);
    // fill array with dates then create dom elements based on dates
    let firstOfMonth = new Date(2024, 0, 1).getDay();
    calendarTableArr[0][firstOfMonth] = 1;
    let counter = 2;
    let firstTr = document.createElement("tr");
    firstTr.classList.add("calendar-week");
    calendarTable.appendChild(firstTr);
    const currentRow = calendarTable.lastChild;
    for (let i = 0; i < CAL_COLS; i++) {
        if (i >= firstOfMonth + 1) {
            calendarTableArr[0][i] = counter;
            counter++;
        }
        let newTd = document.createElement("td");
        newTd.classList.add("calendar-day");
        newTd.innerText = calendarTableArr[0][i];
        currentRow.appendChild(newTd);
    }

    for (let i = 1; i < CAL_ROWS; i++) {
        let newTr = document.createElement("tr");
        newTr.classList.add("calendar-week");
        calendarTable.appendChild(newTr);
        const currentRow = calendarTable.lastChild;

        for (let y = 0; y < CAL_COLS; y++) {
            if (counter <= new Date(todaysDate.getFullYear(), todaysDate.getMonth() + 1, 0).getDate()) {
                calendarTableArr[i][y] = counter;
                counter++;
            }

            let newTd = document.createElement("td");
            newTd.classList.add("calendar-day");
            newTd.innerText = calendarTableArr[i][y];
            currentRow.appendChild(newTd);
        }
    }


}

/**
 * Sets the current month and year in the nav bar based on the system time
 */
function setNavTime() {
    console.debug("setNavTime")
    navTime.innerText = `${MONTHS[todaysDate.getMonth().toString()]} ${todaysDate.getFullYear().toString()}`;
}