const searchInput = document.querySelector('.header-input_wrapper input');
const cards = document.querySelectorAll('.cards_individualy');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const cardText = card.innerText.toLowerCase();

    if (cardText.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
