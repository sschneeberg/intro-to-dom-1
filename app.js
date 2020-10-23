// Touring the DOM zoo!
// Select the specified parts of the DOM and console.log them
// use document.getElementById, document.getElementsByClassName, document.getElementsByTagName

// the mammals section
const mammalsSection = document.getElementById('mammals');
// the birds section
const birdsSection = document.getElementById('birds');
// all divs with the class animal
const animalDivs = document.getElementsByClassName('animal');
// the first animal div
const firstAnimalDiv = animalDivs[0];
// the last animal div
const lastAnimalDiv = animalDivs[animalDivs.length - 1];
// all imgs
const images = document.getElementsByTagName('img')
    // the number of imgs on the page
const imageCount = images.length;
// all labels
const labels = document.getElementsByTagName('label');
// all the labels, one at a time
for (let label of labels) {
    console.log(label);
}
//labels.forEach(function(el) { console.log(el); }); does not work with by tag name

// Do the zoo tour one more time, this time with document.querySelector and document.querySelectorAll
// the mammals section
const mammalsSection1 = document.querySelector('#mammals');
// the birds section
const birdsSection1 = document.querySelector('#birds');
// all divs with the class animal
const animalDivs1 = document.querySelectorAll('.animal');
// the first animal div
const firstAnimalDiv1 = animalDivs1[0];
// the last animal div
const lastAnimalDiv1 = animalDivs1[animalDivs1.length - 1];
// all imgs
const images1 = document.querySelectorAll('img');
// the number of imgs on the page
const imageCount1 = images1.length;
// all labels
const labels1 = document.querySelectorAll('label');
// all the labels, one at a time
labels1.forEach(function(el) { console.log(el); });
// ^ this does not work with by tag name

// Changing parts of the zoo!

// The owl is the coolest animal. Give the owl img a gold border to show this
const owl = document.getElementById('owl');
owl.style.border = "2px solid goldenrod";
// Change the label for the bunny to "Stylish Bunny"
document.querySelector("label[for=bunny]").innerText = "Stylish Bunny";
//or document.querySelector('#bunny + label')
// Once with innerText, then again with innerHTML. When using innerHTML, create a new div inside the label tag
// Give all images a border-radius of 3em
document.querySelectorAll('img').forEach(function(el) {
    el.style.borderRadius = '3em';
})

// The parrot is being rotated for a newer, flashier model: https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Change the img's src to reflect this. Use a direct attribute assignment, not the setAttribute method
document.getElementById('parrot').src = 'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

// Change our sheep image to: https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Use setAttribute
document.getElementById('sheep').setAttribute('src', ' https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
// Give all labels a text-decoration of underline, a font-size of 2em, and a color of darkgreen. Create a new class to handle this, and apply it to all the labels.

document.querySelectorAll('label').forEach(function(el) {
    el.classList.add("fancy-label")
})

// Remove the animal class from all divs that have it
document.querySelectorAll('div.animal').forEach(function(el) {
    el.classList.remove('animal');
})


// Zoo events!

// Put all of our existing js inside of a DOMContentLoaded event
/*
document.addEventListener('DOMContentLoaded', function(){
    //add js DOM here
});
*/

// attach an event listener to the owl image that logs "You clicked the coolest animal!"
document.querySelector('#owl').addEventListener('click', function() {
    console.log("You clicked the coolest animal!");
});

// attach an event listener to each animal that logs "You clicked an animal!"

document.querySelectorAll('img').forEach(function(e) {
    e.addEventListener('click', function() {
        console.log("You clicked an animal!");
    })
})

// Change the event listener on each animal to log "You clicked on <the-animal's-name>!". First do this the long way w/ 6 different events, then use a loop and the event object

document.querySelectorAll('img').forEach(function(e) {
    e.addEventListener('click', function(e) {
        const animalName = e.target.id;
        console.log(`You clicked on ${animalName}!`);
    })
})

// Add an event listener to each animal picture that changes that picture's label to 'Hello!' when the image is clicked on
document.querySelectorAll('img').forEach(function(el) {
    el.addEventListener('click', sayHello);
});

function sayHello(e) {
    const prevText = document.querySelector(`#${e.target.id} + label`).innerText;
    document.querySelector(`#${e.target.id} + label`).innerText = "Hello!";
    setTimeout(clearHello, 500, e, prevText);
}

function clearHello(e, prevText) {
    document.querySelector(`#${e.target.id} + label`).innerText = prevText;
}