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

// Yasin Place

// toDo Place

let ekle = document.getElementById("ekleButton");
let inputField = document.getElementById("inputPlace");
let ulLer = document.getElementById("ulLer");
let remove = document.createElement("button");

ekle.addEventListener("click", function (e) {
  e.preventDefault();
  let liler = document.createElement("li");
  let remove = document.createElement("button");
  liler.innerHTML = inputField.value;
  liler.style.marginBottom = "8px";
  liler.style.fontWeight = "700";
  ulLer.appendChild(liler);
  inputField.value = " ";
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
  });
});
