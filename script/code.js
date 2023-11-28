function calculate() {
    const expressionInput = document.getElementById('numbers');
    const numbers = numberInput.value.trim();
  
    if (!expression) {
      alert('Enter numbers');
      return;
    }
  
    try {
      const result = evaluateNumbers(numbers);
      displayResult(result);
    } catch (error) {
      alert('Enter correct number');
    }
  }
  
  function numbers(numbers) {
    const numbers = numbers.replace(/[^-()\d/*+.]/g, '');
    return minimax(numbers);
  }
  
  function minimax(numbers) {
    return eval(numbers);
  }
  
  function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Result: ${result}`;
  }
  