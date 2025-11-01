function switchCRP() {
    const divCRP = document.getElementById('divCRP');
    const isEscondida = divCRP.classList.contains('esconder');

    if (isEscondida) {
        divCRP.classList.remove('esconder');
    } else {
        divCRP.classList.add('esconder');
    }
}

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmeSenha = document.getElementById('confirmeSenha').value;
    const crp = document.getElementById('crp').value;

    if (!validarSenhasIguais(senha, confirmeSenha)) {
        alert('Senhas não estão iguais!');
        return;
    }

    const novoUsuario = {
        nome,
        email,
        senha,
        crp
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    location.replace("..//TelaAcesso/TelaDeAcesso.html");
}

function validarSenhasIguais(senha, confirmeSenha) {
    if (!senha && !confirmeSenha) {
        return false;
    }
    return senha == confirmeSenha;
}