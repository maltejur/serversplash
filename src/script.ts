const background = document.getElementById("background") as HTMLImageElement;
const vw = Math.floor(
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
);
const vh = Math.floor(
  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
);
background.src = `https://source.unsplash.com/collection/1053828/${vw}x${vh}`;
background.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
