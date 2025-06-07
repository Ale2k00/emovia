// Toggle menu on mobile
document.querySelector('.navbar__toggle').addEventListener('click', () => {
  const menu = document.querySelector('.navbar__menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function openModal(product) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const images = product.images
    .map((img, i) => `<img src="${img}" class="${i === 0 ? 'active' : ''}" data-index="${i}">`)
    .join('');
  overlay.innerHTML = `
    <div class="modal">
      <header class="modal__header">
        <h3>${product.name}</h3>
        <button class="modal__close">&times;</button>
      </header>
      <div class="modal__body">
        <div class="slider">${images}
          <button class="slider__prev">&#8249;</button>
          <button class="slider__next">&#8250;</button>
        </div>
        <p>${product.description}</p>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.modal__close').onclick = () => overlay.remove();

  const slides = overlay.querySelectorAll('.slider img');
  let index = 0;
  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  }
  overlay.querySelector('.slider__prev').onclick = () => show(index - 1);
  overlay.querySelector('.slider__next').onclick = () => show(index + 1);
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = p.category;
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="card__img">
      <h3 class="card__title">${p.name}</h3>
      <p class="card__desc">${p.description}</p>`;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}

function setupFilters() {
  const filterWrap = document.querySelector('.filter-buttons');
  const categories = Array.from(new Set(products.map(p => p.category)));
  filterWrap.innerHTML = '<button class="filter button button--secondary active" data-cat="all">Tutti</button>';
  categories.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'filter button button--secondary';
    b.dataset.cat = cat;
    b.textContent = cat;
    filterWrap.appendChild(b);
  });
  filterWrap.addEventListener('click', e => {
    if (e.target.classList.contains('filter')) {
      document.querySelectorAll('.filter').forEach(el => el.classList.remove('active'));
      e.target.classList.add('active');
      applyFilters();
    }
  });
}

function applyFilters() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const active = document.querySelector('.filter.active').dataset.cat;
  const filtered = products.filter(p => {
    return (active === 'all' || p.category === active) &&
           p.name.toLowerCase().includes(term);
  });
  renderProducts(filtered);
}

document.getElementById('searchInput').addEventListener('input', applyFilters);

document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  applyFilters();

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = 'Invio in corso...';
    setTimeout(() => {
      status.textContent = 'Messaggio inviato! Grazie per averci scritto.';
      form.reset();
    }, 1000);
  });
});
