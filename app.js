// Collapsable menu variales
const burgerIcon = document.getElementById("burger");
// Modal variables
const modal = document.getElementById('modal');
const openModal = document.getElementById('plus-container')

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
