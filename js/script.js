// Variables

var quotes = [

  {
    quote: "Think Different!",
    source:"Steve Jobs",
    citation: "",
    year: "",
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    source:"Nelson Mandela",
    citation: "",
    year: "1987",
  },
  {
    quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
    source:"Martin Luther King, Jr.",
    citation: "The Book",
    year: "2006",
  },
  {
    quote: "Education is not preparation for life; education is life itself.",
    source:"Jhony Dewey",
    citation: "The Book",
    year: "",
  },
  {
    quote: "The roots of education are bitter, but the fruit is sweet.",
    source:"Aristotle",
    citation: "",
    year: "1001",
  },

];

// selects a random quote object from the quotes array, returns the randomly selected quote object

function randomQuote(){

  var randomIndex = Math.random() * quotes.length + 1;
  console.log(randomIndex);

};

randomQuote();
