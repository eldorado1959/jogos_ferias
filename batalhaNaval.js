
const readlineSync = require('readline-sync');

let i= 1;

class BattleshipGame {
    constructor(gridSize = 5, numShips = 3) {
        this.gridSize = gridSize;
        this.numShips = numShips;
        this.grid = Array.from({ length: gridSize }, () => Array(gridSize).fill('-'));
        this.ships = [];
        this.hits = 0;
        this.misses = 0;
        this.maxAttempts = 10;
        this.attempts = 0;

        this.placeShips();
    }

    placeShips() {
        while (this.ships.length < this.numShips) {
            const x = Math.floor(Math.random() * this.gridSize);
            const y = Math.floor(Math.random() * this.gridSize);
            if (!this.ships.some(ship => ship.x === x && ship.y === y)) {
                this.ships.push({ x, y });
            }
        }
    }

    displayGrid() {
        console.clear();
        console.log("  " + Array.from({ length: this.gridSize }, (_, i) => i).join(' '));
        this.grid.forEach((row, i) => {
            console.log(i + ' ' + row.join(' '));
        });
    }

    getInput() {
        const x = parseInt(readlineSync.question("Digite a coordenada X (0-4):"), 10);
        const y = parseInt(readlineSync.question("Digite a coordenada Y (0-4):"), 10);
        if (isNaN(x) || isNaN(y) || x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) {
            console.log("Coordenadas inválidas. Tente novamente.");
            return this.getInput();
        }
        return { x, y };
    }

    makeMove() {
        if (this.attempts >= this.maxAttempts) {
            console.log("Número máximo de tentativas alcançado!");
            return this.endGame();
        }

        const { x, y } = this.getInput();
        this.attempts++;

        if (this.grid[y][x] === 'X' || this.grid[y][x] === 'O') {
            console.log("Você já tentou essas coordenadas. Tente novamente.");
            return this.makeMove();
        }

        if (this.ships.some(ship => ship.x === x && ship.y === y)) {
            console.log("Acertou um navio!");
            this.grid[y][x] = 'X';
            this.hits++;
        } else {
            console.log("Água!");
            this.grid[y][x] = 'O';
            this.misses++;
        }

        this.displayGrid();

        if (this.hits === this.numShips) {
            console.log("Parabéns! Você afundou todos os navios!");
            return this.endGame();
        }

        this.makeMove();
    }

    endGame() {
        console.log("Fim de jogo!");
        console.log(`Acertos: ${this.hits}`);
        console.log(`Erros: ${this.misses}`);
        console.log(`Tentativas: ${this.attempts}`);
    }
}

const game = new BattleshipGame();
game.displayGrid();
game.makeMove();
