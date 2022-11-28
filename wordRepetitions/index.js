const wordRepetition = () => {
  const sentence = prompt("write a sentece: ");

  const container = document.getElementById("container");
  let splitSentece = sentence
    .toLocaleLowerCase()
    .replace(/[?]/g, "")
    .split(" ");

  let item = {};
  let html = "";

  splitSentece.forEach((word) => {
    if (item[word] === undefined) {
      item[word] = 1;
    } else {
      item[word]++;
    }
    const element = `<p>${word}: ${item[word]}</p>`;
    html += element;
  });
  container.innerHTML = html;
};

wordRepetition();
