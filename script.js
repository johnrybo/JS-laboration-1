function getAnswer() {

    let gameContainer = document.getElementById('gameContainer');
    let taskTitle = document.getElementById('taskTitle');
    let taskDescription = document.getElementById('taskDescription');

    var userInput = document.getElementById("answer").value;
    
    if (userInput === 'hoppa') {
        taskDescription.innerText = 'Du valde att hoppa. För att komma vidare måste du...';

        // Funktion som är specifik för alternativet "hoppa"

    } else if (userInput === 'ducka') {
        taskDescription.innerText = 'Du valde att ducka. För att komma vidare måste du...';

        // Funktion som är specifik för alternativet "ducka"

    } else {
        taskDescription.innerText = 'Du valde varken att hoppa eller att ducka. GAME OVER';
     
        // Hämtar "skicka svar-knappen" från DOM
        let answerButton = document.getElementById('submitAnswer');

        // Anger att answerButton inte ska visas
        answerButton.style.display = 'none';

        // Skapar en ny knapp
        let startOverButton = document.createElement('button');

        // Lägger til den nya knappen i gameContainer
        gameContainer.append(startOverButton);

        // Anger vad knappen ska innehålla för text
        startOverButton.innerHTML = 'Börja om från början';

    }

}