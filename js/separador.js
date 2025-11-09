document.addEventListener('DOMContentLoaded', () => {


    const botao = document.getElementById('botaoSeparar');
    const entrada = document.getElementById('textoEntrada');
    const saida = document.getElementById('areaResultado');


    botao.addEventListener('click', () => {

        const textoEntrada = entrada.value;

        const itensProcessados = textoEntrada
                                    .split(',')
                                    .map(item => item.trim())
                                    .join('\n');

        saida.textContent = itensProcessados;
    });

});