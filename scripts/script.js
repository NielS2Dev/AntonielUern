document.getElementById('butaoEnviar').addEventListener('click', function() {
    const nome = document.getElementById('nomeUsuario').value.trim();

    if (nome === "") {
        alert("⚠️ Por favor, digite seu nome antes de continuar!");
    } else {
        // Armazena o nome para usar na próxima página
        localStorage.setItem("nomeUsuario", nome);

        // Redireciona para outra página (coloca o nome do arquivo certo aqui)
        window.location.href = "../paginas/segunda.html";
    }
});