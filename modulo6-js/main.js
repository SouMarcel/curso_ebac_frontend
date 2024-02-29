const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('conta');
    const valorDeposito = document.getElementById('velor-deposito');
    const msgSucesso = `Montante de: <b>${valorDeposito.value}</b> em favor de: <b>${nomeBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        // alert(msgSucesso);
        const containerMsgSucess = document.querySelector('.sussesMsg');
        containerMsgSucess.innerHTML = msgSucesso;
        containerMsgSucess.style.display = 'block';

        // Limpar os campos do formulário
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.errorMsg').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup',function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        // nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.errorMsg').style.display = 'block';
        // alert("O nome está errado");
    } else {
        nomeBeneficiario.classList.remove('error');
        // nomeBeneficiario.style.border = '';
        document.querySelector('.errorMsg').style.display = 'none';
    }
})


