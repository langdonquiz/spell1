const wordLists = {
  "100 High Frequency Words": [
    { word: "the", definition: "used to talk about a specific person, place, or thing", examples: ["I saw ______ cat in the garden.", "She opened ______ door slowly."] },
    { word: "that", definition: "refers to a specific person, place, or thing mentioned earlier", examples: ["______ is my favourite toy.", "I like ______ song we heard yesterday."] },
    { word: "not", definition: "shows the opposite or negative of something", examples: ["I am ______ going to the park today.", "She does ______ like carrots."] },
    { word: "look", definition: "to use your eyes to see something", examples: ["Please ______ at the sky.", "______ at this picture I drew!"] },
    { word: "put", definition: "to place something somewhere", examples: ["Can you ______ the book on the shelf?", "I ______ my shoes under the bed."] },
    { word: "and", definition: "used to connect words or ideas together", examples: ["I have a dog ______ a cat.", "She likes apples ______ bananas."] },
    { word: "with", definition: "together or accompanied by someone or something", examples: ["I went to the park ______ my brother.", "She painted a picture ______ bright colours."] },
    { word: "then", definition: "shows what happens next or afterward", examples: ["We ate lunch, ______ we played outside.", "First, do your homework, ______ you can watch TV."] },
    { word: "don't", definition: "short for 'do not'; means not doing something", examples: ["Please ______ touch the hot stove.", "I ______ like broccoli."] },
    { word: "could", definition: "used to say something is possible or to make polite requests", examples: ["______ you help me with this puzzle?", "She ______ ride a bike when she was five."] },
    { word: "a", definition: "used to refer to a single thing or person", examples: ["I have ______ cat.", "She wants ______ new toy."] },
    { word: "all", definition: "the whole amount or every part of something", examples: ["______ the cookies are gone.", "We played games ______ day."] },
    { word: "were", definition: "past form of 'are'", examples: ["They ______ happy at the party.", "We ______ running in the park."] },
    { word: "come", definition: "to move or travel toward a place", examples: ["Please ______ inside.", "Can you ______ to my house?"] },
    { word: "house", definition: "a building where people live", examples: ["We live in a big ______.", "The ______ is painted blue."] },
    { word: "to", definition: "used to show direction or purpose", examples: ["We are going ______ the store.", "She wants ______ learn piano."] },
    { word: "we", definition: "used to talk about yourself and other people", examples: ["______ are going to the zoo.", "______ will bake a cake together."] },
    { word: "go", definition: "to move from one place to another", examples: ["Let's ______ to the park.", "Can we ______ swimming today?"] },
    { word: "will", definition: "shows future action or intention", examples: ["I ______ visit grandma tomorrow.", "We ______ play soccer later."] },
    { word: "old", definition: "having lived for a long time", examples: ["My grandpa is very ______.", "That book looks very ______."] },
    { word: "said", definition: "to speak words", examples: ["She ______ hello to me.", "He ______ he was happy."] },
    { word: "can", definition: "to be able to do something", examples: ["I ______ ride a bike.", "She ______ sing well."] },
    { word: "little", definition: "small in size or amount", examples: ["The ______ dog is cute.", "I have a ______ bit of candy."] },
    { word: "into", definition: "moving to the inside of something", examples: ["The cat went ______ the room.", "He climbed ______ the car."] },
    { word: "too", definition: "more than what is needed or wanted", examples: ["It is ______ hot today.", "She ate ______ much candy."] },
    { word: "in", definition: "inside or within something", examples: ["The toys are ______ the box.", "She is ______ the room."] },
    { word: "are", definition: "present form of 'be' used with plural subjects", examples: ["We ______ happy today.", "They ______ playing soccer."] },
    { word: "as", definition: "used to compare or indicate function", examples: ["He is as tall ______ his brother.", "Use this ______ a marker."] },
    { word: "back", definition: "to return to a place or position", examples: ["Come ______ to the house.", "She went ______ home."] },
    { word: "by", definition: "close to or next to something", examples: ["The cat is ______ the door.", "Sit ______ me."] },
    { word: "he", definition: "used to refer to a male person", examples: ["______ is my brother.", "I saw ______ at the park."] },
    { word: "up", definition: "towards a higher position", examples: ["Climb ______ the ladder.", "The balloon went ______."] },
    { word: "no", definition: "used to show disagreement or refusal", examples: ["There is ______ milk left.", "______ one is here."] },
    { word: "from", definition: "indicates the starting point of something", examples: ["She walked ______ the park.", "I got a gift ______ my friend."] },
    { word: "day", definition: "a period of 24 hours", examples: ["Today is a sunny ______.", "We had fun all ______."] },
    { word: "I", definition: "refers to oneself", examples: ["______ am happy.", "______ like to read."] },
    { word: "had", definition: "past tense of 'have'", examples: ["I ______ a great time yesterday.", "She ______ a new book."] },
    { word: "mum", definition: "another word for mother", examples: ["My ______ makes delicious food.", "I love my ______."] },
    { word: "children", definition: "young boys and girls", examples: ["The ______ are playing outside.", "She has three ______."] },
    { word: "made", definition: "past tense of 'make'", examples: ["She ______ a cake.", "We ______ a mess in the room."] },
    { word: "of", definition: "belonging to or coming from", examples: ["The color ______ the sky is blue.", "A book ______ stories."] },
    { word: "my", definition: "belonging to me", examples: ["This is ______ favorite toy.", "I lost ______ keys."] },
    { word: "one", definition: "the number 1 or a single thing", examples: ["I have ______ apple.", "Can you give me ______ more?"] },
    { word: "him", definition: "refers to a male person mentioned earlier", examples: ["I saw ______ at school.", "Give the book to ______."] },
    { word: "time", definition: "a period during which something happens", examples: ["It's ______ to go to bed.", "What ______ is it now?"] },
    { word: "it", definition: "used to refer to a thing or an idea", examples: ["______ is raining outside.", "I found ______ under the table."] },
    { word: "her", definition: "refers to a female person mentioned earlier", examples: ["Give the present to ______.", "I helped ______ with homework."] },
    { word: "them", definition: "refers to two or more people or things", examples: ["I saw ______ at the park.", "Help ______ with the project."] },
    { word: "Mr", definition: "a title used before a man's surname", examples: ["______ Smith is our teacher.", "I saw ______ Brown at the store."] },
    { word: "I'm", definition: "short for 'I am'", examples: ["______ happy to see you.", "______ going to the store."] },
    { word: "was", definition: "past tense of 'is' or 'am'", examples: ["She ______ at the party yesterday.", "The dog ______ barking all night."] },
    { word: "what", definition: "used to ask for information", examples: ["______ is your name?", "Do you know ______ time it is?"] },
    { word: "do", definition: "to perform or carry out an action", examples: ["Can you ______ your homework?", "I will ______ it later."] },
    { word: "get", definition: "to obtain or receive something", examples: ["Can you ______ me some water?", "I will ______ a new toy."] },
    { word: "if", definition: "shows a condition or possibility", examples: ["______ it rains, we will stay inside.", "I will help you ______ you need it."] },
    { word: "you", definition: "used to refer to the person being spoken to", examples: ["______ are my best friend.", "Can ______ help me?"] },
    { word: "there", definition: "in or at that place", examples: ["Look over ______.", "The book is over ______."] },
    { word: "me", definition: "refers to oneself", examples: ["Can you help ______?", "Give the book to ______."] },
    { word: "just", definition: "only or simply", examples: ["I ______ want a little more.", "She was ______ here."] },
    { word: "help", definition: "to give assistance or support", examples: ["Can you ______ me with my homework?", "I need someone to ______ with the dishes."] },
    { word: "they", definition: "used to refer to two or more people or things", examples: ["______ are playing soccer.", "______ finished their project."] },
    { word: "out", definition: "away from the inside", examples: ["He went ______ to play.", "Take the trash ______."] },
    { word: "down", definition: "from a higher to a lower position", examples: ["The cat jumped ______ from the shelf.", "Sit ______ and relax."] },
    { word: "now", definition: "at the present moment", examples: ["We need to leave ______.", "It's time to go ______."] },
    { word: "Mrs", definition: "a title for a married woman", examples: ["______ Johnson is our neighbor.", "I spoke to ______ Brown yesterday."] },
    { word: "on", definition: "in a position above something", examples: ["The book is ______ the table.", "Put the vase ______ the shelf."] },
    { word: "this", definition: "used to identify a specific thing or person", examples: ["______ is my favorite song.", "I like ______ book."] },
    { word: "dad", definition: "another word for father", examples: ["My ______ likes to read.", "I went fishing with my ______."] },
    { word: "came", definition: "past tense of 'come'", examples: ["She ______ to visit us.", "The cat ______ inside."] },
    { word: "called", definition: "to shout or make a phone call", examples: ["He ______ for help.", "I ______ my friend yesterday."] },
    { word: "she", definition: "used to refer to a female person", examples: ["______ likes to sing.", "I saw ______ at the park."] },
    { word: "have", definition: "to possess or own something", examples: ["I ______ a new toy.", "They ______ lots of friends."] },
    { word: "big", definition: "large in size", examples: ["The dog is very ______.", "We have a ______ house."] },
    { word: "oh", definition: "an expression of surprise or realization", examples: ["______! I forgot my keys.", "______ no, I made a mistake."] },
    { word: "here", definition: "in this place", examples: ["Come over ______.", "Sit ______ with me."] },
    { word: "is", definition: "present form of 'be' for singular subjects", examples: ["The dog ______ barking.", "She ______ my friend."] },
    { word: "went", definition: "past tense of 'go'", examples: ["She ______ to the store.", "We ______ hiking yesterday."] },
    { word: "when", definition: "used to talk about a time", examples: ["Tell me ______ you will arrive.", "I remember ______ we first met."] },
    { word: "about", definition: "on the subject of or concerning", examples: ["We talked ______ the game.", "Tell me more ______ your trip."] },
    { word: "off", definition: "away or not attached", examples: ["The hat fell ______ his head.", "Turn the lights ______."] },
    { word: "for", definition: "used to indicate purpose or reason", examples: ["This gift is ______ you.", "I am waiting ______ my turn."] },
    { word: "be", definition: "to exist or live", examples: ["It will ______ fun.", "She wants to ______ a doctor."] },
    { word: "it's", definition: "short for 'it is' or 'it has'", examples: ["______ raining outside.", "______ been a long day."] },
    { word: "got", definition: "past tense of 'get'", examples: ["I ______ a new toy.", "She ______ a good grade."] },
    { word: "asked", definition: "past tense of 'ask'", examples: ["He ______ for help.", "She ______ a question."] },
    { word: "at", definition: "used to indicate location or time", examples: ["Meet me ______ the park.", "The event starts ______ 6 PM."] },
    { word: "like", definition: "to enjoy or feel fondness for", examples: ["I ______ ice cream.", "She ______ playing soccer."] },
    { word: "see", definition: "to look at or notice something", examples: ["I can ______ the mountains.", "Did you ______ the movie?"] },
    { word: "their", definition: "belonging to them", examples: ["This is ______ house.", "I met ______ friends."] },
    { word: "saw", definition: "past tense of 'see'", examples: ["I ______ a rainbow yesterday.", "She ______ a movie at the theater."] },
    { word: "his", definition: "belonging to a male person", examples: ["This is ______ bike.", "He lost ______ keys."] },
    { word: "some", definition: "an unspecified amount or number", examples: ["I need ______ help.", "She bought ______ apples."] },
    { word: "looked", definition: "past tense of 'look'", examples: ["He ______ at the sky.", "She ______ happy today."] },
    { word: "people", definition: "human beings in general or considered collectively", examples: ["Many ______ came to the event.", "I saw a lot of ______ at the park."] },
    { word: "make", definition: "to create or produce something", examples: ["Let's ______ a cake.", "I want to ______ a drawing."] },
    { word: "but", definition: "used to introduce a contrasting statement", examples: ["I like pizza, ______ not olives.", "She is smart, ______ sometimes forgetful."] },
    { word: "so", definition: "to a great extent", examples: ["I am ______ tired today.", "She was ______ happy to see me."] },
    { word: "very", definition: "extremely or to a high degree", examples: ["The movie was ______ interesting.", "He is ______ tall."] },
    { word: "your", definition: "belonging to the person being spoken to", examples: ["Is this ______ bag?", "I like ______ idea."] },
    { word: "an", definition: "used before words that start with a vowel sound", examples: ["She ate ______ apple.", "I saw ______ elephant."] }
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
