
function appendCharacter(character) {
    let currentResult = document.getElementById('display').value;

    if ('+-*/'.includes(character) && '+-*/'.includes(currentResult.charAt(currentResult.length - 1))) {
        document.getElementById('display').value = currentResult.slice(0, -1) + character;
    } else {
        document.getElementById('display').value += character;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result;

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
        throw new Error('Geçersiz ifade');
        }

        let operator = getOperator(expression);
        let operands = expression.split(operator);

        switch (operator) {
            case '+':
                result = parseFloat(operands[0]) + parseFloat(operands[1]);
                break;
            case '-':
                result = parseFloat(operands[0]) - parseFloat(operands[1]);
                break;
            case '*':
                result = parseFloat(operands[0]) * parseFloat(operands[1]);
                break;
            case '/':
                result = parseFloat(operands[0]) / parseFloat(operands[1]);
                break;
            default:
                throw new Error('Geçersiz operatör');
        }

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Hata';
    }
}
console.log("Created By ChatGPT");
function getOperator(expression) {
    let operators = ['+', '-', '*', '/'];
    for (let operator of operators) {
        if (expression.includes(operator)) {
        return operator;
        }
    }
    throw new Error('Operatör bulunamadı');
}
