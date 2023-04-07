// Collapsable menu variales
const burgerIcon = document.getElementById('burger');
// Color option variables
const color = document.getElementsByClassName('color-option');
// Modal variables
const modal = document.getElementById('modal');
const openModal = document.getElementById('plus-container')
const submitBtn = document.getElementById('textSubmit');
const defaultTag = document.getElementById('default-text');
// Personalisation element variables
const plusIcon = document.getElementById('plus-container');
const clearIcon = document.getElementById('clear-container');


// when the burger icon is clicked on mobile screens, the hidden class is added or removed from the main nav
burgerIcon.addEventListener('click', () => {
  const mainNav = document.getElementById('nav');
  if (mainNav.classList.contains('hidden')) {
    mainNav.classList.remove('hidden');
  } else {
    mainNav.classList.add('hidden');
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
document.getElementById("close-modal").onclick = function() {
  modal.classList.add('hidden');
}

// Hides the modal and overlay when a user clicks anywhere on the screen outside of the modal box
window.onclick = function(event) {
  if(event.target === modal) {
    modal.classList.add('hidden');
  }
}

// When the user clicks on the submit button, the input value is placed in the personalisation tab
// At the same time the plus icon will be hidden and the x icon will appear
submitBtn.addEventListener('click', () => {
  const userInput = document.getElementById('user-input');
  defaultTag.innerText = `Personalisation - ${userInput.value}`;
  modal.classList.add('hidden');
  plusIcon.classList.add('hidden');
  clearIcon.classList.add('show');
})

// When the user clicks on the x icon in the personalisation element, the input text is cleared
clearIcon.addEventListener('click', () => {
  defaultTag.innerText = `Add a personalisation`;
  clearIcon.classList.remove('show');
  plusIcon.classList.add('show');
}) 
  