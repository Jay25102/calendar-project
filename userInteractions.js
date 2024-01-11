document.addEventListener("click", function(e) {
    if (e.target.classList.contains("has-dialog")) {
        // console.log(e.target.querySelector("dialog"));
        e.target.querySelector("dialog").showModal();
    }
    else if (e.target.classList[0] === "calendar-day") {
        let newModalDialog = document.createElement("dialog");
        newModalDialog.innerText = `Todo for ${e.target.classList[1]} ${e.target.innerText}:`;

        let toDoList = new ToDoList();
        let newUl = document.createElement("ul");
        if (toDoList.globalList[e.target.classList[1]]) {
            for (let i = 0; i < toDoList.globalList[e.target.classList[1]].length; i++) {
                let newLi = document.createElement("li");
                newLi.innerText = toDoList.globalList[e.target.classList[1]][i];
                newUl.appendChild(newLi);
            }
        }
        newModalDialog.appendChild(newUl);

        e.target.appendChild(newModalDialog);
        e.target.classList.add("has-dialog");

        newModalDialog.showModal();
    }

});
