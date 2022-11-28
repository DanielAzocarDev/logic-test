const fibonacciSequence = () => {
  const input = parseInt(prompt("enter a number: "));

  const display = document.getElementById("display");
  let number1 = 0,
    number2 = 1,
    nextNumber;

  let fiboSequence = [];

  for (let i = 1; i <= input; i++) {
    console.log(number1, `index ${i}`);
    fiboSequence.push(number1);
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
  }

  display.innerHTML = `<p>fibonacci ${input} es igual a: ${
    fiboSequence[fiboSequence.length - 1]
  }</p>`;
};

fibonacciSequence();
