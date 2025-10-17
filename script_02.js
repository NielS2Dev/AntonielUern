        // Pega o nome salvo na outra página
        const nome = localStorage.getItem("nomeUsuario");

        // Mostra o nome na tela
        if (nome) {
            document.getElementById("nomedigitado").textContent = "Bem-vindo, " + nome + "!";
        } else {
            document.getElementById("nomedigitado").textContent = "Bem-vindo!";
        }