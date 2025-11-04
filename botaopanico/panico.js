// Alterna os textos de respiração
function controlarRespiracao() {
    const breathText = document.getElementById('breathText');
    const steps = ["Inspire pelo nariz...", "Segure o ar...", "Expire lentamente..."];
    let i = 0;

    setInterval(() => {
        i = (i + 1) % steps.length;
        breathText.textContent = steps[i];
    }, 4000);
}
controlarRespiracao()


function abrirMeeting() {
    window.open('https://meet.google.com/seu-link-aqui', '_blank');
}