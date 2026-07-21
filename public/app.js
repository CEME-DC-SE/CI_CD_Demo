/**
 * Web Application Logic for CI/CD Demo Calculator
 * Interacts with DOM elements and executes math operations using the exported window.MathLib object.
 */
document.addEventListener('DOMContentLoaded', () => {
  // DOM element references
  const numA = document.getElementById('numA');
  const numB = document.getElementById('numB');
  const resultVal = document.getElementById('result-value');
  const buttons = document.querySelectorAll('.btn-op');

  // Attach click event handlers to operator buttons
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const op = btn.getAttribute('data-op');
      const a = parseFloat(numA.value);
      const b = parseFloat(numB.value);

      // Validate numeric inputs
      if (isNaN(a) || isNaN(b)) {
        resultVal.textContent = 'Error: Invalid Input';
        resultVal.style.color = '#f85149';
        return;
      }

      try {
        let res;
        // Access window.MathLib populated by src/math.js script tag
        const math = window.MathLib || {};
        
        switch (op) {
          case 'add':
            res = math.add ? math.add(a, b) : a + b;
            break;
          case 'subtract':
            res = math.subtract ? math.subtract(a, b) : a - b;
            break;
          case 'multiply':
            res = math.multiply ? math.multiply(a, b) : a * b;
            break;
          case 'divide':
            res = math.divide ? math.divide(a, b) : (b !== 0 ? a / b : 'Error');
            break;
          case 'power':
            res = math.power ? math.power(a, b) : Math.pow(a, b);
            break;
          default:
            res = 0;
        }

        // Display successful calculation result
        resultVal.textContent = res;
        resultVal.style.color = '#3fb950';
      } catch (err) {
        // Display error message (e.g. division by zero)
        resultVal.textContent = `Error: ${err.message}`;
        resultVal.style.color = '#f85149';
      }
    });
  });
});

