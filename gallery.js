// Function to open the modal with the clicked image
function openModal(event) {
    if (event.target.tagName === 'IMG') {
        // Get the source of the clicked image
        const imageSrc = event.target.src;

        // Set the modal content to the clicked image
        document.getElementById('modalImage').src = imageSrc;

        // Display the modal
        document.getElementById('imageModal').style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Attach click event listener to a common parent element
document.querySelector('.imgcontainer').addEventListener('click', openModal);