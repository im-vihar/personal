const body = document.body;
const logo = document.getElementById('logo');
const profile = document.getElementById('profile');
const container = document.querySelector('.container');
const enterOverlay = document.getElementById('enterOverlay');
const audio = new Audio('static/media/audio.flac');
audio.volume = 0.5;

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

const observer = new IntersectionObserver((e) => {
    e.forEach(t => {
        if (t.isIntersecting) t.target.classList.add('visible');
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

observer.observe(profile);
observer.observe(container);

logo.addEventListener('click', () => body.classList.toggle('dark'));

enterOverlay.addEventListener('click', () => {
    audio.play();
    enterOverlay.classList.add('hidden');
});

function terminal(words, id) {
    const target = document.getElementById(id);
    const cursor = document.getElementById('cursor');
    let count = 1;
    let dir = 1;
    let wait = false;

    setInterval(() => {
        if (count === 0 && !wait) {
            wait = true;
            target.innerHTML = '';
            setTimeout(() => {
                words.push(words.shift());
                dir = 1;
                count += dir;
                wait = false;
            }, 1000);
        } else if (count === words[0].length + 1 && !wait) {
            wait = true;
            setTimeout(() => {
                dir = -1;
                count += dir;
                wait = false;
            }, 1000);
        } else if (!wait) {
            const text = words[0].substring(0, count);
            target.innerHTML = text.replace('.', '<span style="color:#808080">.</span>');
            count += dir;
        }
    }, 120);

    setInterval(() => cursor.classList.toggle('hidden'), 400);
}

terminal(['vihar.cc'], 'text');