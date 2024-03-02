let listItems = document.querySelectorAll("li")
let btn = document.querySelector(".toggle-btn")
let nav = document.querySelector("nav")

for (let i = 0; i < listItems.length - 1; i++) {
  listItems[i].addEventListener("click", () => {
    for (let j = 0; j < listItems.length - 1; j++) {
      if (listItems[j].classList.contains("active")) {
        listItems[j].classList.remove("active")
      }
    }
    listItems[i].classList.add("active")
  })
}

btn.addEventListener("click", () => {
  btn.classList.toggle("show")
  nav.classList.toggle("show")
})
