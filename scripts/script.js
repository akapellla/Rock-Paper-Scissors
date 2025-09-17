class RockPaperScissors {
  constructor() {
    this.arrGame = ['rock', 'paper', 'scissors'];
    this.humanScore = 0;
    this.computerScore = 0;

    this.resultsDiv = document.querySelector("#results");
    this.scoreDiv = document.querySelector("#score");
    this.buttons = document.querySelectorAll("button[data-choice]");

    this.bindEvents();
  }

  getComputerChoice() {
    return this.arrGame[Math.floor(Math.random() * this.arrGame.length)];
  }

  playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      this.addResult("Draw! Both chose " + humanChoice);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      this.humanScore++;
      this.addResult("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      this.computerScore++;
      this.addResult("You lose! " + computerChoice + " beats " + humanChoice);
    }

    this.updateScore();

    if (this.humanScore === 5 || this.computerScore === 5) {
      this.showWinner();
      this.disableButtons();
    }
  }

  addResult(message) {
    const p = document.createElement('p');
    p.textContent = message;
    this.resultsDiv.appendChild(p);
  }

  updateScore() {
    this.scoreDiv.textContent = `Player: ${this.humanScore} | Computer: ${this.computerScore}`;
  }

  showWinner() {
    const p = document.createElement('p');
    p.style.fontWeight = 'bold';

    if (this.humanScore > this.computerScore) {
      p.textContent = "🎉 You win the game!";
    } else {
      p.textContent = "😞 You lost the game.";
    }

    this.resultsDiv.appendChild(p);
  }

  disableButtons() {
    this.buttons.forEach(btn => {
      btn.disabled = true;
    });
  }

  bindEvents() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        const humanChoice = button.getAttribute('data-choice');
        const computerChoice = this.getComputerChoice();
        this.playRound(humanChoice, computerChoice);
      });
    });
  }
}


const game = new RockPaperScissors();
