const body = document.body
const darkMode = document.querySelector(".dark-mode")
const cont = darkMode.querySelector("div")
const track = darkMode.querySelector(".track")
const mode = darkMode.querySelector(".text")

cont.addEventListener("click", () => {
  body.classList.toggle("darkmode")
  if (body.classList.contains("darkmode")) mode.innerHTML = "Light Mode"
  else mode.innerHTML = "Dark Mode"
})
