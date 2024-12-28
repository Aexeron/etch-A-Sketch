let size = 0
const container = document.querySelector("#container");
const btn = document.querySelector('#btn')
btn.onclick = () => size = parseInt(prompt('enter the new canvas size'))
for (let i = 1; i <= size; i++) {
    // Create a new div
    const newDiv = document.createElement('div');
    
    // Add a class to style the div
    newDiv.classList.add('box');
    
    // Append the new div to the container
    container.appendChild(newDiv);
}

// Select all elements with the 'box' class
const boxes = document.querySelectorAll(".box");

// Loop through each box and add the event listener
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'lightcoral'; // Change color on hover
    });
});

container.style.gridTemplateColumns('repeat(size, 1fr);')  /* 16 columns */
container.style.gridTemplateRows ('repeat(16, 1fr);') /* 16 rows */

