document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let btn = document.querySelector("#submit");

    btn.click();
  }
});

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

function fazerPergunta() {
  const elementoResposta = document.querySelector("#resposta");
  const inputPergunta = document.querySelector("#inputPergunta");

  if (inputPergunta.value === "") {
    alert("Digite sua pergunta");
    return;
  }

  elementoResposta.style.opacity = 1;

  const pergunta = `<div> ${inputPergunta.value} </div>`;

  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  setTimeout(() => {
    elementoResposta.style.opacity = 0;
  }, 1000);
}