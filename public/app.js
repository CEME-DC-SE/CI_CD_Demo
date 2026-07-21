document.addEventListener('DOMContentLoaded', () => {
  const numA = document.getElementById('numA');
  const numB = document.getElementById('numB');
  const resultVal = document.getElementById('result-value');
  const buttons = document.querySelectorAll('.btn-op');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const op = btn.getAttribute('data-op');
      const a = parseFloat(numA.value);
      const b = parseFloat(numB.value);

      if (isNaN(a) || isNaN(b)) {
        resultVal.textContent = 'Error: Invalid Input';
        resultVal.style.color = '#f85149';
        return;
      }

      try {
        let res;
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

        resultVal.textContent = res;
        resultVal.style.color = '#3fb950';
      } catch (err) {
        resultVal.textContent = `Error: ${err.message}`;
        resultVal.style.color = '#f85149';
      }
    });
  });
});
