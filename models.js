/**
 * A calendar class that handles the array representation of the calendar so that the dom may be easier to manipulate
 * 
 * What do I make an object?
 * Should I split this into multiple objects?
 * 
 */
class CalendarArr {
    constructor() {
        this.calendarTableArr = [];
        this.firstOfMonth = new Date(2024, 0, 1).getDay();
        this.lastOfMonth = new Date(2024, 1, 0).getDate();
        this.todaysDate = new Date().getDate();
    }

    // fill array with six rows * seven columns for 42 elements
    generateCells() {
        for (let i = 0; i < CAL_COLS * CAL_ROWS; i++) {
            if ((i >= this.firstOfMonth) && (i <= this.lastOfMonth)) {
                this.calendarTableArr.push(i);
            }
            else {
                this.calendarTableArr.push(-1);
            }
        }
    }

    // creates dom elements based on the array
    // can probably move this to a new class
    generateDomCalendar() {
        for (let i = 0; i < this.calendarTableArr.length; i++) {
            // every seventh element is the last day of the week
            // so create a new week using a table row
            if (i % 7 == 0) {
                let newTr = document.createElement("tr");
                newTr.classList.add("calendar-week");
                calendarTable.appendChild(newTr);
            }
            let newTd = document.createElement("td");
            if (i == this.todaysDate) {
                newTd.id = "todays-date";
            }
            if (this.calendarTableArr[i] != -1) {
                newTd.classList.add("calendar-day");
                newTd.classList.add(i);
                newTd.innerText = this.calendarTableArr[i];
                newTd.classList.add(`${MONTHS[new Date().getMonth()]}`);
            }
            calendarTable.lastChild.appendChild(newTd);
        }
    }
}

class ToDoList {
    constructor() {
        this.globalList = {
            1: ["feed cats", "go for walk", "eat dinner"],
            2: ["item1", "item2", "item3"]
        }
    }

    // return in string format
    getGlobalList() {
        return this.globalList["everyday"];
    }
}

