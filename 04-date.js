// console.log(new Date()); // Получение текущей даты и времени

/* setInterval(function () {
  const newDate = new Date();
  output$.innerHTML = newDate.toLocaleTimeString();
}, 1000);*/

const output$ = document.getElementById("output");
const full$ = document.getElementById("full");
const date$ = document.getElementById("date");
const time$ = document.getElementById("time");

let mode = "time";

const format = (formatMode) => {
  const newDate = new Date();
  switch (formatMode) {
    case "time":
      return newDate.toLocaleTimeString();
    case "date":
      return newDate.toLocaleDateString();
    case "full":
      return `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`;
  }
};

setInterval(update, 1000);
update();

function update() {
  output$.textContent = format(mode);
}
function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

full$.onclick = bindMode("full");
date$.onclick = bindMode("date");
time$.onclick = bindMode("time");
