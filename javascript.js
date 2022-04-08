const divTrue = document.querySelector("div.flex-container-true");
const divFalse = document.querySelector("div.flex-container-false");
const formatMinText = (text) => text.split(" ").slice(0, 4).join(" ") + " ...";

// Funzione crea card
const createCard = (title, completed) => {
    const divEl = document.createElement("div");
    const h4El = document.createElement("h4");
    const statusEl = document.createElement("p");

    h4El.textContent = title;
    statusEl.textContent = completed;

    divEl.append(h4El, statusEl);
    completed ? divTrue.appendChild(divEl) : divFalse.appendChild(divEl);
};



let dataBooking = [];

 // Chiamata FETCH
 fetch("https://jsonplaceholder.typicode.com/todos")
 .then((res) => res.json())
 .then((data) => 
   // data.map((booking) =>
   data.map(
     (item) => {
       createCard(formatMinText(item.title), item.completed)
     }
   )
 );
// Aggiungere appuntamento da input
const AddBooking = document.querySelector("input");
const Bottone = document.querySelector("button");

Bottone.addEventListener('click', () => {
  createCard(formatMinText(AddBooking.value), false);
  AddBooking.value = "";
});