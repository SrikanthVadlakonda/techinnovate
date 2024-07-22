function signUp() {
    alert("Thank you for signing up! Stay tuned for updates.");
}

function search() {
    const query = document.getElementById('searchBar').value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a search query.");
    }
}
