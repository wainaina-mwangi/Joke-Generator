const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single";

let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
    jokeContainer.textContent = `${item.joke}`;
    });

}

btn.addEventListener("click",getJoke);

getJoke();
