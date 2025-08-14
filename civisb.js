let open = document.querySelector(".open");
let close = document.querySelector(".close");
let ham_navigation = document.querySelector("#ham_navigation");

ham_navigation.style.display = "none";
close.style.display = "none";

open.addEventListener("click", () => {
  ham_navigation.style.display = "flex";
  close.style.display = "flex";
  open.style.display = "none";
});

close.addEventListener("click", () => {
  ham_navigation.style.display = "none";
  close.style.display = "none";
  open.style.display = "flex";
});
