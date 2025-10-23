// Lógica para mostrar/ocultar senha na tela de login
document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const passwordInput = document.getElementById(targetId);
        const icon = this.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const emailDigitado = document.getElementById('loginEmail').value;
    const senhaDigitada = document.getElementById('loginSenha').value;

    // Recupera os dados do usuário cadastrado (simulação com localStorage)
    const storedUser = JSON.parse(localStorage.getItem('userRegistered'));

    if (storedUser && storedUser.email === emailDigitado && storedUser.senha === senhaDigitada) {
        // alert('Login realizado com sucesso!'); // Removemos o alerta
        // REDIRECIONA PARA A PÁGINA DE BEM-VINDO
        window.location.href = 'bemvindo.html';
    } else {
        alert('E-mail ou senha incorretos, ou usuário não cadastrado.');
    }
});