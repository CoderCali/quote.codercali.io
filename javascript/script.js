const quotes = [
    "Believe you can and you're halfway there. –Theodore Roosevelt",
    "The only way to do great work is to love what you do. –Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. –Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. –Eleanor Roosevelt",
    "In the middle of every difficulty lies opportunity. –Albert Einstein",
    "Don't watch the clock; do what it does. Keep going. –Sam Levenson",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. –Christian D. Larson"
];

const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();
