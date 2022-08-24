let nome = window.document.getElementById('nome') /*por id*/
let email = document.querySelector('#email') /*por seletor*/
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    if (nome.value.length < 3) {
        let txtNome = window.document.getElementById('txtNome')
        txtNome.innerHTML = '❌'
        } else {
        txtNome.innerHTML = '✔️'
        nomeOk = true
    }

}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = '❌'
    } else {
        txtEmail.innerHTML = '✔️'
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres.'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente.')
    }
}