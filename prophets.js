// DOM Elements
const quoteText = document.querySelector('.quote-area .quote');
const authorName = document.querySelector('.content .name');
const synth = speechSynthesis;

// List of quotes
const quotes = [
    {
        "text": "Do to others as you would have them do to you.",
        "author": "Jesus"
        },
        {
        "text": "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        "author": "Jesus"
        },
        {
        "text": "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
        "author": "Dalai Lama (a spiritual leader often associated with Buddhism)"
        },
        {
        "text": "The mind is everything. What you think you become.",
        "author": "Buddha"
        },
        {
        "text": "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "author": "Buddha"
        },
        {
        "text": "There is no path to happiness: happiness is the path.",
        "author": "Buddha"
        },
        {
        "text": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "author": "Buddha"
        },
        {
        "text": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr. (a prominent civil rights leader influenced by Christian teachings)"
        },
        {
        "text": "Blessed are the peacemakers, for they will be called children of God.",
        "author": "Jesus"
        },
        {
        "text": "Before you embark on a journey of revenge, dig two graves.",
        "author": "Confucius"
        },
        {
        "text": "The best way to find yourself is to lose yourself in the service of others.",
        "author": "Mahatma Gandhi"
        },
        {
        "text": "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        "author": "James Baldwin"
        },
        {
        "text": "When the power of love overcomes the love of power, the world will know peace.",
        "author": "Jimi Hendrix (an influential musician)"
        },
        {
        "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa"
        },
        {
        "text": "You have heard that it was said, 'An eye for an eye and a tooth for a tooth.' But I say to you, Do not resist the one who is evil. But if anyone slaps you on the right cheek, turn to him the other also.",
        "author": "Jesus"
        },
        {
        "text": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
        },
        {
        "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
        },
        {
        "text": "A person is not a believer who fills his stomach while his neighbor goes hungry.",
        "author": "Prophet Muhammad"
        },
        {
        "text": "None of you truly believes until he wishes for his brother what he wishes for himself.",
        "author": "Prophet Muhammad"
        },
        {
        "text": "Give to the one who asks you, and do not turn away from the one who wants to borrow from you.",
        "author": "Jesus"
        },
        {
        "text": "Hate is not conquered by hate: hate is conquered by love. This is a law eternal.",
        "author": "Buddha"
        },
        {
        "text": "Do not judge, or you too will be judged. For in the same way you judge others, you will be judged, and with the measure you use, it will be measured to you.",
        "author": "Jesus"
        },
        {
        "text": "Better than a thousand hollow words, is one word that brings peace.",
        "author": "Buddha"
        },
        {
        "text": "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.",
        "author": "Confucius"
        },
        {
        "text": "A person who conquers himself is greater than one who conquers a thousand men in battle.",
        "author": "Buddha"
        },
        {
        "text": "The tongue is but three inches long, yet it can kill a man six feet high.",
        "author": "Japanese Proverb"
        },
        {
        "text": "Love your enemies, bless those who curse you, do good to those who hate you, and pray for those who spitefully use you and persecute you.",
        "author": "Jesus"
        },
        {
        "text": "An unexamined life is not worth living.",
        "author": "Socrates"
        },
        {
        "text": "The fool who recognizes his foolishness is therefore wise at least to that extent, but the fool who thinks himself wise is a fool indeed.",
        "author": "Buddha"
        },
        {
        "text": "Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day's own trouble be sufficient for the day.",
        "author": "Jesus"
        },
        {
        "text": "A jug fills drop by drop.",
        "author": "Buddha"
        },
        {
        "text": "The truth is always something that is told, not something that is known. If there were no speaking or writing, there would be no truth about anything. There would only be what is.",
        "author": "Susan Sontag"
        },
        {
        "text": "Hatred does not cease through hatred at any time. Hatred ceases through love. This is an unalterable law.",
        "author": "Buddha"
        },
        {
        "text": "The one who plants trees, knowing that he will never sit in their shade, has at least started to understand the meaning of life.",
        "author": "Rabindranath Tagore"
        },
        {
        "text": "The only thing necessary for the triumph of evil is for good men to do nothing.",
        "author": "Edmund Burke"
        },
        {
        "text": "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
        "author": "Dalai Lama"
        },
        {
        "text": "The root of suffering is attachment.",
        "author": "Buddha"
        },
        {
        "text": "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
        "author": "Albert Einstein"
        },
        {
        "text": "The best revenge is not to be like your enemy.",
        "author": "Marcus Aurelius"
        },
        {
        "text": "Do not be overcome by evil, but overcome evil with good.",
        "author": "Paul the Apostle"
        },
        {
        "text": "To be free from evil thoughts is God's best gift.",
        "author": "Buddha"
        },
        {
        "text": "You cannot shake hands with a clenched fist.",
        "author": "Indira Gandhi"
        },
        {
        "text": "You shall love your neighbor as yourself.",
        "author": "Jesus"
        },
        {
        "text": "The mind is restless and difficult to restrain, but subdued it brings happiness.",
        "author": "Buddha"
        },
        {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
        },
        {
        "text": "Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill.",
        "author": "Buddha"
        },
        {
        "text": "Seek not greater wealth, but simpler pleasure; not higher fortune, but deeper felicity.",
        "author": "Mahatma Gandhi"
        },
        {
        "text": "When you make a mistake, don't look back at it long. Take the reason of the thing into your mind and then look forward. Mistakes are lessons of wisdom. The past cannot be changed. The future is yet in your power.",
        "author": "Hugh White"
        },
        {
        "text": "Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred.",
        "author": "Martin Luther King Jr."
        },
        {
        "text": "A generous heart, kind speech, and a life of service and compassion are the things that renew humanity.",
        "author": "Buddha"
        },
        {
        "text": "The best way to predict the future is to create it.",
        "author": "Abraham Lincoln"
        },
        {
        "text": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr."
        },
        {
        "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa"
        },
        {
        "text": "Do not judge, or you too will be judged. For in the same way you judge others, you will be judged, and with the measure you use, it will be measured to you.",
        "author": "Jesus"
        },
        {
        "text": "Better than a thousand hollow words, is one word that brings peace.",
        "author": "Buddha"
        },
        {
        "text": "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.",
        "author": "Confucius"
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
