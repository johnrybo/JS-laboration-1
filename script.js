// gameRules
// let gameRules = document.getElementById('gameRules');
// gameRules.innerText = 'Klicka på "Skicka svar" när du fyllt i ditt svar i textfältet. Använd inte Enter-tangenten. Uppdatera sidan för att börja om från början';

// taskTitle och taskDescription
let taskTitle = document.getElementById("taskTitle");
let taskDescription = document.getElementById("taskDescription");

// Anger värdet på taskTitle och taskDescription när sidan öppnas
taskTitle.innerText = "Uppgift 1";
taskDescription.innerText = "Du går runt i en ny spännande stad när ett farligt objekt plötsligt kommer flygande mot dig, vill du hoppa eller ducka för att undvika att bli träffad?";

// Skapar ett användarobjekt
let user = {};

// Bilden på mannen i röd hatt
let manWithHat = document.getElementById("manWithHat");

// Bilden på lejonet
let lion = document.getElementById('lion');

// textInputField
let textInputField = document.getElementById('textInputField');

// Knappar
let answer1Button = document.getElementById("answer1");
answer1Button.addEventListener("click", submitAnswer1);

let answer2_1Button = document.getElementById("answer2_1");
answer2_1Button.addEventListener("click", submitAnswer2_1);

let answer2_2Button = document.getElementById("answer2_2");
answer2_2Button.addEventListener("click", submitAnswer2_2);

let answer3_1Button = document.getElementById("answer3_1");
answer3_1Button.addEventListener("click", submitAnswer3_1);

let answer3_2Button = document.getElementById("answer3_2");
answer3_2Button.addEventListener("click", submitAnswer3_2);

let startOverButton = document.getElementById("startOver");
startOverButton.addEventListener("click", startOver);

// Funktioner för knapparna
function submitAnswer1() {
  let userInput = document.getElementById("textInputField").value;
  task1(userInput);
  textInputField.value = '';
}

function submitAnswer2_1() {
  let userInput = document.getElementById("textInputField").value;
  task2_hoppa(userInput);
  textInputField.value = '';
}

function submitAnswer2_2() {
  let userInput = document.getElementById("textInputField").value;
  task2_ducka(userInput);
  textInputField.value = '';
}

function submitAnswer3_1() {
    let userInput = document.getElementById("textInputField").value;
    task3_1(userInput);
    textInputField.value = '';
  }

  function submitAnswer3_2() {
    let userInput = document.getElementById("textInputField").value;
    task3_2(userInput);
    textInputField.value = '';
  }

function startOver() {
    location.reload();
}

// Funktion som styr vad Enter-knappen gör när ett textfält är markerat

    /*
    textInputField.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
         event.preventDefault();
         document.getElementById('answer1').click();
        }
      });
    */

// Funktioner för olika tasks
function task1(input) {

  if (input == "hoppa") {
    taskTitle.innerText = "Uppgift 2.1";
    taskDescription.innerText =
      "Snyggt hoppat! Du blev väldigt törstig av hoppandet och bestämmer dig för att gå och köpa en öl, men för att komma in på den närmsta baren ber dörrvakten dig att svara rätt på följande kluriga mattetal: vad är 5 + 5?";

    answer1Button.style.display = "none";
    answer2_1Button.style.display = "block";

  } else if (input == "ducka") {
    taskTitle.innerText = "Uppgift 2.2";
    taskDescription.innerText =
      "En man som blev imponerad av hur snabbt du duckade kommer fram till dig och undrar vilken färg hans hatt är. Hjälp honom för att gå vidare";

    manWithHat.style.display = "block";
    answer1Button.style.display = "none";
    answer2_2Button.style.display = "block";

  } else {
    taskDescription.innerText =
      "Du valde varken att hoppa eller att ducka och blev träffad av objektet. GAME OVER!";

    answer1Button.style.display = "none";
    textInputField.style.display = 'none';
    startOverButton.style.display = "block";
  }
}

function task2_hoppa(input) {
    
    if (input == '10') {
        taskTitle.innerText = "Uppgift 3.1";
        taskDescription.innerText =
            "Korrekt! Du har precis hunnit köpa din öl och sätta dig på uteserveringen när du hör ett högt läskigt ljud från andra sidan gatan. Du vänder dig om och ser den här varelsen, men vad är det för djur? ";

            lion.style.display = "block";
            answer2_1Button.style.display = "none";
            answer3_1Button.style.display = "block";

    } else if (input !== '10') {
        taskDescription.innerText =
            "Fel! Rätt svar är: 10. Dörrvakten släppte inte in dig. GAME OVER!";

        answer2_1Button.style.display = "none";
        textInputField.style.display = 'none';
        startOverButton.style.display = "block";
    }
}

function task2_ducka(input) {
    
    if (input == 'röd') {
        taskTitle.innerText = "Uppgift 3.2";
        taskDescription.innerText =
            "Korrekt! Mannen med den röda hatten visade sig vara webbutvecklare men har glömt bort vad Googles webbläsare heter, minns du detta tro?";

            manWithHat.style.display = "none";
            answer2_2Button.style.display = "none";
            answer3_2Button.style.display = "block";

    } else if (input !== 'röd') {
        taskDescription.innerText =
            "Fel! Rätt svar är: röd. En person som paserade på gatan hörde att du svarade fel och skällde ut dig. GAME OVER!";

        manWithHat.style.display = "none";
        answer2_2Button.style.display = "none";
        textInputField.style.display = 'none';
        startOverButton.style.display = "block";
    }
}

function task3_1(input) {

    if (input == 'lejon') {
        taskTitle.innerText = "Bra jobbat!";
        taskDescription.innerText =
            "Korrekt! Du har klarat samtliga uppgifter! Klicka på knappen nedan för att börja om från början";

        lion.style.display = "none";
        answer3_1Button.style.display = "none";
        textInputField.style.display = 'none';
        startOverButton.style.display = "block";

    } else if (input !== 'lejon') {
    taskDescription.innerText =
        "Fel! Rätt svar är: lejon. Du blev tyvärr uppätten. GAME OVER!";

    lion.style.display = "none";
    answer3_1Button.style.display = "none";
    textInputField.style.display = 'none';
    startOverButton.style.display = "block";
}
}

function task3_2(input) {
    
    if (input == 'chrome') {
        taskTitle.innerText = "Bra jobbat!";
        taskDescription.innerText =
            "Korrekt! Du har klarat samtliga uppgifter! Klicka på knappen nedan för att börja om från början";

        answer3_2Button.style.display = "none";
        textInputField.style.display = 'none';
        startOverButton.style.display = "block";

    } else if (input !== 'chrome') {
    taskDescription.innerText =
        "Fel! Rätt svar är: chrome. GAME OVER!";

    answer3_2Button.style.display = "none";
    textInputField.style.display = 'none';
    startOverButton.style.display = "block";
}
}