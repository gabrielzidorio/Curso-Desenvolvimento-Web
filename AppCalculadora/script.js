function calcular(tipo, valor) {
    if (tipo === 'acao') { //VERIFICA SE É UMA OPERADOR OU UM NÚMERO
        if (valor === 'c') {
             //LIMPAR DISPLAY
             document.getElementById('display').value = '';
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/') { //VERIRICA SE UM OPERADOR FOI CLICADO
            document.getElementById('display').value += valor;
        } else if (valor === '=') { //VERIFICA SE O 'IGUAL' FOI CLICADO
            document.getElementById('display').value = eval(document.getElementById('display').value); //SETA O RESULTADO DA OPERAÇÃO ARITMÉTICA NO DISPLAY
        }
        
    } else {
        document.getElementById('display').value += valor;
    }
}