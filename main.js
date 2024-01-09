// constants
const CAL_ROWS = 5;
const CAL_COLS = 7;
const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// html references
// const generateCalendar = document.querySelector("#generate-calendar");
const weekdayRow = document.querySelector("#weekday-row");
const calendarTable = document.querySelector("#calendar-table");
const navTime = document.querySelector("#nav-time");

/**
 * Starts the application by loading all parts of the ui and generating a calendar
 * add todo list functionality when hover/click?
 */
function startApp() {
    setNavTime();
    createWeekdayHeader();
    createCalendarTable();
}

/** 
 * waiting for page to load all dependencies so that the order we include scripts does not matter 
 */
window.addEventListener("load", function(e) {
    console.debug("Starting");
    startApp();
});



