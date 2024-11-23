const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlable = document.getElementById("countlable");
let counter = 0;

increasebtn.onclick = function () {
    counter++;
    countlable.textContent = counter;
}

decreasebtn.onclick = function () {
    counter--;
    countlable.textContent = counter;
}

resetbtn.onclick = function () {
    counter = 0;
    countlable.textContent = counter;
}
