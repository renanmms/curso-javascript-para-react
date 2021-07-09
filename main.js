// Se o nome do arquivo for index.js não é necessário colocar o nome do arq
import CardGame from './src/components/CardGame'
// Arquiteturas de pastas
import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

// Consumindo a API do DOM
const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)

// Mudar o conteúdo da div
$root.insertAdjacentHTML('beforeend', $htmlCardGame)
