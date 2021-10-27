const showJokes = () =>{
return fetch("https://yomomma-api.herokuapp.com")
.then(response => response.json())
.then(data =>{
    console.log(data)
})
}