const fireworkContainer = document.querySelector('.fireworks-container')
const counter = document.querySelector('#counter')
const audioContainer = document.querySelector('#audio-container')

const startingSecond = 3;
let time = startingSecond;

const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})

const countdown = () => {
    counter.innerHTML = time
    time--;

    if (time < 0) {
        clearInterval(countdownInterval)
        counter.classList.add("none");
        counter.parentElement.classList.add('start')
        fireworks.start()
    }
}

countdown()


const countdownInterval = setInterval(countdown, 1000)