// Select the container div
const container = document.querySelector('.container');

// Function to create the grid
function createGrid(size) {
  container.innerHTML = ''; // Clear any existing grid
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${500 / size}px`; // Adjust based on container size
    gridItem.style.height = `${500 / size}px`; // Adjust based on container size
    container.appendChild(gridItem);
  }
}

// Call the function to create a 16x16 grid
createGrid(16);

// Add event listeners to each grid item
container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('grid-item')) {
      e.target.style.backgroundColor = 'blue'; // Change color on hover
    }
  });
