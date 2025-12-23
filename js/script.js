/* ================= MUSIC ================= */
const music = document.getElementById("bgMusic");
let isPlaying = true;

function toggleMusic(){
  if(music){
    isPlaying ? music.pause() : music.play();
    isPlaying = !isPlaying;
  }
}

/* ================= LIGHTBOX ================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
}

function closeLightbox() {
  if(lightbox) lightbox.style.display = "none";
}

