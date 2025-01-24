const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-button');
const changeSizeButton = document.getElementById('change-size-button');
const colorPicker = document.getElementById('color-picker');
const rainbowModeButton = document.getElementById('rainbow-mode-button');
let rainbowMode = false;

// Create the grid
function createGrid(size) {
  container.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${500 / size}px`;
    gridItem.style.height = `${500 / size}px`;
    container.appendChild(gridItem);
  }
}

// Reset the grid
resetButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = '';
  });
});

// Change grid size
changeSizeButton.addEventListener('click', () => {
  const size = parseInt(document.getElementById('grid-size').value);
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Toggle rainbow mode
rainbowModeButton.addEventListener('click', () => {
  rainbowMode = !rainbowMode;
  rainbowModeButton.textContent = rainbowMode ? 'Disable Rainbow Mode' : 'Rainbow Mode';
});

// Hover effect
container.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('grid-item')) {
    if (rainbowMode) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      e.target.style.backgroundColor = randomColor;
    } else {
      e.target.style.backgroundColor = colorPicker.value;
    }
  }
});

createGrid(16);