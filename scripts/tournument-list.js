// Select the button
const button = document.querySelector('.create-tournament-button');
// Select the tooltip element
const tooltip = document.getElementById('tooltip');

// Add event listener for mouseover event
button.addEventListener('mouseover', () => {
    // Set the text content of the tooltip
    tooltip.textContent = 'Create Tournament';
});

// Add event listener for mouseout event
button.addEventListener('mouseout', () => {
    // Clear the text content of the tooltip
    tooltip.textContent = '';
});
