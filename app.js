const wordLists = {

"Autumn 1 Week 2": [
  { word: "made", definition: "put together or built something", examples: ["I ______ a card for my friend's birthday.", "She ______ a paper plane during class."] },
  { word: "take", definition: "to pick up or carry something away", examples: ["Please ______ your shoes off before entering.", "He will ______ the book home to read."] },
  { word: "theme", definition: "the main idea or topic of something", examples: ["The party had a dinosaur ______.", "The book’s ______ was about friendship."] },
  { word: "trade", definition: "to give something and get something in return", examples: ["Let's ______ toys at playtime.", "I will ______ my sandwich for your apple."] },
  { word: "chase", definition: "to run after someone or something", examples: ["The dog began to ______ the ball.", "We love to ______ each other at recess."] },
  { word: "came", definition: "moved toward or arrived at a place", examples: ["Grandma ______ over for dinner.", "He ______ to school early today."] },
  { word: "safe", definition: "free from harm or danger", examples: ["It is ______ to look both ways before crossing.", "She wears a helmet to stay ______ on her bike."] },
  { word: "complete", definition: "finished or done", examples: ["Please ______ your homework before dinner.", "I will ______ the puzzle soon."] },
  { word: "bake", definition: "to cook something using heat, usually in an oven", examples: ["We will ______ cookies together.", "Dad loves to ______ bread on Sundays."] },
  { word: "taste", definition: "to try food or a flavour in your mouth", examples: ["I want to ______ the soup before serving.", "Can I ______ your cupcake?"] },
  { word: "same", definition: "not different; exactly alike", examples: ["We wore the ______ shirts today.", "These pencils are the ______ color."] },
  { word: "these", definition: "words used to talk about things that are close by", examples: ["Are ______ your crayons?", "I like ______ apples best."] },
  { word: "grade", definition: "a mark or level that shows how well you did", examples: ["I got a good ______ on my spelling test.", "She was proud of her math ______."] },
  { word: "shake", definition: "to move quickly back and forth", examples: ["Don’t ______ the bottle!", "I saw the dog ______ after his bath."] },
  { word: "delete", definition: "to remove or erase something", examples: ["Please ______ the extra letters.", "I will ______ the drawing and start over."] },
  { word: "scene", definition: "a part of a play, movie, or story where something happens", examples: ["That ______ made me laugh a lot.", "The next ______ is very exciting!"] },
  { word: "adhere", definition: "to stick to something", examples: ["The stickers will ______ to your folder.", "Please ______ the label to the box."] },
  { word: "severe", definition: "very strong or serious", examples: ["The storm was very ______ last night.", "He had a ______ headache and stayed home."] }
],

"Autumn 1 Week 3": [
  { word: "five", definition: "the number 5", examples: ["I have ______ pencils in my bag.", "She counted to ______ before starting the game."] },
  { word: "time", definition: "what a clock measures", examples: ["What ______ is lunch?", "It’s ______ to go to bed."] },
  { word: "those", definition: "used to point to things that are far away", examples: ["Are ______ your shoes?", "I want ______ crayons over there."] },
  { word: "hole", definition: "an empty space or opening", examples: ["There’s a ______ in my sock.", "The rabbit ran into the ______."] },
  { word: "wide", definition: "having a large distance from side to side", examples: ["The road is very ______.", "Open your eyes ______!"] },
  { word: "ride", definition: "to travel on or in something", examples: ["I want to ______ my bike.", "Let’s ______ the bus to school."] },
  { word: "side", definition: "a surface or edge of something", examples: ["Please stand to the ______.", "There’s a door on the other ______."] },
  { word: "woke", definition: "got up from sleep", examples: ["I ______ up early today.", "She ______ when the alarm rang."] },
  { word: "hide", definition: "to go where no one can see you", examples: ["Let’s ______ behind the tree.", "I will ______ my toy from my brother."] },
  { word: "fine", definition: "good or okay", examples: ["I feel ______ today.", "The cake looks ______ to eat."] },
  { word: "like", definition: "to enjoy or be happy with something", examples: ["I ______ ice cream.", "Do you ______ this song?"] },
  { word: "home", definition: "the place where you live", examples: ["We went ______ after school.", "My ______ has a big garden."] },
  { word: "hope", definition: "to want something good to happen", examples: ["I ______ it doesn’t rain.", "We ______ to win the game."] },
  { word: "bride", definition: "a woman who is getting married", examples: ["The ______ wore a white dress.", "Everyone clapped for the ______."] },
  { word: "shine", definition: "to give off light", examples: ["The stars ______ at night.", "Let the sun ______ on your face."] },
  { word: "ripe", definition: "ready to eat", examples: ["This banana is ______.", "The apple looks red and ______."] },
  { word: "robe", definition: "a loose piece of clothing worn at home", examples: ["She wore a warm ______ after her bath.", "His ______ is blue and fluffy."] },
  { word: "globe", definition: "a round model of Earth", examples: ["We looked at the ______ to find countries.", "The classroom has a big ______."] }
]
};
let currentList = null;
let quizWords = [];
let wrongWords = [];
let round = 1;
let currentIndex = 0;
let mustTypeCorrect = false;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  window.speechSynthesis.speak(utterance);
}

function goHome() {
  document.getElementById('root').innerHTML = `
    <h1>Choose a List</h1>
    ${Object.keys(wordLists).map(
      (list) => `<button onclick="selectList('${list}')">${list}</button>`
    ).join('')}
    <div id="content"></div>
  `;
}

function goBack() {
  selectList(currentList);
}

function selectList(listName) {
  currentList = listName;
  document.getElementById('root').innerHTML = `
    <h1>${listName}</h1>
    <button onclick="startQuiz()">Start Quiz</button>
    <button onclick="viewWords()">View Words</button>
    <button onclick="goHome()">Back to Main Menu</button>
    <div id="content"></div>
  `;
}

function viewWords() {
  const words = wordLists[currentList];
  document.getElementById('content').innerHTML = `
    <h2>${currentList} - Words</h2>
    ${words.map(w => `
      <div class="card">
        <h3>${w.word}</h3>
        <p><strong>${w.definition}</strong></p>
        ${w.examples.map(e => `<div><em>${e}</em></div>`).join('')}
      </div>
    `).join('')}
    <button onclick="goBack()">Back</button>
  `;
}

function startQuiz() {
  quizWords = [...wordLists[currentList]];
  wrongWords = [];
  round = 1;
  currentIndex = 0;
  showQuiz();
}

function showQuiz() {
  if (currentIndex >= quizWords.length) {
    if (wrongWords.length) {
      quizWords = [...wrongWords];
      wrongWords = [];
      round++;
      currentIndex = 0;
      document.getElementById('content').innerHTML = `
        <h2>Round ${round} begins!</h2>
        <button onclick="showQuiz()">Start</button>`;
    } else {
      document.getElementById('content').innerHTML = `
        <h2>🎉 Congratulations! You completed the test!</h2>
        <button onclick="goHome()">Home</button>`;
    }
    return;
  }

  const word = quizWords[currentIndex];
  document.getElementById('content').innerHTML = `
    <h2>${currentList} - Round ${round}</h2>
    <div class="card">
      <p><strong>${word.definition}</strong></p>
      ${word.examples.map(e => `<div><em>${e}</em></div>`).join('')}
      <br>
      <button onclick="speak('${word.word}')">Hear Word</button>
      <br><br>
      <input id="userInput" type="text" placeholder="Type the word" onkeydown="if(event.key==='Enter') checkAnswer()">
      <div id="message" style="margin-top:10px; font-weight:bold;"></div>
      <br>
      <button onclick="checkAnswer()">Check</button>
    </div>
  `;

  setTimeout(() => {
    const input = document.getElementById('userInput');
    if (input) input.focus();
  }, 50);

  speak(word.word);
}

function checkAnswer() {
  const inputField = document.getElementById('userInput');
  // Improved normalization and apostrophe handling
  const input = inputField.value.trim().toLowerCase()
    .normalize("NFKD")
    .replace(/[’‘‛ʻ´`]/g, "'");  // Normalize all types of apostrophes
  const correct = quizWords[currentIndex].word.toLowerCase();
  const messageDiv = document.getElementById('message');

  if (mustTypeCorrect) {
    if (input === correct) {
      mustTypeCorrect = false;
      messageDiv.textContent = "✅ Correct!";
      currentIndex++;
      setTimeout(showQuiz, 1000);
    } else {
      messageDiv.textContent = `❌ Please type the correct spelling: ${quizWords[currentIndex].word}`;
      setTimeout(() => {
        inputField.value = '';
        inputField.focus();
        messageDiv.textContent = '';
      }, 1000);
    }
  } else {
    if (input === correct) {
      messageDiv.textContent = "✅ Correct!";
      currentIndex++;
      setTimeout(showQuiz, 1000);
    } else {
      mustTypeCorrect = true;
      wrongWords.push(quizWords[currentIndex]);
      messageDiv.textContent = `❌ Incorrect. The correct spelling is: ${quizWords[currentIndex].word}`;
      setTimeout(() => {
        inputField.value = '';
        inputField.placeholder = quizWords[currentIndex].word;
        inputField.focus();
      }, 1000);
    }
  }
}

goHome();
