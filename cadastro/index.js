// teste
const enviar = document.querySelector('#enviarButton')

class Cadastro {
    constructor(nomeCompleto, nomeUsuario, senha, email) {
        this.nomeCompleto = nomeCompleto
        this.nomeUsuario = nomeUsuario
        this.senha = senha
        this.email = email
        this.usuariosCadastrados = []
    }

    verificaSenha() {
        if (this.senha.length < 8) {
            alert('a senha deve conter no minimo 8 caracteres')
            return false
        } else {
            return true
        }
    }
    verificaNomeCompleto() {
        if (this.nomeCompleto.length < 3) {
            alert('o nome deve conter no minimo 3 caracteres')
            return false
        } else {
            return true
        }
    }
    verificaNomedeUsuario() {
        if (this.nomeUsuario.length >= 6 && this.nomeUsuario.length <= 15) {
            return true
        } else {
            alert('o nome de usuario deve conter entre 6 e 15 caracateres')
            return false
        }
    }
    veficaEmail() {
        if (this.email.split("@").length > 1) {
            return true
        } else {
            alert("o email deve conter '@'");
            return false
        }
    }
    verificaUsuarioExistente() {
        if (this.usuariosCadastrados.includes(this.nomeUsuario)) {
            alert("usuario ja cadastrado")
            return false
        } else {
            return true
        }
    }
    verificacao() {
        if (this.veficaEmail() == true, this.verificaNomedeUsuario() == true, this.verificaSenha() == true, this.verificaUsuarioExistente() == true) {
            this.usuariosCadastrados.push([
                this.nomeUsuario,
                this.senha,
                this.email])
            console.log("tudo joia")
            if (!localStorage.getItem("usuarios")) {
                const usuarios = [[this.nomeUsuario, this.nomeCompleto, this.senha, this.email]];
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                return;
            }
            console.log(this.usuariosCadastrados)
            const valorStorage = JSON.parse(localStorage.getItem("usuarios"));
            console.log(valorStorage)
            const usuarios = [...valorStorage, [this.nomeUsuario, this.nomeCompleto, this.senha, this.email]];
            console.log(usuarios)
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            console.log(JSON.parse(localStorage.getItem("usuarios")))
        }
    }

}


const cadastrosRealizados = []

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    const nomeCompleto = document.querySelector('#nomeCompleto').value
    const nomeUsuario = document.querySelector('#nomeUsuario').value
    const senha = document.querySelector('#senha').value
    const email = document.querySelector('#email').value

    const pessoa1 = new Cadastro(nomeCompleto, nomeUsuario, senha, email)
    pessoa1.verificacao();
    cadastrosRealizados.push(pessoa1)
    console.log(cadastrosRealizados)
})  
