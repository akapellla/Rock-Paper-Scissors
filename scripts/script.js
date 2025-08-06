 const arrGame = ['rock', 'paper', 'scissors'];
    let humanScore = 0;
    let computerScore = 0;

    const resultsDiv = document.querySelector("#results");
    const scoreDiv = document.querySelector("#score");

    function getComputerChoice() {
      return arrGame[Math.floor(Math.random() * arrGame.length)];
    }

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        addResult("Draw! Both chose " + humanChoice);
      } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
      ) {
        humanScore++;
        addResult("You win! " + humanChoice + " beats " + computerChoice);
      } else {
        computerScore++;
        addResult("You lose! " + computerChoice + " beats " + humanChoice);
      }

      updateScore();

      if (humanScore === 5 || computerScore === 5) {
        showWinner();
        disableButtons();
      }
    }

    function addResult(message) {
      const p = document.createElement('p');
      p.textContent = message;
      resultsDiv.appendChild(p);
    }

    function updateScore() {
      scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }

    function showWinner() {
      const p = document.createElement('p');
      p.style.fontWeight = 'bold';

      if (humanScore > computerScore) {
        p.textContent = "🎉 You win the game!";
      } else {
        p.textContent = "😞 You lost the game.";
      }

      resultsDiv.appendChild(p);
    }

    function disableButtons() {
      document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
      });
    }

    // Добавляем обработчики на кнопки
    const buttons = document.querySelectorAll("button[data-choice]");
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const humanChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
      });
    });