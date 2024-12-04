<script>
// Function to change the duck image
function changeImage() {
    // Get the image element
    const image = document.getElementById('image');
    
    // Create a new URL with a timestamp to ensure fresh image every time
    const timestamp = new Date().getTime();
    const newImageUrl = `api/randomimg?t=${timestamp}`;

    // Update the image source with the new URL
    image.src = newImageUrl;
}
</script>
