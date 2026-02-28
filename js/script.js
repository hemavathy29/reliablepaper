console.log("Reliable Paper Website Loaded");


function openModal(img) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("popupImg").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}