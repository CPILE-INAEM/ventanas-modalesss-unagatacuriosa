// Selecciona los elementos del DOM que se van a utilizar en el código
const MODAL = document.querySelector('.modal')
const OVERLAY = document.querySelector('.overlay')
const BTNCLOSEMODAL = document.querySelector('.close-modal')
const BTNOPENMODAL = document.querySelectorAll('.show-modal')

// Define una función para abrir el modal
const openModal = function (e) {
  if (e.target.classList.contains('show-modal')) {
    MODAL.classList.remove('hidden')
    OVERLAY.classList.remove('hidden')
  }
}

// Define una función para cerrar el modal
const closeModal = function () {
  MODAL.classList.add('hidden')
  OVERLAY.classList.add('hidden')
}

// Usando un foreach en vez de un for
BTNOPENMODAL.forEach((btn) => btn.addEventListener('click', openModal))

// Agrega un event listener al botón de "Cerrar modal"
BTNCLOSEMODAL.addEventListener('click', closeModal)

// Agrega un event listener al overlay del modal para cerrar el modal cuando se hace clic fuera de él
OVERLAY.addEventListener('click', closeModal)

// Agrega un event listener para cerrar el modal cuando se presiona la tecla "Esc"
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !MODAL.classList.contains('hidden')) {
    closeModal()
  }
  e.stopPropagation
})
