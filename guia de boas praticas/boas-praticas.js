
// Accordion com apenas um aberto por vez

const accordions = document.querySelectorAll(".accordion");



accordions.forEach((btn) => {

 btn.addEventListener("click", () => {

   const isActive = btn.getAttribute("aria-expanded") === "true";



   accordions.forEach((otherBtn) => {

     otherBtn.setAttribute("aria-expanded", "false");

     otherBtn.nextElementSibling.style.maxHeight = null;

     otherBtn.nextElementSibling.classList.remove("show");

   });



   if (!isActive) {

     btn.setAttribute("aria-expanded", "true");

     const panel = btn.nextElementSibling;

     panel.classList.add("show");

     panel.style.maxHeight = panel.scrollHeight + "px";

   }

 });

});



// Função para registrar humor

function registrarHumor() {

 const ultimoRegistro = document.getElementById("ultimoRegistro");

 const dataAtual = new Date().toLocaleDateString("pt-BR");

 const emoji = prompt("Como está seu humor hoje? 😊 😐 😢 😠");

 if (emoji) {

   ultimoRegistro.textContent = `Último registro: ${dataAtual} - ${emoji}`;

 }

}
