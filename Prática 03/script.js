input ()

function input(){
  var login = prompt("Login:");
  console.log("Login:", login);
  var senha = prompt("Senha:");
  console.log("Senha:", senha);

  if(login == "aluno" && senha == 123 || login == "professor" && senha == 456){
    alert("Sucesso no login!")
  }else {
    alert("Falha no login!")
  }
}