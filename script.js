function calculate() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    switch (operacao) {
        case 'add':
            resultado = n1 + n2;
            break;
        case 'sub':
            resultado = n1 - n2;
            break;
        case 'multi':
            resultado = n1 * n2;
            break;
        case 'divi':
            if (n2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}