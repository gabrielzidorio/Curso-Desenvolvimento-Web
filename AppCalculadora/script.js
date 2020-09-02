function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
             //LIMPAR DISPLAY
             document.getElementById('display').value = '';
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            document.getElementById('display').value += valor;
        } else if (valor === '=') {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        }
        
    } else {
        document.getElementById('display').value += valor;
    }
}