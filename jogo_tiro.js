const readlineSync = require('readline-sync');

class Target {
    constructor() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
}

class Game {
    constructor() {
        this.targets = [];
        this.shots = 0;
        this.hits = 0;
        this.misses = 0;
        this.maxShots = 5;
        this.gridSize = 10;
        this.grid = Array(this.gridSize).fill(null).map(() => Array(this.gridSize).fill('-'));
    }

    start() {
        console.log("Bem-vindo ao jogo de tiro!");
        console.log("Tente acertar os alvos. Você tem 5 tiros.");

        for (let i = 0; i < 3; i++) {
            const target = new Target();
            this.targets.push(target);
            const position = target.getPosition();
            this.grid[position.y][position.x] = 'T';
        }

        this.play();
    }

    play() {
        if (this.shots < this.maxShots) {
            this.displayGrid();
            const shotX = parseInt(readlineSync.question("Digite a coordenada X (0-9):"));
            const shotY = parseInt(readlineSync.question("Digite a coordenada Y (0-9):"));

            if (isNaN(shotX) || isNaN(shotY) || shotX < 0 || shotX > 9 || shotY < 0 || shotY > 9) {
                console.log("Coordenadas inválidas. Tente novamente.");
                return this.play();
            }

            this.shots++;

            if (this.checkHit(shotX, shotY)) {
                console.log(`Você acertou um alvo nas coordenadas (${shotX}, ${shotY})!`);
                
                this.grid[shotY][shotX] = 'X'; // Marcando acerto no grid
                this.hits++;
                            } else {
                console.log(`Você errou nas coordenadas (${shotX}, ${shotY}).`);
                this.grid[shotY][shotX] = 'O'; // Marcando erro no grid
                this.misses++;
                

            }

            this.play();
        } else {
            this.endGame();
        }
    }

    checkHit(x, y) {
        for (let i = 0; i < this.targets.length; i++) {
            const position = this.targets[i].getPosition();
            if (position.x === x && position.y === y) {
                this.targets.splice(i, 1); // Remove o alvo acertado
                return true;
            }
        }
        return false;
    }

    displayGrid() {
        console.clear();
        console.log("Grid:");
        for (let row of this.grid) {
            console.log(row.join(' '));
        }
    }

    endGame() {
        console.clear();
        this.displayGrid();
        console.log("Fim de jogo!");
        console.log(`Tiros disparados: ${this.shots}`);
        console.log(`Acertos: ${this.hits}`);
        console.log(`Erros: ${this.misses}`);
        console.log(`Alvos restantes: ${this.targets.length}`);
    }
}

const game = new Game();
game.start();
