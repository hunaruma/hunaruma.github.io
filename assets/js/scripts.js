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

// Ganti slide setiap 5 detik
setInterval(function() {
  slideIndex++;
}, 5000);


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

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const currentPos = window.scrollY;
  sections.forEach((section, index) => {
    const top = section.offsetTop - 200; // Adjust this value as needed
    const bottom = top + section.offsetHeight;
    if (currentPos >= top && currentPos <= bottom) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    } else {
      navLinks[index].classList.remove("active");
    }
  });
});
