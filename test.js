let size = 0;
const container = document.querySelector("#container");
const btn = document.querySelector('#btn');

btn.onclick = () => {
    // Prompt the user for the new canvas size
    size = parseInt(prompt('Enter the new canvas size'));
    
    // Clear the existing grid
    container.innerHTML = '';

    // Set the grid container size based on the window dimensions
    const maxSize = Math.min(window.innerWidth, window.innerHeight) * 0.8;  // Take up 80% of the screen size
    const cellSize = maxSize / size; // Calculate the cell size to ensure they stay square

    // Set the container width and height
    container.style.width = `${maxSize}px`;
    container.style.height = `${maxSize}px`;

    // Update grid styles dynamically
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create new boxes based on the size entered
    for (let i = 1; i <= size * size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = `${cellSize}px`;
        newDiv.style.height = `${cellSize}px`;
        container.appendChild(newDiv);
    }

    // Add event listeners to the new boxes
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'lightcoral'; // Change color on hover
        });
    });
};
