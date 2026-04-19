document.addEventListener('DOMContentLoaded', () => {


    const botao = document.getElementById('botaoSortear');
    const saida = document.getElementById('areaResultado');
    const inputDoce = document.getElementById('doce');
    const inputSalgado = document.getElementById('salgado');
    const participantes = document.getElementById('participantes');

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    botao.addEventListener('click', () => {
        areaResultado.textContent = '';

        const doce = parseInt(inputDoce.value, 10);
        const salgado = parseInt(inputSalgado.value, 10);
        const totalPratos = doce + salgado;

        const pratos = [];
        for (let i = 0; i < qtdeDoces; i++) {
            pratos.push('Doce');
        }
        for (let i = 0; i < qtdeSalgados; i++) {
            pratos.push('Salgado');
        }

        shuffle(pratos);

        const resultadosFinais = [];

        areaResultado.textContent = resultadosFinais.join('\n');

    });

});