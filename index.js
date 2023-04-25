console.log("Hello!!!");

const ulList = document.getElementById("ul_list");
const allTegLi = document.querySelectorAll("ul li");
let mouseDown = "";
let mouseUp = "";


ulList.addEventListener("click", (event) => {
  if (event.ctrlKey === false && event.shiftKey === false) {
    clearArea(allTegLi);
    event.target.classList.add('turn');
  } else if (event.ctrlKey === true && event.shiftKey === false) {
    event.target.classList.toggle('turn');
  } else if (event.ctrlKey === false && event.shiftKey === true) {
    clearArea(allTegLi);
    let start = mouseDown < mouseUp ? +mouseDown : +mouseUp;
    let end =  mouseDown > mouseUp ? +mouseDown : +mouseUp;
    for (let counter = (start - 1); counter <= (end - 1); counter++) {
      allTegLi[counter].classList.add('turn');
    }
  }
  ulList.classList.remove('turn');
});

ulList.addEventListener("mousedown", (event) => {
  mouseDown = event.target.innerText;
});

ulList.addEventListener("mouseup", (event) => {
  mouseUp = event.target.innerText;
});

const clearArea = (arrayWithTegLi) => {
  for (let li of arrayWithTegLi) {
    li.classList.remove('turn');
  }
}