/**
 * This script demonstrates basic DOM manipulation techniques in JavaScript.
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


// Select an element by its ID
const heading = document.getElementById('heading');
heading.textContent = 'Welcome to the DOM Manipulation Example';

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

