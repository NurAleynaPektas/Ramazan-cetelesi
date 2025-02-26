//ZİKİRMATİK

let btn = document.querySelector("button");
document.querySelector(".counter").textContent = localStorage.getItem("counter")
  ? localStorage.getItem("counter")
  : 0;

let counter = document.querySelector(".counter");

const counterChange = () => {
  let numbercounter = parseInt(counter.textContent);
  numbercounter += 1;
  counter.textContent = numbercounter;
  navigator.vibrate(250);
  localStorage.setItem("counter", numbercounter);
};

const counterArea = document.querySelector(".counter");
counterArea.addEventListener("click", counterChange);

let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  let isConfirmed = window.confirm("Reset'lemek istediğinize eminmisiniz?");
  if (isConfirmed) {
    counter.textContent = 0;
  } else {
  }
});

const cumleler = [
  "Allah'ım, sana hamd olsun.",
  "Subhanallah, her şey senin kudretindedir.",
  "La ilahe illallah, yalnızca Sen varsın.",
  "Bismillah, her işin başı Senin adındır.",
  "Allah'ın rahmeti üzerimize olsun.",
  "Ya Allah, yardımınla her zorluğu aşarım.",
  "Rabbiniz, affedicidir, rahmet sahibidir.",
  "Şükredenlerin kalbi huzurludur.",
  "Zorluklarla birlikte kolaylık vardır.",
  "Allah, sabredenlerle beraberdir.",
  "Şüphesiz Allah, çok bağışlayandır, çok merhamet edendir.",
  "Eğer onlar gerçekten Allah’a tövbe ederlerse, Allah da onları affeder.",
  "O, tövbe edenleri kabul eder ve günahları bağışlar.",
];

const today = new Date();

const dayIndex = today.getFullYear() + today.getMonth() + today.getDate();

const selectedCumle = cumleler[dayIndex % cumleler.length];

document.querySelector(".cumle").innerText = selectedCumle;

// TODO PLACE

let ekle = document.getElementById("ekleButton");
let inputField = document.getElementById("inputPlace");
let ulLer = document.getElementById("ulLer");

document.addEventListener("DOMContentLoaded", function () {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoList.forEach((item) => {
    addItemToList(item);
  });
});

ekle.addEventListener("click", function (e) {
  e.preventDefault();
  let todoText = inputField.value.trim();

  if (todoText !== "") {
    addItemToList(todoText);
    inputField.value = "";
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.push(todoText);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});

function addItemToList(todoText) {
  let liler = document.createElement("li");
  let remove = document.createElement("button");

  liler.innerHTML = todoText;
  liler.classList = "liler";
  liler.style.marginBottom = "8px";
  liler.style.fontWeight = "700";
  ulLer.appendChild(liler);

  remove.innerHTML = "X";
  remove.classList = "remove";
  remove.style.cursor = "pointer";
  remove.style.width = "25px";
  remove.style.height = "25px";
  remove.style.marginLeft = "15px";
  remove.style.borderRadius = "13px";
  remove.style.fontWeight = "700";
  remove.style.border = " 3px solid rgb(182, 173, 5)";
  liler.appendChild(remove);

  remove.addEventListener("click", function () {
    ulLer.removeChild(liler);
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    let index = todoList.indexOf(todoText);
    if (index > -1) {
      todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  });
}

// YASİN PLACE

let yasinPlace = document.querySelector(".yasinSay span");

let yasinEkle = document.querySelector(".yasinEkle");

let azalt = document.querySelector(".azalt");

yasinEkle.addEventListener("click", (e) => {
  e.preventDefault();
  let yasinEkleNum = parseInt(yasinPlace.textContent);
  yasinEkleNum += 1;
  yasinPlace.textContent = yasinEkleNum;
  localStorage.setItem("yasinSay", yasinPlace.textContent);
});

azalt.addEventListener("click", (e) => {
  e.preventDefault();
  let azaltNum = parseInt(yasinPlace.textContent);
  azaltNum--;
  yasinPlace.textContent = azaltNum;
  localStorage.setItem("yasinSay", yasinPlace.textContent);
});

window.onload = function () {
  let getYasinSay = localStorage.getItem("yasinSay");
  if (getYasinSay) {
    yasinPlace.textContent = getYasinSay;
  }
};

//RUTİNLER

let rutinler = document.querySelectorAll(".rutinler input[type='checkbox']");

rutinler.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    let checkboxesState = Array.from(rutinler).map(
      (checkbox) => checkbox.checked
    );

    localStorage.setItem("checkboxesState", JSON.stringify(checkboxesState));
  });
});
window.addEventListener("load", () => {
  let savedState = JSON.parse(localStorage.getItem("checkboxesState"));
  if (savedState) {
    rutinler.forEach((checkbox, index) => {
      checkbox.checked = savedState[index];
    });
  }
});

//MUKABELE
