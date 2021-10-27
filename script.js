let jokes = document.getElementById("jokes")

const showJokes = () =>{
return fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
.then(response => response.json())
.then(data =>{
    console.log(data.quote);
    jokes.textContent=data.quote;
});
}