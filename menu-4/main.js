const body = document.body
const darkMode = document.querySelector(".dark-mode")
const cont = darkMode.querySelector("div")
const track = darkMode.querySelector(".track")
const mode = darkMode.querySelector(".text")

const links = document.querySelectorAll(".link")

const toggleNav = document.querySelector(".toggle-nav")
const nav = document.querySelector("nav")

toggleNav.addEventListener("click", () => {
  nav.classList.toggle("show")
})

cont.addEventListener("click", () => {
  body.classList.toggle("darkmode")
  if (body.classList.contains("darkmode")) mode.innerHTML = "Light Mode"
  else mode.innerHTML = "Dark Mode"
})

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(a => {
      if (a.classList.contains("active")) {
        a.classList.remove("active")
      }
    })
    link.classList.add("active")
  })
})
