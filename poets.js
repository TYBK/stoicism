// DOM Elements
const quoteText = document.querySelector('.quote-area .quote');
const authorName = document.querySelector('.content .name');
const synth = speechSynthesis;

// List of quotes
const quotes = [
    {
        "text": "Do not be satisfied with the stories that come before you. Unfold your own myth.",
        "author": "Rumi"
    },
    {
        "text": "Do not be satisfied with the stories that come before you. Unfold your own myth.",
        "author": "Rumi"
      },
      {
        "text": "The wound is the place where the Light enters you.",
        "author": "Rumi"
      },
      {
        "text": "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        "author": "Rumi"
      },
      {
        "text": "The breeze at dawn has secrets to tell you. Don't go back to sleep.",
        "author": "Rumi"
      },
      {
        "text": "What you seek is seeking you.",
        "author": "Rumi"
      },
      {
        "text": "The garden of the world has no limits, except in your mind.",
        "author": "Rumi"
      },
      {
        "text": "Let the beauty we love be what we do.",
        "author": "Rumi"
      },
      {
        "text": "When you do things from your soul, you feel a river moving in you, a joy.",
        "author": "Rumi"
      },
      {
        "text": "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        "author": "Rumi"
      },
      {
        "text": "Be empty of worrying. Think of who created thought!",
        "author": "Rumi"
      },
      {
        "text": "The wound is where the light enters you.",
        "author": "Rumi"
      },
      {
        "text": "Wherever you are, and whatever you do, be in love.",
        "author": "Rumi"
      },
      {
        "text": "Love is an endless act of forgiveness. Forgiveness is an endless act of love.",
        "author": "Rumi"
      },
      {
        "text": "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood.",
        "author": "Rumi"
      },
      {
        "text": "The only lasting beauty is the beauty of the heart.",
        "author": "Rumi"
      },
      {
        "text": "The quieter you become, the more you can hear.",
        "author": "Rumi"
      },
      {
        "text": "I am yours. Don't give myself back to me.",
        "author": "Rumi"
      },
      {
        "text": "Do not be satisfied with the stories that come before you. Unfold your own myth.",
        "author": "Rumi"
      },
      {
        "text": "You were born with wings, why prefer to crawl through life?",
        "author": "Rumi"
      },
      {
        "text": "Don't grieve. Anything you lose comes round in another form.",
        "author": "Rumi"
      },
      {
        "text": "The moon stays bright when it doesn't avoid the night.",
        "author": "Rumi"
      },
      {
        "text": "In your light, I learn how to love. In your beauty, how to make poems. You dance inside my chest where no one sees you, but sometimes I do, and that sight becomes this art.",
        "author": "Rumi"
      },
      {
        "text": "The wound is where the light enters you.",
        "author": "Rumi"
      },
      {
        "text": "You were born with wings, why prefer to crawl through life?",
        "author": "Rumi"
      },
      {
        "text": "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        "author": "Rumi"
      },
      {
        "text": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        "author": "Rumi"
      },
      {
        "text": "Don't grieve. Anything you lose comes round in another form.",
        "author": "Rumi"
      },
      {
        "text": "I want to sing like the birds sing, not worrying about who hears or what they think.",
        "author": "Rumi"
      },
      {
        "text": "The lion is most handsome when looking for food.",
        "author": "Rumi"
      },
      {
        "text": "Respond to every call that excites your spirit.",
        "author": "Rumi"
      },
      {
        "text": "Be like the sun for grace and mercy. Be like the night to cover others' faults. Be like running water for generosity. Be like death for rage and anger. Be like the Earth for modesty. Appear as you are. Be as you appear.",
        "author": "Rumi"
      },
      {
        "text": "When you lose all sense of self, the bonds of a thousand chains will vanish.",
        "author": "Rumi"
      },
      {
        "text": "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
        "author": "Rumi"
      },
      {
        "text": "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        "author": "Rumi"
      },
      {
        "text": "Let the lover be disgraceful, crazy, absent-minded. Someone sober will worry about events going badly. Let the lover be.",
        "author": "Rumi"
      },
      {
        "text": "Don't be a wanderer on this earth. Look inside and you'll find your way.",
        "author": "Rumi"
      },
      {
        "text": "What hurts you, blesses you. Darkness is your candle.",
        "author": "Rumi"
      },
      {
        "text": "Do not be satisfied with the stories that come before you. Unfold your own myth.",
        "author": "Rumi"
      },
      {
        "text": "Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea.",
        "author": "Rumi"
      },
      {
        "text": "Let yourself be drawn by the stronger pull of that which you truly love.",
        "author": "Rumi"
      },
      {
        "text": "Don't wait any longer. Dive in the ocean, leave and let the sea be you.",
        "author": "Rumi"
      },
      {
        "text": "You are not a drop in the ocean. You are the entire ocean in a drop.",
        "author": "Rumi"
      },
      {
        "text": "I am not this hair, I am not this skin, I am the soul that lives within.",
        "author": "Rumi"
      },
      {
        "text": "Love is the bridge between you and everything.",
        "author": "Rumi"
      },
      {
        "text": "The heart is the secret inside the secret.",
        "author": "Rumi"
      },
      {
        "text": "I want to see you. Know your voice. Recognize you when you first come around the corner. Sense your scent when I come into a room you've just left. Know the lift of your heel, the glide of your foot. Become familiar with the way you purse your lips then let them part, just the slightest bit, when I lean in to your space and kiss you. I want to know the joy of how you whisper 'more.'",
        "author": "Rumi"
      },
      {
        "text": "Do you know what you are? You are a manuscript of a divine letter. You are a mirror reflecting a noble face. This universe is not outside of you. Look inside yourself; everything that you want, you are already that.",
        "author": "Rumi"
      },
      {
        "text": "Lovers don't finally meet somewhere. They're in each other all along.",
        "author": "Rumi"
      },
      {
        "text": "What you seek is seeking you.",
        "author": "Rumi"
      },
      {
        "text": "The wound is the place where the Light enters you.",
        "author": "Rumi"
      },
      {
        "text": "Suffering is a gift. In it is hidden mercy.",
        "author": "Rumi"
      },
      {
        "text": "Be melting snow. Wash yourself of yourself.",
        "author": "Rumi"
      },
      {
        "text": "The moon stays bright when it doesn't avoid the night.",
        "author": "Rumi"
      },
      {
        "text": "Wear gratitude like a cloak and it will feed every corner of your life.",
        "author": "Rumi"
      },
      {
        "text": "Close your eyes. Fall in love. Stay there.",
        "author": "Rumi"
      },
      {
        "text": "Everything in the universe is within you. Ask all from yourself.",
        "author": "Rumi"
      },
      {
        "text": "You were born with wings, why prefer to crawl through life?",
        "author": "Rumi"
      },
      {
        "text": "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
        "author": "Rumi"
      },
      {
        "text": "The moment you accept what troubles you've been given, the door will open.",
        "author": "Rumi"
      },
      {
        "text": "Let silence take you to the core of life.",
        "author": "Rumi"
      },
          {
            "text": "Wherever you are, and whatever you do, be in love.",
            "author": "Rumi"
          },
          {
            "text": "The garden of the world has no limits, except in your mind.",
            "author": "Rumi"
          },
          {
            "text": "The quieter you become, the more you can hear.",
            "author": "Rumi"
          },
          {
            "text": "The soul has been given its own ears to hear things that the mind does not understand.",
            "author": "Rumi"
          },
          {
            "text": "Don't grieve. Anything you lose comes round in another form.",
            "author": "Rumi"
          },
          {
            "text": "Why are you so enchanted by this world when a mine of gold lies within you?",
            "author": "Rumi"
          },
          {
            "text": "Inside you, there's an artist you don't know about. He's not interested in how things look different in moonlight.",
            "author": "Rumi"
          },
          {
            "text": "Your heart knows the way. Run in that direction.",
            "author": "Rumi"
          },
          {
            "text": "Sell your cleverness and buy bewilderment.",
            "author": "Rumi"
          },
          {
            "text": "This is a subtle truth. Whatever you love you are.",
            "author": "Rumi"
          },
          {
            "text": "Respond to every call that excites your spirit.",
            "author": "Rumi"
          },
          {
            "text": "If light is in your heart, you will find your way home.",
            "author": "Rumi"
          },
          {
            "text": "Live life as if everything is rigged in your favor.",
            "author": "Rumi"
          },
          {
            "text": "If you are irritated by every rub, how will your mirror be polished?",
            "author": "Rumi"
          },
          {
            "text": "When you do things from your soul, you feel a river moving in you, a joy.",
            "author": "Rumi"
          },
          {
            "text": "I looked in temples, churches, and mosques. But I found the Divine within my heart.",
            "author": "Rumi"
          },
          {
            "text": "Do not be satisfied with the stories that come before you. Unfold your own myth.",
            "author": "Rumi"
          },
          {
            "text": "You are not a drop in the ocean. You are the entire ocean in a drop.",
            "author": "Rumi"
          },
          {
            "text": "Silence is the language of God. All else is poor translation.",
            "author": "Rumi"
          },
          {
            "text": "You were born with wings, why prefer to crawl through life?",
            "author": "Rumi"
          },
          {
            "text": "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free.",
            "author": "Rumi"
          },
          {
            "text": "Stop acting so small. You are the universe in ecstatic motion.",
            "author": "Rumi"
          },
          {
            "text": "Let yourself be drawn by the stronger pull of that which you truly love.",
            "author": "Rumi"
          },
          {
            "text": "The wound is the place where the Light enters you.",
            "author": "Rumi"
          },
          {
            "text": "Suffering is a gift. In it is hidden mercy.",
            "author": "Rumi"
          },
          {
            "text": "Wherever you are, and whatever you do, be in love.",
            "author": "Rumi"
          },
          {
            "text": "You are not a drop in the ocean. You are the entire ocean in a drop.",
            "author": "Rumi"
          },
          {
            "text": "The quieter you become, the more you can hear.",
            "author": "Rumi"
          },
          {
            "text": "The soul has been given its own ears to hear things that the mind does not understand.",
            "author": "Rumi"
          },
          {
            "text": "Don't grieve. Anything you lose comes round in another form.",
            "author": "Rumi"
          },
          {
            "text": "Why are you so enchanted by this world when a mine of gold lies within you?",
            "author": "Rumi"
          },
          {
              "text": "Wherever you are, and whatever you do, be in love.",
              "author": "Rumi"
            },
            {
              "text": "The garden of the world has no limits, except in your mind.",
              "author": "Rumi"
            },
            {
              "text": "The quieter you become, the more you can hear.",
              "author": "Rumi"
            },
            {
              "text": "The soul has been given its own ears to hear things that the mind does not understand.",
              "author": "Rumi"
            },
            {
              "text": "Don't grieve. Anything you lose comes round in another form.",
              "author": "Rumi"
            },
            {
              "text": "Why are you so enchanted by this world when a mine of gold lies within you?",
              "author": "Rumi"
            },
            {
              "text": "Inside you, there's an artist you don't know about. He's not interested in how things look different in moonlight.",
              "author": "Rumi"
            },
            {
              "text": "Your heart knows the way. Run in that direction.",
              "author": "Rumi"
            },
            {
              "text": "Sell your cleverness and buy bewilderment.",
              "author": "Rumi"
            },
            {
              "text": "This is a subtle truth. Whatever you love you are.",
              "author": "Rumi"
            },
            {
              "text": "Respond to every call that excites your spirit.",
              "author": "Rumi"
            },
            {
              "text": "If light is in your heart, you will find your way home.",
              "author": "Rumi"
            },
            {
              "text": "Live life as if everything is rigged in your favor.",
              "author": "Rumi"
            },
            {
              "text": "If you are irritated by every rub, how will your mirror be polished?",
              "author": "Rumi"
            },
            {
              "text": "When you do things from your soul, you feel a river moving in you, a joy.",
              "author": "Rumi"
            },
            {
              "text": "I looked in temples, churches, and mosques. But I found the Divine within my heart.",
              "author": "Rumi"
            },
            {
              "text": "Do not be satisfied with the stories that come before you. Unfold your own myth.",
              "author": "Rumi"
            },
            {
              "text": "You are not a drop in the ocean. You are the entire ocean in a drop.",
              "author": "Rumi"
            },
            {
              "text": "Silence is the language of God. All else is poor translation.",
              "author": "Rumi"
            },
            {
              "text": "You were born with wings, why prefer to crawl through life?",
              "author": "Rumi"
            },
            {
              "text": "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free.",
              "author": "Rumi"
            },
            {
              "text": "Stop acting so small. You are the universe in ecstatic motion.",
              "author": "Rumi"
            },
            {
              "text": "Let yourself be drawn by the stronger pull of that which you truly love.",
              "author": "Rumi"
            },
            {
              "text": "The wound is the place where the Light enters you.",
              "author": "Rumi"
            },
            {
              "text": "Suffering is a gift. In it is hidden mercy.",
              "author": "Rumi"
            },
            {
              "text": "Wherever you are, and whatever you do, be in love.",
              "author": "Rumi"
            },
            {
              "text": "You are not a drop in the ocean. You are the entire ocean in a drop.",
              "author": "Rumi"
            },
            {
              "text": "The quieter you become, the more you can hear.",
              "author": "Rumi"
            },
            {
              "text": "The soul has been given its own ears to hear things that the mind does not understand.",
              "author": "Rumi"
            },
            {
              "text": "Don't grieve. Anything you lose comes round in another form.",
              "author": "Rumi"
            },
            {
              "text": "Why are you so enchanted by this world when a mine of gold lies within you?",
              "author": "Rumi"
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
