let taskDescription = document.getElementById("taskDescription");
let imageContainer = document.getElementById('imageContainer');
let inputForm = document.getElementById('inputForm');
let textInputField = document.getElementById('textInputField');
let sendAnswerbutton = document.getElementById('sendAnswerButton');
    sendAnswerbutton.addEventListener("click", submitAnswer);

let lion = document.createElement('img');
    lion.src = 'images/lion.jpg';
    lion.style.maxWidth = '15rem';

let manWithHat = document.createElement("img");
    manWithHat.src = 'images/manWithHat.jpg';
    manWithHat.style.maxWidth = '15rem';

window.onload = startGame;

function startGame() {
  taskDescription.innerText = scenes[0].description;
}

function submitAnswer() {
  let userInput = document.getElementById("textInputField").value;
  task(userInput);
  textInputField.value = '';

  addImage(manWithHat, 1);
  removeImage(manWithHat, 1);

  addImage(lion, 2);
  removeImage(lion, 2);
}

function startOver() {
  location.reload();
}

let currentScene = 0;

function task(input) {

    if (input == scenes[currentScene].options[0]) {

      currentScene = scenes[currentScene].nextScene[0];
      taskDescription.innerText = scenes[currentScene].description;
      taskImage = scenes[currentScene]

      } else if (input == scenes[currentScene].options[1]) {

        currentScene = scenes[currentScene].nextScene[1];
        taskDescription.innerText = scenes[currentScene].description;

        } else {
          taskDescription.innerText = 'Ditt svar var ej giltigt. GAME OVER!';
          sendAnswerButton.style.display = 'none';
          textInputField.style.display = 'none';
          let restartGameButton = document.createElement('button');
          restartGameButton.innerText = 'Börja om från början';
          restartGameButton.classList.add('redButton');
          restartGameButton.addEventListener("click", startOver);
          inputForm.append(restartGameButton);
          }
}

function addImage(image, scene){    
    if (taskDescription.innerText == scenes[scene].description) {
      imageContainer.append(image);
      image.style.display = 'block';
    }
}
    
function removeImage(image, scene) {
    if (taskDescription.innerText !== scenes[scene].description) {
      image.style.display = 'none';
  }
}

let scenes = [
  {
    id: 0,
    description: "Du går runt i en ny spännande stad när ett farligt objekt plötsligt kommer flygande emot dig, vill du hoppa eller ducka för att undvika att bli träffad? DUCKA / HOPPA (index: 0)",
    options: ['ducka', 'hoppa'],
    nextScene: [1, 2]
  },
  {
    id: 1,
    description: 'En man som blev imponerad av hur snabbt du duckade undrar om du kan berätta för honom vilken färg hans hatt är. RÖD (index: 1)',
    options: ['röd'],
    nextScene: [3]
  },
  {
    id: 2,
    description: 'Efter att du landat från ditt hopp ser du ett lejon som står och vrålar runt hörnet. Vill du gå fram och klappa? JA / NEJ (index: 2)',
    options: ['ja', 'nej'],
    nextScene: [4, 5]
  },
  {
    id: 3,
    description: 'Mannen med den röda hatten blev otroligt tacksam och gav dig 50 kr i belöning. Vill du spara pengarna eller gå och köpa en öl? SPARA / KÖPA ÖL (index: 3)',
    options: ['spara', 'köpa öl'],
    nextScene: [6, 7]
  },
  {
    id: 4,
    description: 'Du blev tyvärr uppäten av lejonet. Skriva svaret på 5 + 5 för att börja om från början med hedern i behåll. 10 (index: 4)',
    options: ['10'],
    nextScene: [0]
  },
  {
    id: 5,
    description: 'Smart val att inte gå fram och klappa lejonet. Som om det inte vore nog hittar du 50 kr på marken framför dig, inte helt omöjligt att en man med röd hatt kan ha tappat den. Hursomhelst, vill du spara pengarna eller gå och köpa öl? SPARA / KÖPA ÖL (index: 5)',
    options: ['spara', 'köpa öl'],
    nextScene: [6, 7]
  },
  {
    id: 6,
    description: 'Duktigt och ekonomiskt av dig. Vill du gå in på närmsta bank och sätta in pengarna på ditt konto istället? JA / NEJ (index: 6)',
    options: ['ja', 'nej'],
    nextScene: [8, 9]
  },
  {
    id: 7,
    description: 'Mmm vad gott det var med en öl. Du har fattat många bra beslutet under spelets gång! Skriv "ja" för att börja om från början. JA (index: 7)',
    options: ['ja'],
    nextScene: [0]
  },
  {
    id: 8,
    description: 'Pengarna är inne på kontot inom 1-2 bankdagar. Slutet gott allting gott. Skriv "ja" för att börja om från början. JA (index: 8)',
    options: ['ja'],
    nextScene: [0]
  },
  {
    id: 9,
    description: 'Dumt val! En rånare dök upp precis efter att du gått förbi banken och du blev av med dina pengar. Skriv "ja" för att börja om från början. JA (index: 9)',
    options: ['ja'],
    nextScene: [0]
  }
];