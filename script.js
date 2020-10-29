// gameContainer
let gameContainer = document.getElementById('gameContainer');

// taskDescription
let taskDescription = document.getElementById("taskDescription");

// Image container
let imageContainer = document.getElementById('imageContainer');

// Bilder
let lion = document.createElement('img');
    lion.src = 'images/lion.jpg';
    lion.style.maxWidth = '300px';

let manWithHat = document.createElement("img");
    manWithHat.src = 'images/manWithHat.jpg';
    manWithHat.style.maxWidth = '300px';

// Input container
let inputContainer = document.getElementById('inputContainer');

// textInputField
let textInputField = document.getElementById('textInputField');

// Svarsknapp
let answerbutton = document.getElementById('answerButton');
answerbutton.addEventListener("click", submitAnswer);

// Kör startGame när sidan öppnas
window.onload = startGame;

function startGame() {
  taskDescription.innerText = scenes[0].description;
  // loopScenes();
  
}

function submitAnswer() {
  let userInput = document.getElementById("textInputField").value;
  task(userInput);
  textInputField.value = '';

  addImage(manWithHat, 1);
  removeImage(manWithHat, 1);

  addImage(lion, 2);
  removeImage(lion, 2);
  console.log(userInput);
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
          answerButton.style.display = 'none';
          textInputField.style.display = 'none';
          let restartButton = document.createElement('button');
          restartButton.innerText = 'Börja om från början';
          restartButton.classList.add('redButton');
          restartButton.addEventListener("click", startOver);
          inputContainer.append(restartButton);
          }
}


function addImage(image, scene){    
    if (taskDescription.innerText == scenes[scene].description) {
      imageContainer.append(image);
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
    description: "Du går runt i en ny spännande stad när ett farligt objekt plötsligt kommer flygande mot dig, vill du hoppa eller ducka för att undvika att bli träffad?",
    options: ['ducka', 'hoppa'],
    nextScene: [1, 2]
  },
  {
    id: 1,
    description: 'En man med röd hatt undrar om du vill du springa eller flyga? (id: 1)',
    options: ['springa', 'flyga'],
    nextScene: [2, 2]
  },
  {
    id: 2,
    description: 'Ett lejon undrar om du vill du sjunga eller prata (id: 2)',
    options: ['sjunga', 'prata'],
    nextScene: [3, 4]
  },
  {
    id: 3,
    description: 'Är du snäll? (id: 3)',
    options: ['ja', 'nej'],
    nextScene: [4, 4]
  },
  {
    id: 4,
    description: 'Vill du ha kaffe? (id: 4)',
    options: ['kanske', 'kanske inte'],
    nextScene: [5, 5]
  },
  {
    id: 5,
    description: 'Grattis du har klarat alla frågor! Skriv "ja" för att börja om från början',
    options: ['ja'],
    nextScene: [0]
  }
];