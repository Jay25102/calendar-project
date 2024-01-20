/**
 * parses the user's clicks to add/remove todo list items
 */
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove-todo")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("has-dialog")) {
        // console.log(e.target.querySelector("dialog"));
        e.target.querySelector("dialog").showModal();
    }
    else if (e.target.classList[0] === "calendar-day") {
        let newModalDialog = document.createElement("dialog");
        newModalDialog.innerText = `Todo for ${e.target.classList[1]}:`;

        // export this todo list stuff to a new function
        let toDoList = new ToDoList();
        toDoList.generateList();
        if (toDoList.globalList[e.target.classList[1]]) {
            let newUl = document.createElement("ul");
            // new item form
            let newForm = document.createElement("form");
            let newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            let newSubmitBtn = document.createElement("button");
            newSubmitBtn.setAttribute("type", "submit");
            newSubmitBtn.innerText = "Submit";
            newForm.appendChild(newInput);
            newForm.appendChild(newSubmitBtn);

            for (let i = 0; i < toDoList.globalList[e.target.classList[1]].length; i++) {
                // current items
                let newLi = document.createElement("li");
                let newBtn = document.createElement("button");
                newBtn.innerText = "X";
                newBtn.classList.add("remove-todo");
                newLi.innerText = toDoList.globalList[e.target.classList[1]][i];
                newLi.append(newBtn);
                newUl.appendChild(newLi);
            }
            newModalDialog.appendChild(newUl);
            newModalDialog.appendChild(newForm);
        }

        e.target.appendChild(newModalDialog);
        e.target.classList.add("has-dialog");

        newModalDialog.showModal();
    }

});

/**
 * adds a new item to the todo list
 */
document.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.log(e.target.firstElementChild.value);
    // console.log(e.target.parentElement.newUl);
    let newLi = document.createElement("li");
    newLi.innerText = e.target.firstElementChild.value;
    e.target.firstElementChild.value = "";
    e.target.parentElement.querySelector("ul").appendChild(newLi);
});