document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.gallery .item');
    
    items.forEach(function(item) {
        const gameName = item.querySelector('h3').textContent.toLowerCase();
        
        if (gameName.includes(query)) {
            item.style.display = ''; // Show the item if it matches the query
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match the query
        }
    });
});
