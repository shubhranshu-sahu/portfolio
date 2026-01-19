document.querySelectorAll(".fade-seq").forEach(list => {
  const items = list.querySelectorAll("li");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 200);
  });
});
