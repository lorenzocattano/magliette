document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('shirt-container');
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');

  if (!container) return;

  nationalTeams.forEach(team => {
    const card = document.createElement("div");
    card.className = "card double-shirt-card";

    card.innerHTML = `
        <h3>${team.country}</h3>
        <div class="double-shirt-container">
        ${team.shirts.map((shirt, index) => `
            <div class="single-shirt">
              <a href="${shirt.link}" target="_blank">
                <img src="${shirt.image}" alt="Maglia ${team.country} ${shirt.year}">
              </a>
              <p><strong>${shirt.year}</strong></p>
              <button class="show-btn" onclick="event.stopPropagation(); toggleOverlay('${shirt.image}')">Visualizza Maglia</button>
              ${index === 1 ? `
                <div class="legend">
                  <strong>Legenda:</strong> ${team.legend}
                  <br>
                  <img src="${team.legendImg}" alt="${team.legend}" class="legend-img" onclick="toggleOverlay('${team.legendImg}')">
                </div>
              ` : ''}
            </div>
          `).join("")}
        </div>
    `;

    container.appendChild(card);
  });

  window.toggleOverlay = function (imgSrc = '') {
    if (!overlay || !overlayImg) return;
    if (imgSrc) {
      overlayImg.src = imgSrc;
      overlay.classList.add('active');
    } else {
      overlay.classList.remove('active');
      overlayImg.src = '';
    }
  };

  document.getElementById("search-bar").addEventListener("input", function () {
    let input = this.value.toLowerCase();
    let cards = document.querySelectorAll("#shirt-container .card");

    cards.forEach(card => {
      let title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(input) ? "block" : "none";
    });
  });
});
