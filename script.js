/** Text som beskriver vad uppgiften går ut på */
let taskDescription = document.getElementById("taskDescription");

/** En container där bilder placeras beroende på vilken scen användaren går till */
let imageContainer = document.getElementById('imageContainer');

/** Formulär som innehåller ett textfält för input och en knapp för att skicka input / svara på den aktuella uppgiften */
let inputForm = document.getElementById('inputForm');
    inputForm.addEventListener("submit", submitAnswer);

/** Textfält för användarens input */
let textInputField = document.getElementById('textInputField');

/** Knapp för att skicka input / svara på den aktuella uppgiften */
let sendAnswerButton = document.getElementById('sendAnswerButton');

/** Bild på ett lejon */
let lion = document.createElement('img');
    lion.src = 'images/lion.jpg';
    lion.style.maxWidth = '15rem';

/** Bild på en man med röd hatt */
let manWithHat = document.createElement("img");
    manWithHat.src = 'images/manWithHat.jpg';
    manWithHat.style.maxWidth = '15rem';

/** Bild på öl */
let beer = document.createElement("img");
    beer.src = 'images/beer.jpg';
    beer.style.maxWidth = '15rem';

/** Bild på en bank */
let bank = document.createElement("img");
    bank.src = 'images/bank.jpg';
    bank.style.maxWidth = '15rem';

/** Bild på en rånare */
let robbery = document.createElement("img");
    robbery.src = 'images/robbery.jpg';
    robbery.style.maxWidth = '15rem';

// Anger att vad som ska hända när sidan laddas in
window.onload = startGame;

/** Startar spelet */
function startGame() {
  taskDescription.innerText = scenes[0].description;
}

/**
 * Bestämmer vad som händer när användaren svarat på en fråga
 * @param {Event} event 
 */
function submitAnswer(event) {
  // Förhindrar att webbläsaren laddas om när formuläret skickas
  event.preventDefault();

  /** Den text som användaren skrivit i textfältet */
  let userInput = document.getElementById("textInputField").value.toLowerCase();
  task(userInput);
  textInputField.value = '';

  imageFunction();
}

/**
 * Startar om spelet genom att ladda om sidan
 * @param {Event} event 
 */
function startOver(event) {
  // Förhindrar att webbläsaren laddas om när formuläret skickas (hindrar att restartGameButton visas två gånger innan sidan har laddats om vid klick)
  event.preventDefault();

  // Laddar om sidan
  location.reload();
}

/** Den nuvarande scenen som presenteras på sidan */
let currentScene = 0;

/**
 * Flyttar användaren mellan olika scener beroende på vad användaren svarar
 * @param {InputEvent} input Användarens svar i form av text som anges i textfältet
 */
function task(input) {

    if (input == scenes[currentScene].options[0]) {

      currentScene = scenes[currentScene].nextScene[0];
      taskDescription.innerText = scenes[currentScene].description;

      } else if (input == scenes[currentScene].options[1]) {

        currentScene = scenes[currentScene].nextScene[1];
        taskDescription.innerText = scenes[currentScene].description;
        imageContainer.append(scenes[currentScene].image);

        } else {
          taskDescription.innerText = 'Ditt svar var ej giltigt. GAME OVER!';
          sendAnswerButton.style.display = 'none';
          textInputField.style.display = 'none';
          imageContainer.style.display = 'none';

          /** Knapp som används för att starta om spelet */
          let restartGameButton = document.createElement('button');
          restartGameButton.innerText = 'Börja om från början';
          restartGameButton.classList.add('redButton');
          restartGameButton.addEventListener("click", startOver);
          inputForm.append(restartGameButton);
          }
}

/** Lägger till en bild till den aktuella scenen om det finns ett image-attribut som inte är undefined */
function imageFunction() {
  if (scenes[currentScene].image === undefined) {
    imageContainer.innerHTML = "";
  } else {
    imageContainer.innerHTML = "";
    imageContainer.append(scenes[currentScene].image);
  } 
}

/** 
 * En lista över de scener som användaren kan interagera med
 * @description Beskrivning av den aktuella scenen
 * @options De alternativ som är giltiga inputs av användaren
 * @image Den bild som presenteras på sidan för den aktuella scenen
 * @nextScene De alternativa scener som användaren kan flyttas till beroende på input
*/
let scenes = [

  {
    description: "Du går runt i en ny spännande stad när ett farligt objekt plötsligt kommer flygande emot dig. Vill du hoppa eller ducka för att undvika att bli träffad?",
    options: ['ducka', 'hoppa'],
    image: undefined,
    nextScene: [1, 2]
  },
  {
    description: 'En man som blev imponerad av hur snabbt du duckade undrar om du kan berätta för honom vilken färg hans hatt är.',
    options: ['röd'],
    image: manWithHat,
    nextScene: [3]
  },
  {
    description: 'Efter att du landat från ditt hopp ser du ett lejon som står och vrålar runt hörnet. Vill du gå fram och klappa? (ja / nej) ',
    options: ['ja', 'nej'],
    image: lion,
    nextScene: [4, 5]
  },
  {
    description: 'Mannen med den röda hatten blev otroligt tacksam och gav dig 50 kr i belöning. Vill du spara pengarna eller gå och köpa öl? (spara / köpa öl)',
    options: ['spara', 'köpa öl'],
    image: undefined,
    nextScene: [6, 7]
  },
  {
    description: 'Du blev tyvärr uppäten av lejonet. Skriva svaret på 5 + 5 för att börja om från början med hedern i behåll.',
    options: ['10'],
    image: undefined,
    nextScene: [0]
  },
  {
    description: 'Smart val att inte gå fram och klappa lejonet. Som om det inte vore nog hittar du 50 kr på marken framför dig, inte helt omöjligt att en man med röd hatt kan ha tappat den. Hursomhelst, vill du spara pengarna eller gå och köpa öl? (spara / köpa öl)',
    options: ['spara', 'köpa öl'],
    image: undefined,
    nextScene: [6, 7]
  },
  {
    description: 'Duktigt och ekonomiskt av dig. Vill du gå in på närmsta bank och sätta in pengarna på ditt konto istället? (ja / nej)',
    options: ['ja', 'nej'],
    image: bank,
    nextScene: [8, 9]
  },
  {
    description: 'Mmm vad gott det var med en öl. Du har fattat många bra beslutet under spelets gång! Skriv "jag är smart" för att börja om från början.',
    options: ['jag är smart'],
    image: beer,
    nextScene: [0]
  },
  {
    description: 'Pengarna är inne på kontot inom 1-2 bankdagar. Slutet gott allting gott. Skriv "om jag fortsätter såhär kommer jag snart bli rik" för att börja om från början.',
    options: ['om jag fortsätter såhär kommer jag snart bli rik'],
    image: undefined,
    nextScene: [0]
  },
  {
    description: 'Dumt val! En rånare dök upp precis efter att du gått förbi banken och du blev av med dina pengar. Skriv "skärpning" för att börja om från början.',
    options: ['skärpning'],
    image: robbery,
    nextScene: [0]
  }
];