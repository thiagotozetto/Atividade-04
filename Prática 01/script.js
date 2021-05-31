input();

function input() {
  var nome1 = prompt("Digite o nome da primeira pessoa:");
  console.log("Nome da primeira pessoa:", nome1);
  var peso1 = prompt("Digite o peso da primeira pessoa:");
  console.log("Peso da primeira pessoa:", peso1);
  var altura1 = prompt("Digite a altura da primeira pessoa:");
  console.log("Altura da primeira pessoa:", altura1);

  var nome2 = prompt("Digite o nome da segunda pessoa:");
  console.log("Nome da segunda pessoa:", nome2);
  var peso2 = prompt("Digite o peso da segunda pessoa:");
  console.log("Peso da segunda pessoa:", peso2);
  var altura2 = prompt("Digite a altura da segunda pessoa:");
  console.log("Altura da segunda pessoa:", altura2);

  var imc1 = calcIMC(peso1, altura1);
  console.log("IMC da primeira pessoa:", imc1.toFixed(2));

  var imc2 = calcIMC(peso2, altura2);
  console.log("IMC da segunda pessoa:", imc2.toFixed(2));

  if (imc1 > imc2) {
    imprime(nome1, imc1, nome2, imc2);
  } else if (imc2 > imc1) {
    imprime(nome2, imc2, nome1, imc1);
  } else {
    console.log("O IMC é igual.");
  }
}

function calcIMC(peso, altura) {
  return peso / (altura * altura);
}

function imprime(nomeMaior, imcMaior, nomeMenor, imcMenor) {
  console.log("O IMC de " + nomeMaior + " (" + imcMaior.toFixed(2) + ") é maior que o de " + nomeMenor + " (" + imcMenor.toFixed(2) + ")");
}
