
function mostrarConteudo(tipo) {
  const conteudo = document.getElementById("conteudo");
  let texto = "";

  switch (tipo) {
    case "respiracao":
      texto = "Pratique respiração profunda por 5 minutos ao acordar e antes de dormir. Inspire pelo nariz, segure por 4 segundos e expire lentamente.";
      break;
    case "yoga":
      texto = "Inclua 10 minutos de yoga no seu dia. Comece com posturas simples como a 'Postura da Criança' e 'Cachorro Olhando para Baixo'.";
      break;
    case "alimentacao":
      texto = "Mantenha uma alimentação equilibrada com frutas, legumes, proteínas e muita água. Evite excesso de cafeína e açúcar.";
      break;
    case "sono":
      texto = "Estabeleça uma rotina de sono. Evite telas antes de dormir e mantenha um ambiente escuro e silencioso.";
      break;
    case "humor":
      texto = "Registre seu humor diariamente. Isso ajuda a identificar padrões e melhorar seu bem-estar emocional.";
      break;
    default:
      texto = "Selecione uma prática para ver as dicas.";
  }

  conteudo.innerHTML = `<p>${texto}</p>`;
}
