// script.js

// Captura os elementos HTML relevantes
const textoCriptografarInput = document.getElementById('texto-criptografar');
const textoDescriptografarInput = document.getElementById('texto-descriptografar');
const textoCriptografadoSpan = document.getElementById('texto-criptografado');
const textoDescriptografadoSpan = document.getElementById('texto-descriptografado');
const resultadoDiv = document.getElementById('resultado');
const mensagemValidacao = document.getElementById('mensagem-validacao');

// Funções de exemplo para criptografar e descriptografar (a implementação real depende da lógica desejada)
function criptografar() {
    let texto = textoCriptografarInput.value;

    // Verifica se o texto contém letras maiúsculas ou caracteres especiais
    if (/[A-Z]/.test(texto) || /[!@#$%^&*(),.?":{}|<>]/.test(texto)) {
        exibirMensagemErro("O texto não pode conter letras maiúsculas ou caracteres especiais.");
        return;
    }

    // Lógica de criptografia aqui
    let textoCriptografado = criptografia(texto); // Exemplo: função criptografia a ser implementada
    textoCriptografadoSpan.textContent = textoCriptografado;

    // Exibir o texto criptografado na área de resultado
    resultadoDiv.textContent = "Texto criptografado: " + textoCriptografado;
    // Ou usando a propriedade style para alterar o estilo
    // resultadoDiv.style.display = 'block';
}

function descriptografar() {
    let texto = textoDescriptografarInput.value;

    // Verifica se o texto contém letras maiúsculas ou caracteres especiais
    if (/[A-Z]/.test(texto) || /[!@#$%^&*(),.?":{}|<>]/.test(texto)) {
        exibirMensagemErro("O texto não pode conter letras maiúsculas ou caracteres especiais.");
        return;
    }

    // Lógica de descriptografia aqui
    let textoDescriptografado = descriptografia(texto); // Exemplo: função descriptografia a ser implementada
    textoDescriptografadoSpan.textContent = textoDescriptografado;

    // Exibir o texto descriptografado na área de resultado
    resultadoDiv.textContent = "Texto descriptografado: " + textoDescriptografado;
    // Ou usando a propriedade style para alterar o estilo
    // resultadoDiv.style.display = 'block';
}

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    mensagemValidacao.textContent = mensagem;
}

// Função para copiar o texto apresentado na área de resultado
function copiarTexto() {
    let textoCopiar = resultadoDiv.textContent;
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            alert('Texto copiado para a área de transferência.');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
            alert('Erro ao copiar texto. Verifique as permissões ou tente novamente.');
        });
}

// Exemplo de funções de criptografia e descriptografia (implementação fictícia)
function criptografia(texto) {
    // Implementação fictícia de criptografia
    return texto.toUpperCase(); // Exemplo simples: transforma texto em maiúsculas
}

function descriptografia(texto) {
    // Implementação fictícia de descriptografia
    return texto.toLowerCase(); // Exemplo simples: transforma texto em minúsculas
}
// script.js (continuação)

// Conectando os botões ao JavaScript
document.getElementById('btn-criptografar').addEventListener('click', criptografar);
document.getElementById('btn-descriptografar').addEventListener('click', descriptografar);
// script.js (continuação)

// Função para copiar o texto da área de resultado
function copiarTextoResultado() {
    let textoCopiar = resultadoDiv.textContent;
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            alert('Texto copiado para a área de transferência.');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
            alert('Erro ao copiar texto. Verifique as permissões ou tente novamente.');
        });
}
