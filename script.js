function scrollToCategory(category) {
    var categoryElement = document.getElementById(category);
    if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: "smooth" });
    }
}

function showDropdown() {
    document.getElementById("categoryDropdown").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#searchInput')) {
        var dropdown = document.getElementById("categoryDropdown");
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};
