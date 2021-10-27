let jokes = document.getElementById("jokes")

const showJokes = () =>{
return fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
.then(response => response.json())
.then(quates =>{
let quate = quates.data;
 quate.forEach(newQuate => {
     jokes.textContent= newQuate.quoteText;
 });

    
});

}