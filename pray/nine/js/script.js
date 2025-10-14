class Entry {
    constructor() {
        this.element = document.getElementById('entrance');
        this.player = document.getElementById('player');
        this.init();
    }

    init() {
        this.element.addEventListener('click', () => this.enter());
    }

    enter() {
        this.element.classList.add('fadeout');
        this.player.volume = 0.5;
        this.player.play().catch(err => console.log('Audio play failed:', err));
        
        setTimeout(() => {
            this.element.style.display = 'none';
            document.getElementById('home').classList.remove('homenotready');
        }, 200);
    }
}

class Nav {
    constructor() {
        this.items = document.querySelectorAll('.navitem');
        this.pages = document.querySelectorAll('.page');
        this.indicator = document.getElementById('indicator');
        this.init();
    }

    init() {
        this.update();
        
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.update(), 100);
        });
        
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-page');
                this.switch(target);
            });
        });
    }

    update() {
        const active = document.querySelector('.navitem.active');
        if (!active || !this.indicator) return;

        const rect = active.getBoundingClientRect();
        const parent = active.parentElement.getBoundingClientRect();

        this.indicator.style.width = `${rect.width}px`;
        this.indicator.style.height = `${rect.height}px`;
        this.indicator.style.left = `${rect.left - parent.left}px`;
        this.indicator.style.top = '0px';
    }

    switch(target) {
        this.items.forEach(item => item.classList.remove('active'));
        this.pages.forEach(page => page.classList.remove('active'));

        const nav = document.querySelector(`[data-page="${target}"]`);
        const page = document.getElementById(target);

        if (nav && page) {
            nav.classList.add('active');
            page.classList.add('active');
            setTimeout(() => this.update(), 50);
        }
    }
}

class Audio {
    constructor() {
        this.player = document.getElementById('player');
        this.slider = document.getElementById('slider');
        this.icon = document.querySelector('.audioicon svg');
        this.control = document.getElementById('icon');
        this.muted = false;
        this.volume = 50;
        this.init();
    }

    init() {
        this.slider.addEventListener('input', (e) => {
            this.set(Number(e.target.value));
        });

        this.slider.addEventListener('change', (e) => {
            this.updateIcon(Number(e.target.value));
        });

        this.control.addEventListener('click', () => {
            this.toggle();
        });

        this.set(50);
    }

    set(value) {
        this.player.volume = value / 100;
        this.updateIcon(value);
    }

    toggle() {
        if (this.muted) {
            this.player.volume = this.volume / 100;
            this.slider.value = String(this.volume);
            this.updateIcon(this.volume);
            this.muted = false;
        } else {
            this.volume = Number(this.slider.value);
            this.player.volume = 0;
            this.slider.value = '0';
            this.updateIcon(0);
            this.muted = true;
        }
    }

    updateIcon(value) {
        const vol = Math.floor(value);
        let path;

        if (vol === 0) {
            path = 'M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0';
        } else if (vol <= 25) {
            path = 'M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06';
        } else if (vol <= 75) {
            path = 'M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8';
        } else {
            path = 'M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303zm-1.415-1.414A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89zm-1.414-1.414A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06';
        }

        this.icon.innerHTML = `<path d="${path}"/>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Entry();
    new Music();
    new Nav();
    new Audio();
});