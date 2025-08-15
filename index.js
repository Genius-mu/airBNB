let drop = document.querySelectorAll("#drop");
let p_close = document.querySelectorAll(".p_close");
let p_open = document.querySelectorAll(".p_open");
let opn = document.querySelector("#open");
let cls = document.querySelector("#close");
let hamNav = document.querySelector("#hamNav");

cls.style.display = "none";
hamNav.style.display = "none";

opn.addEventListener("click", () => {
  opn.style.display = "none";
  cls.style.display = "flex";
  hamNav.style.display = "flex";
});
cls.addEventListener("click", () => {
  opn.style.display = "flex";
  cls.style.display = "none";
  hamNav.style.display = "none";
});

p_close.forEach((close) => {
  close.style.display = "none";
});

drop.forEach((el) => {
  el.style.display = "none";
});

let inputIndex = p_close.length;
let arr = [];

for (let i = 0; i <= inputIndex; i++) {
  arr.push(i);
}
console.log(inputIndex);
console.log(arr);

for (let e = 0; e <= arr.length; e++) {
  const val = arr[e];
  console.log(val);
  p_open[val].addEventListener("click", () => {
    p_close[val].style.display = "flex";
    p_open[val].style.display = "none";

    drop[val].style.display = "flex";
  });

  p_close[val].addEventListener("click", () => {
    p_open[val].style.display = "flex";
    p_close[val].style.display = "none";

    drop[val].style.display = "none";
  });
}
