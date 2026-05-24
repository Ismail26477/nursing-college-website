const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



  let currentIndex = 0;
  const slides = document.querySelectorAll(".custom-slides");

  function showSlides() {
    slides.forEach(slide => slide.style.display = "none");

    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = "block";

    setTimeout(showSlides, 5000);
  }

  showSlides();



