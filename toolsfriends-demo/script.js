// Toggle menu su mobile
document.querySelector('.navbar__toggle').addEventListener('click', () => {
  const menu = document.querySelector('.navbar__menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

function openModal(contentHtml) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <header class="modal__header">
        <h3>Dettaglio Prodotto</h3>
        <button class="modal__close">&times;</button>
      </header>
      <div class="modal__body">${contentHtml}</div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.modal__close').onclick = () => overlay.remove();
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    openModal(`<p>Qui dettagli e media multimediali per “${card.querySelector('.card__title').innerText}”.</p>`);
  });
});
