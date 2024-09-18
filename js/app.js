document.addEventListener('DOMContentLoaded', () => {
    const propertyListings = document.getElementById('property-listings');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    let properties = [];

    // Fetch and display properties
    fetchProperties().then(data => {
        properties = data;
        displayProperties(properties);
    });

    // Search functionality
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProperties = properties.filter(property => 
            property.name.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm)
        );
        displayProperties(filteredProperties);
    });

    function displayProperties(propertiesToDisplay) {
        propertyListings.innerHTML = '';
        propertiesToDisplay.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <h2>${property.name}</h2>
                <p>Location: ${property.location}</p>
                <p>Price: $${property.price} per night</p>
                <button onclick="alert('Booking feature coming soon!')">Book Now</button>
            `;
            propertyListings.appendChild(propertyCard);
        });
    }
});
