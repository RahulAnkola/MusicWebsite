const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const playlistLinks = document.querySelectorAll(".playlist a");

playlistLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const src = this.getAttribute("data-src");
        audioSource.src = src;
        audioPlayer.load();
        audioPlayer.play();
    });
});
