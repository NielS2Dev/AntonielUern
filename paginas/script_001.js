const CHAVE_NOME = 'nomeUsuario'; 


const elementoSaudacao = document.getElementById('saudacao');


const nomeSalvo = localStorage.getItem(CHAVE_NOME);

// 3. Verifica se o nome existe e atualiza a saudação
if (elementoSaudacao) { 
    if (nomeSalvo) {

        elementoSaudacao.textContent = `Seja bem-vindo, ${nomeSalvo}!`;
    } else {
        elementoSaudacao.textContent = 'Seja bem-vindo(a) de volta!';
    }
}