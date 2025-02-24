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

// toDo Place
let ekle = document.getElementById("ekleButton");
let inputField = document.getElementById("inputPlace");
let ulLer = document.getElementById("ulLer");

ekle.addEventListener("click", function () {
  let liler = document.createElement("li");
  liler.innerHTML = inputField.value;
  ulLer.appendChild(liler);
  inputField.value = " ";
});
