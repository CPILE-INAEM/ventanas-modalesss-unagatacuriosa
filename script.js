// Selecciona los elementos del DOM que se van a utilizar en el código
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelector('.show-modal')

// Define una función para abrir el modal
const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

// Define una función para cerrar el modal
const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// Usando un foreach en vez de un for
// btnOpenModal.forEach((btn) => btn.addEventListener('clicl', openModal))

// Agrega un event listener a cada botón de "Abrir modal" usando un bucle for
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal)

// Agrega un event listener al botón de "Cerrar modal"
btnCloseModal.addEventListener('click', closeModal)

// Agrega un event listener al overlay del modal para cerrar el modal cuando se hace clic fuera de él
overlay.addEventListener('click', closeModal)

// Agrega un event listener para cerrar el modal cuando se presiona la tecla "Esc"
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
