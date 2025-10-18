function switchCRP() {
    const divCRP = document.getElementById('divCRP');
    const isEscondida = divCRP.classList.contains('esconder');

    if (isEscondida) {
        divCRP.classList.remove('esconder');
    } else {
        divCRP.classList.add('esconder');
    }
}