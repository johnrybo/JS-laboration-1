function startGame() {
 
  let taskTitle = document.getElementById("taskTitle");
  let taskDescription = document.getElementById("taskDescription");

  taskTitle.innerText = "Uppgift 1";
  taskDescription.innerText =
    "Ett objekt kommer flygande mot dig, vill du hoppa eller ducka för att undvika att bli träffad?";
}

function submitFirstAnswer() {
  var userInput = document.getElementById("textInputField").value;
  task1(userInput);
  document.getElementById('textInputField').value = '';

}

function submitSecondAnswer() {
  var userInput = document.getElementById("textInputField").value;
  task2_hoppa(userInput);
  document.getElementById('textInputField').value = '';
}

function submitThirdAnswer() {
  var userInput = document.getElementById("textInputField").value;
  task2_ducka(userInput);
  document.getElementById('textInputField').value = '';
}

function task1(input) {
  if (input == "hoppa") {
    taskTitle.innerText = "Uppgift 2.1";
    taskDescription.innerText =
      "Snyggt hoppat! Du blev väldigt törstig av hoppandet och bestämmer dig för att gå och köpa en öl, men för att komma in på den närmsta baren ber dörrvakten dig att svara rätt på följande kluriga mattetal: vad är 5 + 5?";
 
    // Hämtar firstAnswerButton från DOM
    let firstAnswerButton = document.getElementById("firstAnswer");

    // Anger att answerButton inte ska visas
    firstAnswerButton.style.display = "none";

    // Hämtar secondAnswerButton från DOM
    secondAnswerButton = document.getElementById("secondAnswer");

    // Anger att secondAnswerButton ska visas
    secondAnswerButton.style.display = "block";

  } else if (input == "ducka") {
    taskTitle.innerText = "Uppgift 2.2";
    taskDescription.innerText =
      "En man som blev imponerad av hur snabbt du duckade kommer fram till dig och undrar vilken färg hans hatt är. Hjälp honom för att gå vidare";

    let manWithHat = document.getElementById("manWithHat");
    manWithHat.style.display = "block";

    let firstAnswerButton = document.getElementById("firstAnswer");
    firstAnswerButton.style.display = "none";

    thirdAnswerButton = document.getElementById("thirdAnswer");
    thirdAnswerButton.style.display = "block";

  } else {
    taskDescription.innerText =
      "Du valde varken att hoppa eller att ducka och blev träffad av objektet. GAME OVER!";

    let firstAnswerButton = document.getElementById("firstAnswer");
    firstAnswerButton.style.display = "none";

    let inputLabel = document.getElementById('inputLabel');
    inputLabel.style.display = 'none';

    let textInputField = document.getElementById('textInputField');
    textInputField.style.display = 'none';

    startOverButton = document.getElementById("startOver");
    startOverButton.style.display = "block";
  }
}

function task2_hoppa(input) {
    
    if (input == '10') {
        taskTitle.innerText = "Uppgift 3";
        taskDescription.innerText =
            "Korrekt! Här kommer nästa uppgift...";
    } else if (input !== '10') {
        taskDescription.innerText =
            "Fel svar! Rätt svar är: 10. GAME OVER!";

        secondAnswerButton = document.getElementById("secondAnswer");
        secondAnswerButton.style.display = "none";

        let inputLabel = document.getElementById('inputLabel');
        inputLabel.style.display = 'none';

        let textInputField = document.getElementById('textInputField');
        textInputField.style.display = 'none';

        startOverButton = document.getElementById("startOver");
        startOverButton.style.display = "block";
    }
}

function task2_ducka(input) {
    
    if (input == 'röd') {
        taskTitle.innerText = "Uppgift 3";
        taskDescription.innerText =
            "Korrekt! Här kommer nästa uppgift...";

            let manWithHat = document.getElementById("manWithHat");
            manWithHat.style.display = "none";

    } else if (input !== 'röd') {
        taskDescription.innerText =
            "Fel svar! Rätt svar är: röd. GAME OVER!";

            let manWithHat = document.getElementById("manWithHat");
            manWithHat.style.display = "none";

        thirdAnswerButton = document.getElementById("thirdAnswer");
        thirdAnswerButton.style.display = "none";

        let inputLabel = document.getElementById('inputLabel');
        inputLabel.style.display = 'none';

        let textInputField = document.getElementById('textInputField');
        textInputField.style.display = 'none';

        startOverButton = document.getElementById("startOver");
        startOverButton.style.display = "block";
    }
}

startGame();
