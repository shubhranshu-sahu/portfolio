function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById("current-time").textContent = time;
}

updateTime();
setInterval(updateTime, 1000);


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

/* Header clock (optional) */
setInterval(() => {
  document.getElementById("current-time").innerText =
    new Date().toLocaleTimeString();
}, 1000);
