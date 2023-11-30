const draws = document.querySelectorAll(".draw");
const popup = document.querySelector(".popup");
const popup_mesaj = document.querySelector("#mesaj");
let dogruCevap;
let yanlisCevap = 0;
let toplamHata = 6;
let kelimeUzunluk = 0;
var child_input;
let randomKelime;
let harf = [];
const kelimeler = [
  "kalemlik",
  "kitap",
  "defter",
  "koltuk",
  "masa",
  "termos",
  "bilgisayar",
  "daire",
  "otomobil",
  "sandalye",
  "kedi",
  "top",
  "futbol",
  "basketbol",
  "voleybol",
  "köpek",
  "kuş",
  "lamba",
  "trafik",
  "otobüs",
  "kamyon",
  "ağaç",
  "ışık",
  "süt",
  "domates",
  "salatalık",
  "peynir",
  "zeytin",
  "merdiven",
  "inşaat",
  "makine",
];

function getRandomKelime(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

randomKelime = getRandomKelime(kelimeler);
harf = randomKelime.split("");

var parent_div = document.createElement("div");
parent_div.id = "parent";
document.querySelector(".box1").appendChild(parent_div);

while (kelimeUzunluk < harf.length) {
  child_input = document.createElement("div");
  child_input.className = "child";
  child_input.name = "child" + kelimeUzunluk;
  child_input.id = kelimeUzunluk;
  document.getElementById(parent_div.id).appendChild(child_input);
  kelimeUzunluk++;
}

function reloadPage() {
  window.location.reload();
}

window.addEventListener("keydown", (event) => {
  const letter = event.key;
  if (
    letter === "Enter" ||
    letter === "Escape" ||
    letter === "Tab" ||
    letter === "Alt" ||
    letter === "Shift" ||
    letter === "Control" ||
    letter === "CapsLock"
  ) {
    return;
  }

  if (randomKelime.includes(letter)) {
    for (let i = 0; i < harf.length; i++) {
      if (harf[i].includes(letter)) {
        child_input.id = i;
        document.getElementById(child_input.id).innerHTML = harf[i];
        dogruCevap = document.querySelector("#parent").textContent;
        if (dogruCevap === randomKelime) {
          popup.style.display = "flex";
          popup.style.backgroundColor = "#36e31f";
          popup_mesaj.innerHTML = "Tebrikler. Buldunuz!";
        }
      }
    }
  } else {
    yanlisCevap++;
    draws.forEach((draw, index) => {
      if (index < yanlisCevap) {
        draw.style.display = "block";
      } else {
        draw.style.display = "none";
      }
    });
  }
  if (yanlisCevap === toplamHata) {
    popup.style.display = "flex";
    popup.style.backgroundColor = "#e03448";
    popup_mesaj.innerHTML = "Oyun Bitti. Kaybettiniz!";
  }
});
