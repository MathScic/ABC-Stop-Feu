document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  }

  showItem(currentIndex);
  setInterval(nextItem, 3000);
});
