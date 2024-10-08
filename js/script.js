function showModal(title, description) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
