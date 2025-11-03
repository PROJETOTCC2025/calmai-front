// Sessões futuras
const sessoes = [
  { data: '2025-10-13', horario: '14h', profissional: 'Dr. João' },
  { data: '2025-10-20', horario: '14h', profissional: 'Dr. João' },
  { data: '2025-10-27', horario: '10h', profissional: 'Dr. João' }
];

// Redirecionamento para agendamento
function agendarSessao() {
  alert("Redirecionando para agendamento de sessão...");
}

// Gerar Calendário
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

    const dataFormatada = `${ano}-${String(mes + 1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;

    const sessaoDia = sessoes.find(s => s.data === dataFormatada);
    if (sessaoDia) {
      diaElemento.classList.add('sessao');
      diaElemento.title = `Sessão às ${sessaoDia.horario} com ${sessaoDia.profissional}`;
    }

    if (dia === hoje.getDate()) {
      diaElemento.classList.add("hoje");
    }

    diaElemento.addEventListener("click", () => {
      document.querySelectorAll(".calendario div").forEach(el => el.classList.remove("selecionado"));
      diaElemento.classList.add("selecionado");
      dataSelecionada.textContent = sessaoDia 
        ? `Você selecionou: ${dia}/${mes + 1}/${ano} - Sessão às ${sessaoDia.horario} com ${sessaoDia.profissional}`
        : `Você selecionou: ${dia}/${mes + 1}/${ano}`;
    });

    calendario.appendChild(diaElemento);
  }

  // Próximas sessões
  const proximasSessoesUl = document.getElementById('proximas-sessoes');
  proximasSessoesUl.innerHTML = '';
  sessoes.forEach(s => {
    const li = document.createElement('li');
    const [anoS, mesS, diaS] = s.data.split('-');
    li.textContent = `${diaS}/${mesS} - ${s.horario} com ${s.profissional}`;
    proximasSessoesUl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", gerarCalendario);
