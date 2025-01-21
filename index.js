// Profile Button Functionality
const profileBtn = document.getElementById("profile-btn");

profileBtn.addEventListener("click", () => {
    alert("Redirecting to your profile...");
    window.location.href = "profile.html"; // Replace with your profile page URL
});

// Redirect from Hero Section
function redirectToProfile() {
    alert("Let's get started!");
    window.location.href = "profile.html"; // Replace with your profile page URL
}
