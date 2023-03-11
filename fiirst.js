let wordCounter = document.getElementById("words");
let charCounter = document.getElementById("characters");
let box = document.getElementById("content");
let upCounter = document.getElementById("upper");
let downCounter = document.getElementById("lower");
let spaceCounter = document.getElementById("space");
let symbolCounter = document.getElementById("symbol");

box.addEventListener("input", function () {
  let ar = box.value;
  let y = ar.split(" ");
  let count = 0,
    up = 0,
    down = 0,
    sp = 0,
    symbol = 0;
  for (let x of y) {
    if (x != "") {
      count++;
    }
  }
  for (let a of ar) {
    let m=/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (a == " ") {
      sp++;
    }
    if (a.match(/[A-Z]/g)) {
      up++;
    }
    if (a.match(/[a-z]/g)) {
      down++;
    }
    if(a.match(m)){
        symbol++;
    }
  }
  symbolCounter.innerHTML=symbol;
  downCounter.innerHTML=down;
  upCounter.innerHTML = up;
  spaceCounter.innerHTML = sp;
  wordCounter.innerHTML = count;
});
box.addEventListener("input", function () {
  let d = box.value.length;
  charCounter.innerHTML = d;
});
