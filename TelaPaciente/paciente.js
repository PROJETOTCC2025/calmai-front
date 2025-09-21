function mostrarCalendario() {
  alert("Calendário interativo será exibido aqui futuramente.");
}

function agendarSessao() {
  alert("Redirecionando para agendamento de sessão...");
}

function registrarHumor() {
  alert("Você registrou seu humor com sucesso!");
}

function acionarUrgencia() {
  alert("Atendimento imediato acionado. Um profissional será contatado.");
}
function gerarCalendario() {
  const calendario = document.getElementById("calendario");
  const dataSelecionada = document.getElementById("dataSelecionada");
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth();
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();

  calendario.innerHTML = "";

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const diaElemento = document.createElement("div");
    diaElemento.textContent = dia;

    diaElemento.addEventListener("click", () => {
      document.querySelectorAll(".calendario div").forEach(el => el.classList.remove("selecionado"));
      diaElemento.classList.add("selecionado");
      dataSelecionada.textContent = `Você selecionou: ${dia}/${mes + 1}/${ano}`;
    });

    calendario.appendChild(diaElemento);
  }
}

document.addEventListener("DOMContentLoaded", gerarCalendario);
