/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = [
    {
        quote: "Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe.",
        source: "Lex Luthor",
        citation: "Superman",
        year: "1978"
    },
    {
        quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        source: "Albus Dumbledore",
        citation: "Harry Potter and the Prisoner of Azkaban",
        year: "2004"
    },
    {
        quote: "A ship is always safe at the shore, but it is not what it is built for.",
        source: "Albert Einstein",
    },
    {
        quote: "There is no path to happiness. Happiness is the path.",
        source: "Buddha",
    },
    {
        quote: "Great things are done by a series of small things brought together.",
        source: "Vincent Van Gogh",
    },
    {
        quote: "I had the epiphany that laughter is light, and light is laughter, and that is the secret of the universe.",
        source: "Donna Tartt",
    },
    {
        quote: "Get out and do something. It isn't your room that is a prison, it's yourself.",
        source: "Sylvia Plath",
    },
    {
        quote: "Life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things or make them unimportant.",
        source: "11th Doctor",
        citation: "Doctor Who",
        year: "2010"
    }];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuote();
    let quoteHTML = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" +
        randomQuote.source;
    if (randomQuote.citation != null) {
        quoteHTML = quoteHTML + "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    if (randomQuote.year != null) {
        quoteHTML = quoteHTML + "<span class='year'>" + randomQuote.year + "</span>";
    }
    quoteHTML = quoteHTML + "</p>";
    document.getElementById('quote-box').innerHTML = quoteHTML;
    console.log(quoteHTML);
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);