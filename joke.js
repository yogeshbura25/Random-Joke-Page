let jokeTextE1 = document.getElementById("jokeText");
let spinnerE1 = document.getElementById("spinner");
let jokeBtnE1 = document.getElementById("jokeBtn");

let options = {
    method: "GET"
};

function getRandomJoke() {
    spinnerE1.classList.remove("d-none");
    jokeTextE1.classList.add("d-none");
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomjoke = jsonData.value;
            spinnerE1.classList.add("d-none");
            jokeTextE1.classList.remove("d-none");
            jokeTextE1.textContent = randomjoke;
        });
}
jokeBtnE1.addEventListener("click", getRandomJoke);