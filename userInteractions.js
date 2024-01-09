document.addEventListener("click", function(e) {
    if (e.target.classList.contains("has-dialog")) {
        // console.log(e.target.querySelector("dialog"));
        e.target.querySelector("dialog").showModal();
    }
    else if (e.target.classList[0] === "calendar-day") {
        let newModalDialog = document.createElement("dialog");
        newModalDialog.innerText = `Todo for ${e.target.classList[1]} ${e.target.innerText}`;

        e.target.appendChild(newModalDialog);
        e.target.classList.add("has-dialog");

        newModalDialog.showModal();
    }

});
