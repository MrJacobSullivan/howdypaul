import '../styles/style.scss'

const jacob = document.getElementById('jacob')

const disguise = document.getElementById('disguise')

disguise.addEventListener('click', () => {
  disguise.remove()
  jacob.src = '/img/HowdyPaulDisguise.gif'
})
