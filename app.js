// Collapsable menu variales
const burgerIcon = document.getElementById('burger');
// Color option variables
const colorTan = document.getElementById('color-tan');
const colorBlack = document.getElementById('color-black');
const colorTypes = document.querySelector('.color-types');
// Modal variables
const modal = document.getElementById('modal');
const openModal = document.getElementById('plus-container')
const submitBtn = document.getElementById('textSubmit');
const defaultTag = document.getElementById('default-text');
// Personalisation element variables
const plusIcon = document.getElementById('plus-container');
const clearIcon = document.getElementById('clear-container');
// Quantity variables
const quantity = document.getElementById('quantity-input');
// Image zoom variable
const zoom = document.getElementById('zoom-btn');
const carousel = document.getElementById('carousel');


// when the burger icon is clicked on mobile screens, the hidden class is added or removed from the main nav and header icons
burgerIcon.addEventListener('click', () => {
  const mainNav = document.getElementById('nav');
  const icons = document.getElementById('header-icons');
  if (mainNav.classList.contains('hidden') && icons.classList.contains('hidden')) {
    mainNav.classList.remove('hidden');
    icons.classList.remove('hidden');
  } else {
    mainNav.classList.add('hidden');
    icons.classList.add('hidden');
  }
})

// Modal toggle functionality
// When a user clicks on the plus icon of the persenalisation element, the overlay and modal are shown
openModal.addEventListener('click', () => {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  }
})

// Hides the modal and overlay when the user clicks on the close icon
document.getElementById("close-modal").onclick = () => {
  modal.classList.add('hidden');
}

// Hides the modal or carousel and overlay when a user clicks anywhere on the screen outside of the modal box or carousel
window.onclick = (e) => {
  if(e.target === modal) {
    modal.classList.add('hidden');
  }
  if(e.target === carousel) {
    carousel.classList.remove('show');
  }
}

// When the user clicks on the submit button, the input value is placed in the personalisation tab
// At the same time the plus icon will be hidden and the x icon will appear
submitBtn.addEventListener('click', () => {
  const userInput = document.getElementById('user-input');
  defaultTag.innerText = `Personalisation - ${userInput.value}`;
  plusIcon.classList.add('hidden');
  clearIcon.classList.add('show');
  modal.classList.add('hidden');
  userInput.value = '';
})

// When the user clicks on the x icon in the personalisation element, the input text is cleared
clearIcon.addEventListener('click', () => {
  defaultTag.innerText = 'Add a personalisation';
  clearIcon.classList.remove('show');
  plusIcon.classList.remove('hidden');
}) 

// When the user chooses a color of the product a class of active is given
colorBlack.addEventListener('click', () => {
  colorBlack.classList.add('active');
  colorTan.classList.remove('active');
})

colorTan.addEventListener('click', () => {
  colorTan.classList.add('active');
  colorBlack.classList.remove('active');
})

// When the user clicks on the zoom button. an owl-carouselle will appear showing product images
zoom.addEventListener('click', () => {
  const carousel = document.getElementById('carousel');
  carousel.classList.add('show');
})

// Allows the user to increase or decrease the quantity of the product
function incrementValue()
{
  let value = parseInt(quantity.value, 10);
  value = isNaN(value) ? 0 : value;
  if(value < 10){
    value++;
    quantity.value = value;
  }
}

function decreaseValue() {
  let value = parseInt(quantity.value, 10);
  value = isNaN(value) ? 0 : value;
  if(value > 1){
    value--;
    quantity.value = value;
  }
}



  