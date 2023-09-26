const searchBarContainer = document.getElementById("search-container");
const magnifierElement = document.querySelector(".magnifier");

magnifierElement.addEventListener("click", () => {
  searchBarContainer.classList.toggle("active");
  searchBarContainer.style.backgroundColor = "#f0f8ff";
});
