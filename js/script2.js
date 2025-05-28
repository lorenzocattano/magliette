document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('shirt-container');
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');

  if (!container) return; // Se non siamo nella pagina Premier League, esci

  shirts.forEach(shirt => {
    const div = document.createElement("div");
    div.classList.add("card");

    // Imposta l'intera card come link
    div.onclick = () => {
      window.open(shirt.link, "_blank"); // Apri il link in una nuova scheda
    };

    div.innerHTML = `
        <img src="${shirt.image}" alt="${shirt.name}">
        <h3>${shirt.name}</h3>
        <p>${shirt.price}</p>
        <div class="card-content">
            <button class="show-btn" onclick="event.stopPropagation(); toggleOverlay('${shirt.image}')">Visualizza Maglia</button>
        </div>
    `;

    container.appendChild(div);
  });

  // shirts.forEach(shirt => {
  //   const card = document.createElement('div');
  //   card.className = 'card';
  //   card.innerHTML = `
  //     <a href="${shirt.link}" target="_blank">
  //       <img src="${shirt.image}" alt="${shirt.name}">
  //     </a>
  //     <div class="card-content">
  //       <div class="card-title">${shirt.name}</div>
  //       <div class="card-price">${shirt.price}</div>
  //       <button class="show-btn" onclick="toggleOverlay('${shirt.image}')">Visualizza Maglia</button>
  //     </div>
  //   `;
  //   container.appendChild(card);
  // });

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
