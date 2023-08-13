// DOM Elements
const quoteText = document.querySelector('.quote-area .quote');
const authorName = document.querySelector('.content .name');
const synth = speechSynthesis;

// List of quotes
const quotes = [
    {
        "text": "A journey of a thousand miles begins with a single step.",
        "author": "Laozi"
        },
        {
        "text": "When the winds of change blow, some people build walls and others build windmills.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Patience is a bitter plant, but its fruit is sweet.",
        "author": "Chinese Proverb"
        },
        {
        "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Even a hare will bite when it is cornered.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A book holds a house of gold.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A diamond with a flaw is worth more than a pebble without imperfections.",
        "author": "Chinese Proverb"
        },
        {
        "text": "One joy scatters a hundred griefs.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Talk doesn't cook rice.",
        "author": "Chinese Proverb"
        },
        {
        "text": "If you want happiness for a lifetime, help someone else.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A closed mind is like a closed book; just a block of wood.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who cheats the earth will be cheated by the earth.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Learning is a treasure that will follow its owner everywhere.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Teachers open the door, but you must enter by yourself.",
        "author": "Chinese Proverb"
        },
        {
        "text": "To believe in one's dreams is to spend all of one's life asleep.",
        "author": "Chinese Proverb"
        },
        {
        "text": "When you drink water, remember the source.",
        "author": "Chinese Proverb"
        },
        {
        "text": "An inch of time is an inch of gold, but you can't buy that inch of time with an inch of gold.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A fall into a pit, a gain in your wit.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Do good, reap good; do evil, reap evil.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A wise man makes his own decisions, an ignorant man follows public opinion.",
        "author": "Chinese Proverb"
        },
        {
        "text": "If you bow at all, bow low.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who strikes the first blow admits he's lost the argument.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Be not afraid of growing slowly, be afraid only of standing still.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A single conversation with a wise man is worth a month's study of books.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Better to light a candle than to curse the darkness.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Man who stand on hill with mouth open will wait long time for roast duck to drop in.",
        "author": "Chinese Proverb"
        },
        {
        "text": "The palest ink is better than the best memory.",
        "author": "Chinese Proverb"
        },
        {
        "text": "If you want to know what a man is really like, take notice of how he acts when he loses money.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Those who say it cannot be done should not interrupt the person doing it.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A fool judges people by the presents they give him.",
        "author": "Chinese Proverb"
        },
        {
        "text": "If you don't want anyone to know, don't do it.",
        "author": "Chinese Proverb"
        },
        {
        "text": "You cannot prevent the birds of sorrow from flying over your head, but you can prevent them from building nests in your hair.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.",
        "author": "Chinese Proverb"
        },
        {
        "text": "The person who says something is impossible should not interrupt the person who is doing it.",
        "author": "Chinese Proverb"
        },
        {
        "text": "It is better to be a dog in a peaceful time than to be a human in a chaotic period.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Dig the well before you are thirsty.",
        "author": "Chinese Proverb"
        },
        {
        "text": "When you plan for a year, plant rice; when you plan for a decade, plant trees; when you plan for a lifetime, educate people.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A bird does not sing because it has an answer. It sings because it has a song.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Do not be afraid of growing slowly; be afraid only of standing still.",
        "author": "Chinese Proverb"
        },
        {
        "text": "The best fighter is never angry.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who sacrifices his conscience to ambition burns a picture to obtain the ashes.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A wise man adapts himself to circumstances, as water shapes itself to the vessel that contains it.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Silence is a source of great strength.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Do not confine your children to your own learning, for they were born in another time.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A frog in a well does not know the great ocean.",
        "author": "Chinese Proverb"
        },
        {
        "text": "If you do not change direction, you may end up where you are heading.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Real gold does not fear the test of fire.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A mistake is a lesson, not a loss.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who seeks revenge should remember to dig two graves.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A clear conscience never fears midnight knocking.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Be the mountain or lean on one.",
        "author": "Chinese Proverb"
        },
        {
        "text": "The temptation to quit will be greatest just before you are about to succeed.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Do not be afraid of moving slowly; be afraid of standing still.",
        "author": "Chinese Proverb"
        },
        {
        "text": "You cannot make a silk purse out of a sow's ear.",
        "author": "Chinese Proverb"
        },
        {
        "text": "Teachers can open the door, but you must enter it yourself.",
        "author": "Chinese Proverb"
        },
        {
        "text": "A gem is not polished without rubbing, nor a man perfected without trials.",
        "author": "Chinese Proverb"
        },
        {
        "text": "He who is not a good servant will not be a good master.",
        "author": "Chinese Proverb"
        },
        {
        "text": "An ant may well destroy a whole dam.",
        "author": "Chinese Proverb"
        },
        {
        "text": "When we have nothing to worry about, we are not doing much, and not doing much may supply us with plenty of future worries.",
        "author": "Chinese Proverb"
        }
    // Add more quotes here...
];

// Fetch and display a random quote
function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex].text;
    const author = quotes[randomIndex].author || 'Unknown';
    quoteText.innerText = quote;
    authorName.innerText = author;
}

// Event listener to change to the next quote on click within the article, nav, and aside
const articleElement = document.querySelector('article');
const navElement = document.querySelector('nav');
const asideElement = document.querySelector('aside');

articleElement.addEventListener('click', randomQuote);
navElement.addEventListener('click', randomQuote);
asideElement.addEventListener('click', randomQuote);

// Function to read the quote using speech synthesis
function readQuote() {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    synth.speak(utterance);
}

// Initial quote on page load
randomQuote();
