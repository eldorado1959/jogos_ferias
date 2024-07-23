const readlineSync = require('readline-sync');

class TicTacToe {
    constructor() {
        this.board = Array(3).fill(null).map(() => Array(3).fill(' '));
        this.currentPlayer = 'X';
        this.winner = null;
    }

    displayBoard() {
        console.clear();
        console.log("  0 1 2");
        this.board.forEach((row, i) => {
            console.log(i + ' ' + row.join('|'));
            if (i < 2) console.log("  -----");
        });
    }

    getMove() {
        const x = parseInt(readlineSync.question("Digite a coordenada X (0-2):"), 10);
        const y = parseInt(readlineSync.question("Digite a coordenada Y (0-2):"), 10);

        if (isNaN(x) || isNaN(y) || x < 0 || x > 2 || y < 0 || y > 2) {
            console.log("Coordenadas inválidas. Tente novamente.");
            return this.getMove();
        }

        if (this.board[y][x] !== ' ') {
            console.log("Posição já ocupada. Tente novamente.");
            return this.getMove();
        }

        return { x, y };
    }

    makeMove(x, y) {
        this.board[y][x] = this.currentPlayer;
        if (this.checkWin()) {
            this.winner = this.currentPlayer;
        } else if (this.checkDraw()) {
            this.winner = 'Draw';
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    checkWin() {
        const winPatterns = [
            // Horizontais
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Verticais
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonais
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        return winPatterns.some(pattern => 
            pattern.every(([x, y]) => this.board[y][x] === this.currentPlayer)
        );
    }

    checkDraw() {
        return this.board.flat().every(cell => cell !== ' ');
    }

    play() {
        while (!this.winner) {
            this.displayBoard();
            console.log(`Vez do jogador ${this.currentPlayer}`);
            const { x, y } = this.getMove();
            this.makeMove(x, y);
        }

        this.displayBoard();
        if (this.winner === 'Draw') {
            console.log("O jogo terminou em empate!");
        } else {
            console.log(`Jogador ${this.winner} ganhou!`);
        }
    }
}
