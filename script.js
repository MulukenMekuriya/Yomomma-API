let jokes = document.getElementById("jokes")

const showJokes = () =>{
return fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
.then(response => response.json())
.then(quates =>{
    console.log(quates.data.quoteText);
    return jokes.textContent=quates.data.quoteText;
});

}