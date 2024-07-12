
const botao = document.querySelector(".botaoEnviar")

botao.addEventListener('click', () => {
    const usuario = document.querySelector("#nomeUsuario").value
    const senha = document.querySelector("#senhaUsuario").value

    console.log(usuario, senha);
})


