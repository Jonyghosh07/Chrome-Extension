fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const p_joke = document.getElementById("joke_p");
        p_joke.innerHTML = jokeText;
    })
