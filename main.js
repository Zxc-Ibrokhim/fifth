
const имя = prompt("Enter your name"); 
const элемент = document.createElement("div");
элемент.textContent = имя;
элемент.style.color = "blue"; 
элемент.style.background = "yellow"; 
document.body.appendChild(элемент);
