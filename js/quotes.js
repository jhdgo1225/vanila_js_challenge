const quotes = [
  {
      "quote": "You Can't change what you are, only what you do.",
      "author": "Philip Pullman"
  },
  {
      "quote": "Lay a firm foundation with the bricks that others throw at you.",
      "author": "David Brinkley"
  },
  {
      "quote": "Change the way you look at things and the things you look at change.",
      "author": "Wayne Dyer"
  },
  {
      "quote": "If you run you stand a chance of losing, but if you don't run you've already lost.",
      "author": "Barack Obama"
  },
  {
      "quote": "If you have always done it that way, it is probably wrong.",
      "author": "charles Kettering"
  },
  {
      "quote": "The greatest mistake you can make in life is to be continually fearing you will make one.",
      "author": "Elbert Hubbard"
  },
  {
      "quote": "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
      "author": "James Baldwin"
  },
  {
      "quote": "If work were so pleasent, the rich would keep it for themselves.",
      "author": "Mark Twain"
  },
  {
      "quote": "I can't say whether things will get better if we change, what I can say is they must change if they are to get better.",
      "author": "Georg C. Lichtenberg"
  },
  {
      "quote": "To create more positive results in your life, replace 'if only' with 'next time'.",
      "author": "Unknown"
  }
];

const quote = document.querySelector(".quote");
const random = Math.floor(Math.random() * 10);

function reset() {
    quote.innerText = "Today's Quote";
}

function handleChangeQuote() {
    quote.innerText = `${quotes[random].author} - ${quotes[random].quote}`;
}

quote.addEventListener("mouseenter", handleChangeQuote);
quote.addEventListener("mouseout", reset);