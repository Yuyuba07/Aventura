document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const buttons = document.querySelectorAll('.button');
    let casaEscolhida = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const atual = document.querySelector('.passo.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

            // Atualiza a introdução da casa escolhida
            if (this.hasAttribute('data-casa')) {
                casaEscolhida = this.getAttribute('data-casa');
                const casaIntro = document.getElementById('casa-intro');
                casaIntro.textContent = `Você é um(a) jovem bruxo(a) da casa de ${casaEscolhida}! A sua jornada começa em Hogwarts.`;
            }

            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
        });
    });
});
