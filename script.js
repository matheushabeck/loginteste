document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const telefone = document.getElementById('telefone').value;
    const termosServico = document.getElementById('termosServico').checked;

    // Validações básicas
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    if (!termosServico) {
        alert('Você deve concordar com os Termos de Serviço para prosseguir.');
        return;
    }

    // SIMULAÇÃO: Armazena os dados do usuário no localStorage
    // Em um ambiente real, você enviaria esses dados para um servidor/banco de dados
    const user = {
        nomeCompleto: nomeCompleto,
        email: email,
        senha: senha, // Em um sistema real, a senha seria hash (criptografada)
        telefone: telefone
    };
    localStorage.setItem('userRegistered', JSON.stringify(user));

    alert('Cadastro realizado com sucesso! Você já pode fazer login.');
    this.reset(); // Limpa o formulário após o envio
    // Opcional: Redirecionar para a tela de login após o cadastro
    // window.location.href = 'login.html';
});

// Lógica para mostrar/ocultar senha (já existente)
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