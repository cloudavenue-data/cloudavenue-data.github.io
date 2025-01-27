document.addEventListener("keydown", function (event) {
    // Check if Command (Meta) or Control is pressed along with K
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault(); // Prevent the default behavior
        const searchInput = document.querySelector('input#search-query');
        if (searchInput) {
            searchInput.focus(); // Focus on the search bar
        }
    }
});
