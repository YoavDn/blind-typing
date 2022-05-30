"use strict"

const gText =
  "Every blogger needs advice on blogging, whether she is just starting or has been blogging for many years. These well-known blogging blogs offer actionable tips on all aspects of blogging."
const gLetters = gText.split("")

let gCurrLetter = 0
let gCharId = 0
const elContainer = document.querySelector(".container")
console.log(gLetters)
renderText(gText)

function type(e) {
  if (gCurrLetter === gLetters.length) {
    console.log("finished")
    return
  }
  if (e.key === "Shift") return
  if (e.key === "Backspace") {
    charCursor(gCurrLetter, false)

    gCurrLetter--
    charCursor(gCurrLetter, true)
    return
  }
  console.log(e.key)
  e.preventDefault()

  if (e.key === gLetters[gCurrLetter]) {
    updateChar(gCurrLetter, true)
    gCurrLetter++
  } else {
    updateChar(gCurrLetter, false)
    gCurrLetter++
  }
  console.log(gCurrLetter)

  //   console.log(gLetters[gCurrLetter])
  charCursor(gCurrLetter, true)
}

function updateChar(charId, display) {
  const currChar = document.getElementById(`char-${charId}`)
  currChar.style.backgroundColor = "rgb(99, 95, 95, 0.5)"
  currChar.style.textDecoration = "none"

  currChar.style.color = display ? "#99d98c" : "#ff595e"
}

function charCursor(charId, display) {
  const currChar = document.getElementById(`char-${charId}`)
  currChar.style.textDecoration = display ? "underline" : "none"
}

function renderChar(char) {
  let elChar = `
     <div id=char-${gCharId} class="char">
        <h2>${char}</h2>
      </div>
    `
  gCharId++
  return elChar
}

function renderWord(word) {
  let elWord = `<div class="word">`
  for (let i = 0; i < word.length; i++) {
    elWord += renderChar(word[i])
  }
  elWord += renderChar(" ")
  elWord += "</div>"
  elContainer.innerHTML += elWord
}

function renderText(text) {
  const words = text.split(" ")

  for (let i = 0; i < words.length; i++) {
    renderWord(words[i])
  }
}
