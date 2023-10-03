let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
});
window.onscroll = () => {
  navList.classList.remove("active");
};
