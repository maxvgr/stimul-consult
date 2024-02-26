import { SetSize } from "../base/functions";

const header = document.getElementById("header");
const headerHeight = SetSize(header, "header", true);


// плавная прокрутка до id мешает работе якорей с других страниц!
// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

const hamburger = document.getElementsByClassName("hamburger--spin")[0]
const mobileNavs = document.getElementsByClassName("header__left-menu")[0]

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active")
  mobileNavs.classList.toggle("is-active")
})





