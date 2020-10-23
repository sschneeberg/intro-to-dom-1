//creating DOM elements
//1. create tag element
var a = document.createElement('a');
//2. modify properties
a.href = "https://google.com";
a.textContent = "GOOGLE";
//3. add to document
document.body.appendChild(a); //bottom of body section
/*
//second example: add a <li>
const listItem = document.createElement("li");
listItem.textContent = 'Pirates of the Carribbean';
const list = document.querySelector('ul');
const listItem2 = list.children[1];
list.insertBefore(listItem, listItem2);
*/
// obtain a reference to where we'll add it
var list = document.getElementById("my-favorite-movies");

// CREATE
var newMovie = document.createElement("li");

// MODIFY
newMovie.textContent = "Pirates of Silicon Valley";

// ATTACH
list.appendChild(newMovie);