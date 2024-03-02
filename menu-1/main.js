const listItems = document.querySelectorAll("li")

listItems.forEach(li => {
  li.addEventListener("click", () => {
    listItems.forEach(item => {
      if (item.classList.contains("active")) item.classList.remove("active");
    })
    li.classList.add("active")
  })
})
