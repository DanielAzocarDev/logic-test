const fizzBuzz = () => {
  let result = [];
  let container = document.getElementById("container");

  let html = "";

  for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
      console.log(`${number} FizzBuzz`);
      result.push("FizzBuzz");
    } else if (number % 3 == 0) {
      result.push("Fizz");
    } else if (number % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(number);
    }
  }

  result.forEach((item) => {
    const element = `<p>${item}</p>`;
    html += element;
  });

  container.innerHTML = html;
};

fizzBuzz();
