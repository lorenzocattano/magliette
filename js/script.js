function searchProducts() {
  let input = document.getElementById("search-bar").value.toLowerCase();
  let cards = document.querySelectorAll(".category-card");

  cards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
