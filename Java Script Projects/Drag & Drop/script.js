let lists = document.getElementsByClassName("list")
let rightBox = document.getElementsByClassName("right")
let leftBox = document.getElementsByClassName("left")

for (list of lists) {
    list.addEventListner("dragstart", function (e) {
        let selected = e.target;

        rightBox.addEventListner("dragover", function (e) {
            e.preventDefault();
        });
        rightBox.addEventListner("drop", function (e) {
            rightBox.appendChild(selected);
            selected = null
        })
    })
}