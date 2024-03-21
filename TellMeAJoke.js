document.getElementById('getJokeBtn').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            displayJoke(data.setup, data.punchline);
        })
        .catch(error => console.error('Error fetching joke:', error));
}

function displayJoke(setup, punchline) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = `
        <p><strong>${setup}</strong></p>
        <p>${punchline}</p>
    `;
}
