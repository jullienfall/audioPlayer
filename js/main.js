function audioPlayer() {
    let currentSong = 0;
    document.querySelector(".audio-player").src = document.querySelectorAll(".playlist-item")[0];

    document.querySelectorAll(".playlist-item").forEach(a => a.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".audio-player").src = this;
        document.querySelector(".audio-player").play();
        document.querySelectorAll(".playlist-item").forEach(a => a.classList.remove("current-song"));
        this.classList.add("current-song");
        currentSong = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    }));

    document.querySelector(".audio-player").addEventListener("ended", function () {
        currentSong++;
        if (currentSong == document.querySelectorAll(".playlist-item").length)
            currentSong = 0;
        document.querySelectorAll(".playlist-item").forEach(a => a.classList.remove("current-song"));
        document.querySelectorAll(".playlist-item")[currentSong].classList.add("current-song");
        document.querySelector(".audio-player").src = document.querySelectorAll(".playlist-item")[currentSong];
        document.querySelector(".audio-player").play();
    })
}
audioPlayer();