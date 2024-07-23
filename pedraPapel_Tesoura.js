const readlineSync = require('readline-sync');

class PedraPapelTesoura {
    constructor() {
        this.opcoes = ['pedra', 'papel', 'tesoura'];
        this.resultados = {
            pedra: { tesoura: 'ganha', papel: 'perde' },
            papel: { pedra: 'ganha', tesoura: 'perde' },
            tesoura: { papel: 'ganha', pedra: 'perde' }
        };
    }

    obterEscolhaJogador() {
        console.log("Escolha uma opção: pedra, papel ou tesoura");
        const escolha = readlineSync.question("Digite sua escolha: ").toLowerCase();

        if (!this.opcoes.includes(escolha)) {
            console.log("Escolha inválida. Tente novamente.");
            return this.obterEscolhaJogador();
        }

        return escolha;
    }

    obterEscolhaComputador() {
        const indiceAleatorio = Math.floor(Math.random() * this.opcoes.length);
        return this.opcoes[indiceAleatorio];
    }

    determinarVencedor(escolhaJogador, escolhaComputador) {
        if (escolhaJogador === escolhaComputador) {
            return 'Empate!';
        }

        const resultado = this.resultados[escolhaJogador][escolhaComputador];
        return resultado === 'ganha' ? 'Você ganhou!' : 'Você perdeu!';
    }

    jogar() {
        console.log("Bem-vindo ao jogo Pedra, Papel e Tesoura!");

        const escolhaJogador = this.obterEscolhaJogador();
        const escolhaComputador = this.obterEscolhaComputador();

        console.log(`Sua escolha: ${escolhaJogador}`);
        console.log(`Escolha do computador: ${escolhaComputador}`);

        const resultado = this.determinarVencedor(escolhaJogador, escolhaComputador);
        console.log(resultado);
    }
}

const jogo = new PedraPapelTesoura();
jogo.jogar();
