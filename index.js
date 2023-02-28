console.log("Hello!!!");

const levels = prompt("Укажите высоту пирамиды:");
let empty = 0;
let emptySum = "";
let stars = -1;
let starsSum = "";

for (let i = 1; i <= levels; i++) {
  empty = levels - i;
  for (let j = 1; j <= empty; j++) {
    emptySum = emptySum + "-";
  }
  stars = stars + 2;
  for (let k = 1; k <= stars; k++) {
    starsSum = starsSum + "#";
  }
  console.log(`${emptySum}${starsSum}${emptySum}`);
  emptySum = "";
  starsSum = "";
}

// ----#----
// ---###---
// --#####--
// -#######-
// #########
