// Function to return a promise resolving with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Step 1: Resolved initial array: [1, 2, 3, 4]');
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to update the content of the "output" div
function updateOutput(content) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = content;
  console.log('Step 2: Updated output:', content);
}

// Main function using promise chaining
getNumbers()
  .then((numbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        console.log('Step 3: Filtered even numbers:', evenNumbers);
        updateOutput(evenNumbers.join(', ')); // Update output div with filtered numbers
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);
        console.log('Step 4: Doubled numbers:', doubledNumbers);
        updateOutput(doubledNumbers.join(', ')); // Update output div with doubled numbers
        resolve(doubledNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
