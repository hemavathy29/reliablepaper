console.log("Reliable Paper Website Loaded");

document.addEventListener("DOMContentLoaded", function () {
    //popup
    window.openModal = function (img) {
        document.getElementById("imageModal").style.display = "block";
        document.getElementById("popupImg").src = img.src;
    };

    window.closeModal= function () {
        document.getElementById("imageModal").style.display = "none";
    };

    // AUTO SLIDE GALLERY
    const track = document.getElementById("galleryTrack");
    let scrollAmount = 0;
    const slideStep = 320; 

    function autoSlide() {
        if(!track) return;
        scrollAmount += slideStep;

        if (scrollAmount >= track.scrollWidth - track.clientWidth) {
            scrollAmount = 0;
        }

        track.style.transform = `translateX(-"+ scrollAmount+"px)`;
    }

    setInterval(autoSlide, 2500);
});