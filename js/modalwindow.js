const slider = document.querySelector('.slider-list');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];

slider.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    modal.style.display = 'block';
    modalImage.src = event.target.src;
  }
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


var openModalBtn = document.getElementById('open-modal');
var modalcase = document.getElementById('modal-case');
var closeBtn1 = modalcase.querySelector('.close');

openModalBtn.addEventListener('click', function(event) {
  event.preventDefault();
  modalcase.style.display = 'block';
});

modalcase.addEventListener('click', function(event) {
  if (event.target === modalcase || event.target === closeBtn1) {
    modalcase.style.display = 'none';
  }
});
