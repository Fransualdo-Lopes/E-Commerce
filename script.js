var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

// lupa do menu

function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (searchInput.style.display === "none") {
    searchInput.style.display = "inline-block";
  } else {
    searchInput.style.display = "none";
  }
}

