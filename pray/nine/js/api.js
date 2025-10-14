const CONFIG = {
    user: "Nineskulls",
    url: "/api.php",
    interval: 5000
};

class Music {
    constructor() {
        this.element = document.getElementById('musicdisplay');
        this.current = null;
        this.init();
    }

    init() {
        this.fetch();
        setInterval(() => this.fetch(), CONFIG.interval);
    }

    async fetch() {
        try {
            const response = await fetch(CONFIG.url);

            if (!response.ok) throw new Error('API request failed');

            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error('Music fetch error:', error);
            this.error();
        }
    }

    render(data) {
        if (!data.recenttracks?.track?.length) {
            this.empty();
            return;
        }

        const track = data.recenttracks.track[0];
        const id = `${track.artist["#text"]}-${track.name}`;
        
        if (this.current === id) return;
        
        this.current = id;
        const playing = track["@attr"]?.nowplaying;
        
        const info = {
            artist: track.artist["#text"] || "Unknown Artist",
            title: track.name || "Unknown Track",
            image: this.getImage(track),
            time: track.date ? this.formatTime(track.date.uts) : "",
            playing
        };

        this.element.innerHTML = this.createHtml(info);
    }

    getImage(track) {
        if (!track.image?.length) return this.defaultImage();
        
        const image = track.image.find(img => img.size === "large") ||
                     track.image.find(img => img.size === "medium") ||
                     track.image[0];
                     
        return image["#text"] || this.defaultImage();
    }

    defaultImage() {
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iOCIgZmlsbD0iIzBhMGEwYSIvPgo8cGF0aCBkPSJNMjAgMjBIMjdWMjdIMjBWMjBaIiBmaWxsPSIjZjFlY2M0Ii8+CjxwYXRoIGQ9Ik0yNyAyN0gzNFYzNEgyN1YyN1oiIGZpbGw9IiNmMWVjYzQiLz4KPHBhdGggZD0iTTIwIDM0SDI3VjQxSDIwVjM0WiIgZmlsbD0iI2YxZWNjNCIvPgo8L3N2Zz4K";
    }

    createHtml(info) {
        const { artist, title, image, time, playing } = info;
        const status = playing ? "Now Playing" : `Last Played${time ? ` ${time}` : ""}`;
        const indicator = playing 
            ? '<div class="flex items-center gap-1 mr-2.5"><div class="wavebar"></div><div class="wavebar"></div><div class="wavebar"></div><div class="wavebar"></div><div class="wavebar"></div></div>'
            : '<div class="w-2 h-2 rounded-full mr-2.5 bg-b1/60"></div>';

        const trackUrl = this.createUrl(artist, title, true);
        const artistUrl = this.createUrl(artist, null, false);

        return `
            <div class="flex items-center space-x-3">
                <img src="${image}" alt="Album Art" class="w-16 h-16 rounded-lg shadow-md object-cover">
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-b1 truncate text-base">
                        <span class="cursor-pointer transition-all duration-300 ease-out hover:text-b1/80 transform inline-block" onclick="window.open('${trackUrl}', '_blank')">${title}</span>
                    </h3>
                    <p class="text-d2 text-sm truncate">
                        by <span class="cursor-pointer transition-all duration-300 ease-out hover:text-b1/80 transform inline-block" onclick="window.open('${artistUrl}', '_blank')">${artist}</span>
                    </p>
                    <div class="flex items-center mt-1.5">
                        ${indicator}
                        <span class="text-sm text-d3">${status}</span>
                    </div>
                </div>
            </div>
        `;
    }

    error() {
        this.element.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-16 h-16 bg-d4 border border-b2 rounded-lg flex items-center justify-center">
                    <span class="text-b1 text-lg">!</span>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-b1 text-base">Unable to load music</h3>
                    <p class="text-d2 text-sm">Check connection</p>
                </div>
            </div>
        `;
    }

    empty() {
        this.element.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-16 h-16 bg-d4 rounded-lg flex items-center justify-center">
                    <span class="text-b1 text-lg">♪</span>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-b1 text-base">No recent tracks</h3>
                    <p class="text-d2 text-sm">Start listening!</p>
                </div>
            </div>
        `;
    }

    formatTime(timestamp) {
        const date = new Date(timestamp * 1000);
        const now = new Date();
        const minutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

        if (minutes < 1) return "Just now";
        if (minutes < 60) return `${minutes}m ago`;
        if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
        return date.toLocaleDateString();
    }

    createUrl(artist, track, isTrack) {
        const encodedArtist = encodeURIComponent(artist.replace(/\s+/g, '+'));
        return isTrack 
            ? `https://www.last.fm/music/${encodedArtist}/_/${encodeURIComponent(track.replace(/\s+/g, '+'))}`
            : `https://www.last.fm/music/${encodedArtist}`;
    }
}