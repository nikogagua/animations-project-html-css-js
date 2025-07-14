const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    item.querySelector(".img").style.backgroundColor = randomColor;
    item.querySelector(".img").style.borderColor = randomColor;
    item.querySelector(".img").style.transform = "scale(1.3)";
    // Remove 'clicked' from all items
    // items.forEach((i) => i.classList.remove("clicked"));
    // item.classList.toggle("clicked");
  });
});
