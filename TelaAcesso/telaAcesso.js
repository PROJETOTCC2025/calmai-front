function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarioLogado = validarLogin(email, senha);
    if (!usuarioLogado) {
        alert('Usuãrio ou senha inválidos!');
        return;
    }

    if (usuarioLogado.crp) {
        location.replace("..//profissional/profissionalindex.html");
    } else {
        location.replace("..//TelaPaciente/TelaPaciente.html");
    }
}

function validarLogin(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    for (let usuario of usuarios) {
        if (usuario.email == email && usuario.senha == senha) {
            return usuario;
        }
    }

    return false;
}