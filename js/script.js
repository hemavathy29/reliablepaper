console.log("Reliable Paper Website Loaded");

//popup
function openModal(img) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("popupImg").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// AUTO SLIDE GALLERY
const track = document.getElementById("galleryTrack");
let scrollAmount = 0;

function autoSlide() {
    scrollAmount += 320;

    if (scrollAmount >= track.scrollWidth - track.clientWidth) {
        scrollAmount = 0;
    }

    track.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(autoSlide, 3000);