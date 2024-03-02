let listItems = document.querySelectorAll(".nav-links li")

listItems.forEach(item => {
  item.addEventListener("click", () => {
    listItems.forEach(li => {
      if (li.classList.contains("active")) li.classList.remove("active")
    })
    item.classList.add("active")
  })
})
