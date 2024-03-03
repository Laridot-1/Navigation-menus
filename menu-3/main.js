let listItems = document.querySelectorAll(".nav-links li")
let btn = document.querySelector(".toggle-nav")
let nav = document.querySelector("nav")

listItems.forEach(item => {
  item.addEventListener("click", () => {
    listItems.forEach(li => {
      if (li.classList.contains("active")) li.classList.remove("active")
    })
    item.classList.add("active")
  })
})

btn.addEventListener("click", () => nav.classList.toggle("show"))

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < 700 && nav.classList.contains("show")) {
    nav.classList.remove("show")
  }
})
