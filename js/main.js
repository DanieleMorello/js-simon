/*
  Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
  Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
  i numeri che ha visto precedentemente, tramite il prompt().
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
  indovinare sono stati individuati.
 */

/* 
  TOOLS
  -Funzione random
  -prompt

*/

// array per salvare i numeri casuali
const randomNumbers = []; 
// Genera 5 numeri casuali e li inserisce in una lista
for (let i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 100);
  const list = document.getElementById("random-numbers");
  const listItem = document.createElement("li");
  const text = document.createTextNode(randomNum);
  listItem.appendChild(text);
  list.appendChild(listItem);
  randomNumbers.push(randomNum);
}

 // Nasconde i numeri dopo 30 secondi
 setTimeout(function() {
  const list = document.getElementById("random-numbers");
  list.innerHTML = "";
}, 30000);