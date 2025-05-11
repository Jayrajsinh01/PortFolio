document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const bottomNav = document.getElementById("bottomNav");

  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      bottomNav.classList.add("show");
    } else {
      bottomNav.classList.remove("show");
    }
  });
});


