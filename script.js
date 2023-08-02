// DOM Elements
const quoteText = document.querySelector('.quote-area .quote');
const authorName = document.querySelector('.content .name');
const synth = speechSynthesis;

// Fetch and display a random quote
function randomQuote() {
  fetch('https://stoic-quotes.com/api/quotes')
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex].text;
      const author = data[randomIndex].author || 'Unknown';
      quoteText.innerText = quote;
      authorName.innerText = author;
    })
    .catch(error => {
      console.log('Error fetching quote:', error);
    });
}

// Event listener to change to the next quote on click anywhere on the page
document.addEventListener('click', randomQuote);

// Function to read the quote using speech synthesis
function readQuote() {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  synth.speak(utterance);
}

// Initial quote on page load
randomQuote();

// Make the widget draggable
const draggableWidget = document.querySelector('.draggable-widget');
let isDragging = false;
let startX, startY, offsetX, offsetY;

draggableWidget.addEventListener('mousedown', function (event) {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  offsetX = draggableWidget.offsetLeft;
  offsetY = draggableWidget.offsetTop;
});

document.addEventListener('mousemove', function (event) {
  if (isDragging) {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    draggableWidget.style.left = `${offsetX + deltaX}px`;
    draggableWidget.style.top = `${offsetY + deltaY}px`;
  }
});

document.addEventListener('mouseup', function () {
  isDragging = false;
});
