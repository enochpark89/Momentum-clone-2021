const quote = document.querySelector(".js-quote");
const author = document.querySelector(".js-author");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    let ranNum = getRandomInt(700)
    const text = data[ranNum].text;
    const apiAuthor = data[ranNum].author;
    quote.innerText = `"${text}"`;
    author.innerText = `- ${apiAuthor} -`;
  });