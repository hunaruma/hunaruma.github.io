document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname;

  menuItems.forEach((item) => {
    const itemHref = item.getAttribute("href");

    if (currentPage.includes(itemHref)) {
      item.classList.add("nav-selected");
    } else {
      item.classList.remove("nav-selected");
    }
  });
});

function initMap() {
  // Initialize the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -6.8761460506287, lng: 107.54459689460187 },
    zoom: 8,
  });
}


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Ganti slide setiap 5 detik
setInterval(function() {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);

// Tambahkan event listener untuk setiap dot agar dapat diklik
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    currentSlide(i + 1);
  });
}


const containerGalleryItems = document.querySelectorAll('.container-gallery-item');

containerGalleryItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Add a class to the container when hovering over the image
    item.parentNode.classList.add('active');
  });

  item.addEventListener('mouseout', () => {
    // Remove the class when the mouse leaves the image
    item.parentNode.classList.remove('active');
  });
});