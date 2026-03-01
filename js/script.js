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
    const slider = document.getElementById("gallerySlider"); 

    function autoSlide() {
        if(!slider) return;
        
        slider.scrollBy({
            left: 320,
            behavior: "smooth"
        });

        //Reset when reached end

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        }
    }

    setInterval(autoSlide, 2500);
});

