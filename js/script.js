document.addEventListener("DOMContentLoaded", function () {
    window.openModal = function (img) {
        document.getElementById("imageModal").style.display = "block";
        document.getElementById("popupImg").src = img.src;
    };

    window.closeModal = function () {
        document.getElementById("imageModal").style.display = "none";
    };

    const slider = document.getElementById("gallerySlider");

    function autoSlide() {
        if (!slider) return;

        slider.scrollBy({
            left: 320,
            behavior: "smooth",
        });

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        }
    }

    setInterval(autoSlide, 2500);

    const form = document.getElementById("whatsapp-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            const whatsappMessage =
                "New Enquiry from Website:\n\n" +
                "Name: " +
                name +
                "\n" +
                "Email: " +
                email +
                "\n" +
                "Phone: " +
                phone +
                "\n" +
                "Message: " +
                message;

            const whatsappURL =
                "https://wa.me/919962237575?text=" + encodeURIComponent(whatsappMessage);
            window.open(whatsappURL, "_blank");
            form.reset();
        });
    }
});

window.openPDF = function () {
    document.getElementById("pdfModal").style.display = "flex";
};

window.closePDF = function () {
    document.getElementById("pdfModal").style.display = "none";
};

window.openVideo = function (src) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");
    if (!modal || !video) return;
    video.src = src;
    modal.style.display = "flex";
};

window.closeVideo = function () {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");
    if (!modal || !video) return;
    video.pause();
    video.src = "";
    modal.style.display = "none";
};
