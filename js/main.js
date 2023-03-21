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

// Genera 5 numeri casuali e li inserisce in una lista
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  const list = document.getElementById("random-numbers");
  const listItem = document.createElement("li");
  const text = document.createTextNode(randomNumber);
  listItem.appendChild(text);
  list.appendChild(listItem);
}
