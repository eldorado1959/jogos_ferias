const readlineSync = require('readline-sync');

class Roleta {
    constructor() {
        this.numerosDisponiveis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    }

    exibirNumerosDisponiveis() {
        console.log("Números disponíveis:");
        for (let i = 0; i < this.numerosDisponiveis.length; i += 5) {
            console.log(this.numerosDisponiveis.slice(i, i + 5).join(', '));
             // Exibe uma linha de 5 números disponíveis
             // método join cria e retorna nova string concatenando os elementos do array 
             // retornado por slice 
        }
    }

    obterEscolhasJogador() {
        const escolhas = [];
        for (let i = 0; i < 5; i++) {
            const escolha = parseInt(readlineSync.question(`Escolha 05 numeros de 0 a 30 para apostar ${i + 1}: `));
            // Converte entrada , uma string, em num. inteiro.
            if (isNaN(escolha) || escolha < 0 || escolha > 30) {
                console.log("Escolha inválida. Tente novamente.");
                i--; // Permite ao jogador repetir escolha invalida.
            } else if (escolhas.includes(escolha)) {
                // includes() verifica se um determinado valor esta no array
                console.log("Número já escolhido. Tente um número diferente.");
                i--; // Permite ao jogador escolher num. diferente.
            } else {
                escolhas.push(escolha);
            }
        }
        return escolhas;
    }

    girarRoleta() {
        const indiceAleatorio = Math.floor(Math.random() * this.numerosDisponiveis.length);
        return this.numerosDisponiveis[indiceAleatorio];
        // Math.floor arredonda num. para baixo ate o inteiro mais proximo. 
        // garante que indice gerado seja um num. inteiro entre 0 e 30
    
    }



    jogar() {
        console.log("Bem-vindo ao jogo de Roleta!");

        this.exibirNumerosDisponiveis();

        const escolhasJogador = this.obterEscolhasJogador();
        const numeroRoleta = this.girarRoleta();

        console.log(`Você escolheu os números: ${escolhasJogador.join(', ')}`);
        // join cria e retorna nova string concatenando todos elem. do array (retornado por slice)
        console.log(`A roleta parou no número: ${numeroRoleta}`);

        if (escolhasJogador.includes(numeroRoleta)) {
            console.log("Parabéns! Você ganhou!");
        } else {
            console.log("Que pena! Você perdeu. Tente novamente.");
        }
    }
}

const jogo = new Roleta();
// new e usada para criar nova instancia de uma classe em JavaScript.
// Roleta o nome da classe que esta sendo instanciada.
jogo.jogar();
