input();

function input() {
  var nome = prompt("Digite seu nome:");
  console.log("Nome:", nome);
  var peso = prompt("Digite seu peso:");
  console.log("Peso:", peso);
  var altura = prompt("Digite sua altura:");
  console.log("Altura:", altura);

  var imc = calcIMC(peso, altura);
  console.log("IMC:", imc.toFixed(2));

  imc = imc.toFixed(2);

  if (imc < 17) {
    alert(nome + "! Você esta muito abaixo do peso." + "\nDica: Coma mais.");
  } else if (imc >= 17 && imc <= 18.49) {
    alert(nome + "! Você esta abaixo de peso." + "\nDica: Coma mais.");
  } else if (imc >= 18.5 && imc <= 24.99) {
    alert(nome + "! Você esta dentro do peso." + "\nDica: Continue assim.");
  } else if (imc >= 25 && imc <= 29.99) {
    alert(nome + "! Você esta acima do peso." + "\nDica: Coma menos.");
  } else if (imc >= 30 && imc <= 34.49) {
    alert(nome + "! Você esta sofrendo de obesidade I." + "\nDica: Coma menos.");
  } else if (imc >= 35 && imc <= 39.99) {
    alert(nome + "! Você esta sofrendo de obesidade II (severa)." + "\nDica: Coma menos.");
  } else if (imc > 40) {
    alert(nome + "! Você esta sofrendo de obesidade III (mórbida)." + "\nDica: Coma menos.");
  }
}

function calcIMC(peso, altura) {
  return peso / (altura * altura);
}
