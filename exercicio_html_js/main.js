document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroA = parseFloat(document.getElementById("campoA").value);
    const numeroB = parseFloat(document.getElementById("campoB").value);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        exibirResultado("Preencha ambos os campos com números válidos.", false);
    } else if (numeroB > numeroA) {
        exibirResultado("Formulário válido! Número campo B é maior que o número A.", true);
    } else {
        exibirResultado("Formulário inválido! Número do campo B deve ser maior que o número A.", false);
    }
});

function exibirResultado(mensagem, valido) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensagem;

    if (valido) {
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.style.color = "red";
    }
}