//your JS code here. If required.
// Function to return a promise resolving with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to update the content of the "output" div
function updateOutput(content) {
  document.getElementById('output').textContent = content;
}

// Main function using promise chaining
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        updateOutput(evenNumbers.join(', ')); // Update output div
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2 after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);
        updateOutput(doubledNumbers.join(', ')); // Update output div
        resolve(doubledNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
