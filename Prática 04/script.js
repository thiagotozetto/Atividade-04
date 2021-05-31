input();

function input() {
  var numero = prompt("Informe um número:");
  console.log("Número:", numero);

  var array = [];
  for (let index = 0; index < numero; index++) {
    var palavra = prompt("Informe a palavra:");
    array.push(palavra);
  }

  array.reverse(palavra);

  array.forEach((element) => {
    console.log(element);
  });
}
