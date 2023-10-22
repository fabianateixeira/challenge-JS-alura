let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado.');
};

function exibirAlerta() {
    alert('Eu amo JS!');
};

function exibirPrompt() {
    let cidade = prompt('Em qual cidade do Brasil você mora?');
    alert (`Estive em ${cidade} e lembrei de você!`);
};

function somandoDoisNumeros() {
    let numero1 = parseInt(prompt('Digite um número:'));
    let numero2 = parseInt(prompt('Digite mais um número:'));
    let soma = numero1 + numero2;
    alert(`A soma dos dois números digitados é = ${soma}.`);

}
