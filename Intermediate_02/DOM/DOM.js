/**
 * This script demonstrates basic DOM manipulation techniques in JavaScript.     DOCUMENT OBJECT MODEL (DOM)
 * 
 * Flowchart of DOM Structure:
 * 
 * Window
 *  └── Document
 *       ├── <html>
 *       │    ├── <head>
 *       │    │    └── Metadata (e.g., <title>, <meta>, <link>, <style>, etc.)
 *       │    └── <body>
 *       │         ├── Elements (e.g., <div>, <p>, <h1>, <button>, etc.)
 *       │         └── Scripts (e.g., <script>)
 *       └── DOM Tree (Hierarchical representation of the HTML structure)
 * 
 * Functions and Features:
 * - `window`: The global object representing the browser window.
 * - `document`: The root of the DOM tree, representing the HTML document.
 * - `<html>`: The root element of the HTML document.
 * - `<head>`: Contains metadata and resources for the document.
 * - `<body>`: Contains the visible content and elements of the document.
 */

//HTML Collections and Arrays are not the same. HTML Collections are live and automatically update when the DOM changes, while Arrays are static and do not change unless explicitly modified.
// Select an element by its ID
const heading = document.getElementById('title');
heading.textContent = 'Welcome to the DOM Manipulation Example';
//Style using JS
heading.style.color = 'red';
heading.style.fontSize = '2rem';

// Select elements by class name
const headingByClass = document.getElementsByClassName('heading');

// Get Attrubute of an element
document.getElementById('title').getAttribute('class'); //We need to pass the attribute name to get the value of that attribute

// Select attribute of an element
document.getElementById('title').setAttribute('class', 'new-class'); //We need to pass the attribute name and value to set the value of that attribute

// Create a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a dynamically added paragraph.';

// Append the new element to the body
document.body.appendChild(newParagraph);

// Add a class to the new paragraph
newParagraph.classList.add('highlight');

// Add an event listener to a button
const button = document.getElementById('click-me');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Change the style of an element
heading.style.color = 'blue';
heading.style.fontSize = '2rem';


// Difference between innerText and textContent
// innerText: Returns the visible text content of an element, excluding hidden elements and styles.
// textContent: Returns the text content of an element, including hidden elements and styles.
// innerHTML: Returns the HTML content of an element, including all child elements and their HTML tags.

// Query Selector
document.querySelector('h1'); // Selects the first <h1> element in the document
document.querySelectorAll('h1'); // Selects all <h1> elements in the document
document.querySelector('.heading'); // Selects the first element with the class "heading"
document.querySelector('#title'); // Selects the element with the ID "title"
document.querySelector('div > p'); // Selects the first <p> element that is a direct child of a <div> element
document.querySelector('div p'); // Selects the first <p> element that is a descendant of a <div> element - Selects the first <p> anywhere inside a <div> (child, grandchild, etc).
document.querySelector('div + p'); // Selects the first <p> element that is immediately preceded by a <div> element (siblings)
document.querySelector('div ~ p'); // Selects all <p> elements that are preceded by a <div> element
document.querySelector('div[attribute="value"]'); // Selects the first <div> element with a specific attribute and value
document.querySelector('div[attribute^="value"]'); // Selects the first <div> element with an attribute that starts with a specific value
// Query Selector All returns a NodeList, which is similar to an array but not exactly the same. You can use forEach to iterate over it, but you cannot use array methods like map or filter directly on it.
// To convert a NodeList to an array, you can use Array.from() or the spread operator [...nodelist].

const parent = document.querySelector('.parent')
console.log(parent.children); // Returns a live HTMLCollection of child elements
console.log(parent.childNodes); // Returns a live NodeList of all child nodes (including text nodes)
console.log(parent.children[0]) // Returns the first child element
console.log(parent.firstElementChild) // Returns the first child element along with html tags and text nodes
console.log(parent.lastElementChild) // Returns the last child element along with html tags and text nodes
const dayOne = document.querySelector('.day')

