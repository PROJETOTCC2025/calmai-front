// --- CALENDÁRIO ---
if (document.getElementById('calendar')) {
  const calendar = document.getElementById('calendar');
  const selectedDay = document.getElementById('selected-day');
  const sessoesPorDia = { 7: "14h com Cassia, 16h com Renata" };
  const totalDiasMes = 30;
  const primeiroDiaSemana = new Date(2025, 10, 1).getDay();

  for (let i = 0; i < primeiroDiaSemana; i++) {
    calendar.appendChild(document.createElement('div'));
  }

  for (let i = 1; i <= totalDiasMes; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = i;
    day.addEventListener('click', () => {
      const texto = sessoesPorDia[i]
        ? `Dia ${i}/11 — Sessões: ${sessoesPorDia[i]}`
        : `Dia ${i}/11 — Nenhuma sessão agendada.`;
      selectedDay.textContent = texto;
    });
    calendar.appendChild(day);
  }
}

// --- AÇÕES DE CLIENTES ---
document.querySelectorAll('.btn-aceitar').forEach(btn => {
  btn.onclick = () => alert(`Cliente ${btn.closest('tr').children[0].textContent} aceito com sucesso!`);
});
document.querySelectorAll('.btn-recusar').forEach(btn => {
  btn.onclick = () => alert(`Cliente ${btn.closest('tr').children[0].textContent} recusado.`);
});

// --- FUNÇÕES PACIENTES ---
function abrirPagina(pagina, nome) {
  const url = `${pagina}?paciente=${encodeURIComponent(nome)}`;
  window.open(url, '_blank');
}

function iniciarConsulta(nome) {
  const meetLink = "https://meet.google.com/new";
  if (confirm(`Iniciar consulta com ${nome}?`)) {
    window.open(meetLink, '_blank');
  }
}

function abrirModal(nome) {
  const modal = document.getElementById('modal');
  const titulo = document.getElementById('modal-titulo');
  const corpo = document.getElementById('modal-corpo');
  titulo.textContent = `Enviar mensagem para ${nome}`;
  corpo.innerHTML = `
    <input type="text" id="msgInput" placeholder="Digite sua mensagem..." />
    <button onclick="enviarMensagem('${nome}')">Enviar</button>`;
  modal.style.display = 'flex';
}

function enviarMensagem(nome) {
  const input = document.getElementById('msgInput');
  if (!input.value.trim()) return;
  alert(`Mensagem enviada para ${nome}: "${input.value}"`);
  fecharModal();
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = e => {
  const modal = document.getElementById('modal');
  if (e.target === modal) fecharModal();
};

document.addEventListener("DOMContentLoaded", () => {
  // Banco de dados simulado
  const pacientes = {
    "Cassia Starling": {
      idade: 29,
      ultimaSessao: "15/10/2025",
      proximaSessao: "22/10/2025 - 14h",
      objetivo: "Controle da ansiedade e equilíbrio emocional"
    },
    "Renata Brunner": {
      idade: 35,
      ultimaSessao: "10/10/2025",
      proximaSessao: "17/10/2025 - 16h",
      objetivo: "Melhorar autoconfiança e autoestima"
    },
    "Lucas Pereira": {
      idade: 41,
      ultimaSessao: "12/10/2025",
      proximaSessao: "19/10/2025 - 15h",
      objetivo: "Gerenciamento de estresse e produtividade"
    }
  };

  // Seleciona o modal e elementos internos
  const modal = document.getElementById("modalPaciente");
  const closeModal = document.getElementById("closeModal");
  const nomeEl = document.getElementById("nomePaciente");
  const infoEl = document.getElementById("infoPaciente");

  // Detecta cliques nos botões "Detalhes"
  document.querySelectorAll(".btn-detalhes").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const linha = e.target.closest("tr");
      const nome = linha.querySelector("td").textContent.trim();

      const dados = pacientes[nome];
      nomeEl.textContent = `Paciente: ${nome}`;

      if (dados) {
        infoEl.innerHTML = `
          <strong>Idade:</strong> ${dados.idade} anos<br>
          <strong>Última Sessão:</strong> ${dados.ultimaSessao}<br>
          <strong>Próxima Sessão:</strong> ${dados.proximaSessao}<br>
          <strong>Objetivo Terapêutico:</strong> ${dados.objetivo}
        `;
      } else {
        infoEl.innerHTML = `<em>Dados não encontrados para este paciente.</em>`;
      }

      // Mostra o modal
      modal.style.display = "flex";
    });
  });

  // Fecha o modal
  closeModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
