function mostrarMensagem(texto) {
  const popup = document.getElementById('popup');

  popup.innerText = texto;
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}

const versiculos = document.querySelectorAll('.versiculo');
let atual = 0;

setInterval(() => {
  versiculos[atual].classList.remove('ativo');

  atual++;

  if(atual >= versiculos.length) {
    atual = 0;
  }

  versiculos[atual].classList.add('ativo');
}, 4000);

window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card, .motivacao-card, .santo-box');

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

const elementos = document.querySelectorAll('.card, .motivacao-card, .santo-box');

 elementos.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(40px)';
  item.style.transition = '0.8s';
});