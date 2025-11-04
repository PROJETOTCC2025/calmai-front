const perguntas = [

 "Como você está se sentindo hoje?",

 "Você gostaria de conversar sobre algo específico?",

 "Você já fez terapia antes?",

 "Qual é o seu principal objetivo com a terapia?",

 "Você está passando por alguma situação urgente?",

 "Se sim, por favor, digite  'URGENTE' para que eu possa te direcionar a um profissional imediatamente."

];



let etapa = 0;



function iniciarFluxo() {

 mostrarMensagemIA(perguntas[etapa]);

}



function mostrarMensagemIA(texto) {

 const chat = document.getElementById("chat");

 const msg = document.createElement("div");

 msg.className = "mensagem ia";

 msg.innerHTML = `

   <img src="ia.png" alt="IA">

   <div class="texto">${texto}</div>

 `;

 chat.appendChild(msg);

 chat.scrollTop = chat.scrollHeight;

}



function mostrarMensagemUsuario(texto) {

 const chat = document.getElementById("chat");

 const msg = document.createElement("div");

 msg.className = "mensagem usuario";

 msg.innerHTML = `

   <img src="usuario.png" alt="Usuário">

   <div class="texto">${texto}</div>

 `;

 chat.appendChild(msg);

 chat.scrollTop = chat.scrollHeight;

}



function responder() {

 const input = document.getElementById("mensagemInput");

 const texto = input.value.trim();

 if (texto === "") return;



 mostrarMensagemUsuario(texto);

 input.value = "";



 etapa++;

 if (etapa < perguntas.length) {

   setTimeout(() => mostrarMensagemIA(perguntas[etapa]), 800);

 } else {

   setTimeout(() => mostrarMensagemIA("Obrigado por compartilhar, Aline. Estou aqui para te apoiar sempre que precisar."), 800);

 }

}



function acionarUrgencia() {

 alert("🚨 Atendimento imediato acionado! Um profissional será contatado.");

}



document.addEventListener("DOMContentLoaded", iniciarFluxo);

