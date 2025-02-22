const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
  
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
  
    jokeEl.innerHTML = data.joke;
  }

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

const audio = document.getElementById('clickSFX');
const button = document.getElementById('jokeBtn');

button.addEventListener('click', () => {
  audio.play();
});