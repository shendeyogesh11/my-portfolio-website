// Initialize the Typed.js library to create a typing animation effect
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Video Editor'],
    typeSpeed: 50,
});

// Add event listener for the Download Resume button
document.getElementById("downloadBtn").addEventListener("click", function() {
    // Create a temporary anchor element
    var link = document.createElement("a");
    link.download = "Resume101"; // Set the file name
    link.href = "https://docs.google.com/document/d/1x8z34Pxj5b1uE_OKmIwk_NASY3wFM5tIjBNDQDUu1Sg/edit?usp=drive_link"; // Set the path to your resume file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the anchor element after the download
});
