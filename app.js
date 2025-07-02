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
  ],

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
],

"Autumn 1 Week 4": [
  { word: "June", definition: "the sixth month of the year", examples: ["My birthday is in ______.", "School ends in ______."] },
  { word: "use", definition: "to do something with something", examples: ["Please ______ a pencil to write.", "Can I ______ your scissors?"] },
  { word: "car", definition: "a vehicle that people drive", examples: ["Dad drove the ______ to work.", "We took the ______ to the shop."] },
  { word: "arm", definition: "the part of your body between your shoulder and hand", examples: ["I hurt my ______ playing.", "She carried the bag on her ______."] },
  { word: "huge", definition: "very big", examples: ["That cake is ______!", "We saw a ______ balloon."] },
  { word: "rule", definition: "something you must follow", examples: ["The school has a ______ about homework.", "It’s a ______ to say 'please' and 'thank you'."] },
  { word: "tube", definition: "a long round object that is hollow inside", examples: ["The toothpaste comes in a ______.", "The hamster ran through a plastic ______."] },
  { word: "start", definition: "to begin something", examples: ["Let’s ______ the game now.", "We will ______ the race at ten."] },
  { word: "garden", definition: "an area where plants or flowers grow", examples: ["The flowers are blooming in the ______.", "We grow tomatoes in our ______."] },
  { word: "mule", definition: "an animal that is a mix between a horse and a donkey", examples: ["The ______ carried heavy bags.", "We saw a ______ on the farm."] },
  { word: "rude", definition: "not polite", examples: ["It’s ______ to interrupt someone.", "He was ______ when he shouted."] },
  { word: "tune", definition: "a musical sound or melody", examples: ["That ______ is stuck in my head.", "She played a lovely ______ on the piano."] },
  { word: "park", definition: "a place outdoors for fun and play", examples: ["We had a picnic at the ______.", "Let’s go to the ______ after lunch."] },
  { word: "cube", definition: "a 3D shape with six equal square sides", examples: ["An ice ______ melted in my drink.", "We used a ______ block in maths."] },
  { word: "cute", definition: "nice to look at in a small or sweet way", examples: ["The puppy is so ______!", "She wore a ______ dress."] },
  { word: "far", definition: "a long distance away", examples: ["The school is not very ______ from here.", "We live ______ from the beach."] },
  { word: "jar", definition: "a container made of glass, usually with a lid", examples: ["The ______ is full of cookies.", "She opened a ______ of jam."] }
],

"Autumn 1 Week 5": [
  { word: "see", definition: "to use your eyes to look at something", examples: ["Can you ______ the bird in the tree?", "I want to ______ that movie."] },
  { word: "meet", definition: "to come together with someone", examples: ["Let’s ______ at the park.", "I will ______ your friend after school."] },
  { word: "beep", definition: "a short, high sound", examples: ["The car made a loud ______.", "I heard a ______ from the microwave."] },
  { word: "deer", definition: "an animal with long legs and antlers", examples: ["A ______ ran across the road.", "We saw a baby ______ in the forest."] },
  { word: "beef", definition: "meat that comes from a cow", examples: ["We had ______ stew for dinner.", "She ate a ______ sandwich."] },
  { word: "tree", definition: "a tall plant with branches and leaves", examples: ["A bird is sitting in the ______.", "The ______ has red apples."] },
  { word: "week", definition: "seven days in a row", examples: ["I go to school five days a ______.", "The party is next ______."] },
  { word: "peek", definition: "to look quickly or secretly", examples: ["Don't ______ at your gift!", "I took a little ______ through the curtain."] },
  { word: "peel", definition: "to take the skin off fruit or vegetables", examples: ["Please ______ the banana.", "She helped ______ the potatoes."] },
  { word: "reef", definition: "a group of rocks or coral under the sea", examples: ["We saw fish swimming near the ______.", "The boat sailed past the coral ______."] },
  { word: "green", definition: "the colour of grass or leaves", examples: ["He wore a ______ shirt.", "The frog was small and ______."] },
  { word: "three", definition: "the number 3", examples: ["I have ______ crayons.", "She ate ______ strawberries."] },
  { word: "seek", definition: "to look for something", examples: ["Let’s ______ the missing puzzle piece.", "We ______ help from a teacher."] },
  { word: "knee", definition: "the joint in the middle of your leg", examples: ["I scraped my ______ when I fell.", "She bent her ______ to tie her shoe."] },
  { word: "bleed", definition: "to lose blood from a cut", examples: ["My finger began to ______.", "He started to ______ after falling."] },
  { word: "greed", definition: "wanting too much of something", examples: ["His ______ made him take all the sweets.", "______ can cause problems."] },
  { word: "sweet", definition: "having a sugary taste or being kind", examples: ["This candy is very ______.", "She gave me a ______ smile."] },
  { word: "speed", definition: "how fast something goes", examples: ["The car moved at high ______.", "He ran with great ______."] }
],

"Autumn 1 Week 7": [
  { word: "say", definition: "to speak words out loud", examples: ["Please ______ thank you.", "What did she ______ to you?"] },
  { word: "theme", definition: "the main idea or topic of something", examples: ["The party had a dinosaur ______.", "The book’s ______ was about friendship."] },
  { word: "those", definition: "used to point to things that are far away", examples: ["Are ______ your shoes?", "I want ______ crayons over there."] },
  { word: "car", definition: "a vehicle that people drive", examples: ["Dad drove the ______ to work.", "We took the ______ to the shop."] },
  { word: "beep", definition: "a short, high sound", examples: ["The car made a loud ______.", "I heard a ______ from the microwave."] },
  { word: "boy", definition: "a young male child", examples: ["The ______ is playing football.", "That ______ is my cousin."] },
  { word: "complete", definition: "finished or done", examples: ["Please ______ your homework before dinner.", "I will ______ the puzzle soon."] },
  { word: "time", definition: "what a clock measures", examples: ["What ______ is lunch?", "It’s ______ to go to bed."] },
  { word: "June", definition: "the sixth month of the year", examples: ["My birthday is in ______.", "School ends in ______."] },
  { word: "peek", definition: "to look quickly or secretly", examples: ["Don't ______ at your gift!", "I took a little ______ through the curtain."] },
  { word: "paid", definition: "gave money for something", examples: ["She ______ for her lunch.", "Dad ______ the bill."] },
  { word: "grade", definition: "a mark or level that shows how well you did", examples: ["I got a good ______ on my spelling test.", "She was proud of her math ______."] },
  { word: "hope", definition: "to want something good to happen", examples: ["I ______ it doesn’t rain.", "We ______ to win the game."] },
  { word: "rule", definition: "something you must follow", examples: ["The school has a ______ about homework.", "It’s a ______ to say 'please' and 'thank you'."] },
  { word: "seek", definition: "to look for something", examples: ["Let’s ______ the missing puzzle piece.", "We ______ help from a teacher."] },
  { word: "instead", definition: "in place of something else", examples: ["I chose juice ______ of milk.", "Let’s walk ______ of taking the bus."] },
  { word: "join", definition: "to come together with others", examples: ["Can I ______ your game?", "She will ______ the team next week."] },
  { word: "deal", definition: "an agreement or arrangement", examples: ["We made a ______ to share the toys.", "That’s a good ______ on the book."] }
],

"Autumn 2 Week 1": [
  { word: "her", definition: "used to talk about a girl or woman", examples: ["Give the book to ______.", "We saw ______ at the shop."] },
  { word: "person", definition: "a human being", examples: ["She is a kind ______.", "Every ______ must line up."] },
  { word: "summer", definition: "the warmest season of the year", examples: ["We go to the beach in ______.", "I love the sunny days of ______."] },
  { word: "faster", definition: "moving more quickly", examples: ["She ran ______ than me.", "This car is ______ than that one."] },
  { word: "rider", definition: "someone who is on a bike, horse, or vehicle", examples: ["The ______ wore a helmet.", "Each ______ had a number."] },
  { word: "term", definition: "a part of the school year", examples: ["We are in the first ______.", "This ______ ends in December."] },
  { word: "better", definition: "more good or improved", examples: ["I feel ______ today.", "That book is even ______ than the last."] },
  { word: "winter", definition: "the coldest season of the year", examples: ["We wear coats in ______.", "It may snow during ______."] },
  { word: "sharper", definition: "having a finer or more pointed edge", examples: ["This knife is ______ than that one.", "The pencil needs to be ______."] },
  { word: "daughter", definition: "a female child of parents", examples: ["Their ______ is five years old.", "I saw her with her ______ at the park."] },
  { word: "verb", definition: "a word that shows action or being", examples: ["'Run' is a ______.", "Can you find the ______ in the sentence?"] },
  { word: "under", definition: "below something", examples: ["The cat is ______ the table.", "Look ______ your bed."] },
  { word: "sister", definition: "a girl who has the same parents as you", examples: ["My ______ is older than me.", "He has one ______."] },
  { word: "driver", definition: "a person who controls a vehicle", examples: ["The bus ______ was friendly.", "The ______ parked the car."] },
  { word: "person", definition: "a human being", examples: ["Each ______ got a prize.", "He is a funny ______."] },
  { word: "answer", definition: "a response to a question", examples: ["Please write your ______ clearly.", "He gave the wrong ______."] },
  { word: "deliver", definition: "to bring something to a place", examples: ["They ______ letters every morning.", "I will ______ the package to your house."] },
  { word: "answer", definition: "a response to a question", examples: ["She raised her hand with the ______.", "That is not the right ______."] }
],

"Autumn 2 Week 2": [
  { word: "girl", definition: "a young female child", examples: ["The ______ is reading a book.", "That ______ is my sister."] },
  { word: "first", definition: "coming before all others", examples: ["He came ______ in the race.", "Finish your ______ task before moving on."] },
  { word: "hurt", definition: "to feel pain", examples: ["I ______ my knee when I fell.", "She said her tooth ______."] },
  { word: "Thursday", definition: "the day between Wednesday and Friday", examples: ["Our trip is on ______.", "I have PE on ______."] },
  { word: "thirst", definition: "a need or want to drink", examples: ["He had a strong ______ after the run.", "Water helps with your ______."] },
  { word: "bird", definition: "an animal with feathers and wings", examples: ["The ______ flew into the tree.", "A small ______ was singing."] },
  { word: "third", definition: "the position after second", examples: ["She finished in ______ place.", "The ______ question was tricky."] },
  { word: "church", definition: "a place where people go to pray or worship", examples: ["They walked to ______ on Sunday.", "The ______ bell rang loudly."] },
  { word: "fir", definition: "a type of tree that stays green all year", examples: ["We decorated the ______ tree.", "The forest has many ______ trees."] },
  { word: "dirt", definition: "soil or earth", examples: ["His shoes were covered in ______.", "The dog dug in the ______."] },
  { word: "shirt", definition: "a piece of clothing worn on the upper body", examples: ["He wore a blue ______.", "I spilled juice on my ______."] },
  { word: "turn", definition: "to move around a point or change direction", examples: ["It’s your ______ to roll the dice.", "Please ______ left at the corner."] },
  { word: "burst", definition: "to break open suddenly", examples: ["The balloon will ______ if you blow too much.", "The bag ______ open."] },
  { word: "stir", definition: "to mix something by moving it around", examples: ["Please ______ the soup.", "She used a spoon to ______ the batter."] },
  { word: "squirm", definition: "to wiggle or twist your body", examples: ["The worm began to ______.", "He started to ______ in his seat."] },
  { word: "birthday", definition: "the day someone was born, celebrated yearly", examples: ["Her ______ party was fun.", "I gave him a ______ card."] },
  { word: "curve", definition: "a smooth bend or turn", examples: ["The road has a sharp ______.", "Draw a gentle ______."] },
  { word: "turf", definition: "grass and the ground it grows on", examples: ["The football field has soft ______.", "Keep off the wet ______."] }
],

"Autumn 2 Week 3": [
  { word: "food", definition: "something you eat", examples: ["We packed some ______ for the trip.", "My favourite ______ is pasta."] },
  { word: "zoo", definition: "a place where animals are kept for people to see", examples: ["We saw a lion at the ______.", "Let’s visit the ______ this weekend."] },
  { word: "took", definition: "carried something away", examples: ["He ______ the book from the shelf.", "She ______ my pencil by mistake."] },
  { word: "good", definition: "nice or right", examples: ["That was a ______ idea.", "He is very ______ at drawing."] },
  { word: "proof", definition: "evidence something is true", examples: ["We need ______ that you were there.", "She showed her ticket as ______."] },
  { word: "pool", definition: "a place to swim", examples: ["We swam in the ______.", "The ______ was very deep."] },
  { word: "soon", definition: "after a short time", examples: ["We will eat ______.", "She’ll be here very ______."] },
  { word: "foot", definition: "the part of the body at the bottom of the leg", examples: ["I stepped on a stone with my ______.", "She hurt her ______ while running."] },
  { word: "mood", definition: "the way someone feels", examples: ["He was in a happy ______.", "What’s your ______ today?"] },
  { word: "gloom", definition: "darkness or sadness", examples: ["The room was full of ______.", "A feeling of ______ filled the air."] },
  { word: "moon", definition: "the round object in the night sky", examples: ["The ______ is bright tonight.", "We saw the full ______."] },
  { word: "book", definition: "pages bound together with writing or pictures", examples: ["I read a ______ about dinosaurs.", "She borrowed a ______ from the library."] },
  { word: "wood", definition: "material from trees", examples: ["The chair is made of ______.", "He chopped some ______ for the fire."] },
  { word: "roof", definition: "the top covering of a building", examples: ["Rain fell on the ______.", "The ______ kept us dry."] },
  { word: "spoon", definition: "a utensil used to eat or serve food", examples: ["Stir the soup with a ______.", "Use a ______ for the ice cream."] },
  { word: "scoop", definition: "a tool or act of picking something up in a round shape", examples: ["I used a ______ for the ice cream.", "Take a big ______ of rice."] },
  { word: "tool", definition: "an object used to do work", examples: ["A hammer is a useful ______.", "He used the right ______ for the job."] },
  { word: "hoot", definition: "a sound made by an owl or car horn", examples: ["The owl gave a loud ______.", "I heard a ______ from the car."] }
],

"Autumn 2 Week 4": [
  { word: "boat", definition: "a vehicle that floats on water", examples: ["We rowed the ______ across the lake.", "The ______ sailed smoothly."] },
  { word: "coach", definition: "a person who trains a team or a bus", examples: ["Our football ______ was kind.", "We travelled by ______ to the city."] },
  { word: "croak", definition: "a rough sound made by a frog", examples: ["I heard a frog ______ at night.", "The frog gave a loud ______."] },
  { word: "foam", definition: "bubbles on top of liquid or soft material", examples: ["There was ______ on the waves.", "The cushion is filled with soft ______."] },
  { word: "toast", definition: "bread browned by heat", examples: ["I had ______ with jam.", "She made buttered ______ for breakfast."] },
  { word: "coat", definition: "a piece of clothing worn to keep warm", examples: ["Wear your ______ outside.", "His ______ is red and thick."] },
  { word: "goal", definition: "something you aim to do or a score in sports", examples: ["He scored a ______!", "My ______ is to read more books."] },
  { word: "goat", definition: "an animal with horns that climbs rocks", examples: ["The ______ jumped on the hill.", "We saw a baby ______ at the farm."] },
  { word: "loan", definition: "money or item given that must be returned", examples: ["He gave me a book on ______.", "The bank gave her a ______."] },
  { word: "roast", definition: "to cook with dry heat", examples: ["We had a Sunday ______.", "Mum will ______ the chicken."] },
  { word: "road", definition: "a path for cars and people to travel on", examples: ["The ______ was busy with traffic.", "Walk on the side of the ______."] },
  { word: "soak", definition: "to get very wet or absorb water", examples: ["Let the sponge ______ up water.", "I got caught in the rain and was ______ed."] },
  { word: "foal", definition: "a baby horse", examples: ["The ______ stayed close to its mother.", "We saw a tiny ______ run in the field."] },
  { word: "moan", definition: "a low sound made when in pain or upset", examples: ["He let out a loud ______.", "I heard a ______ in the dark."] },
  { word: "soap", definition: "a substance used for cleaning", examples: ["Wash your hands with ______.", "The ______ smells like flowers."] },
  { word: "soak", definition: "to get very wet or absorb water", examples: ["She let her feet ______ in the tub.", "The towel will ______ up the spill."] },
  { word: "coast", definition: "land next to the sea", examples: ["They walked along the ______.", "The boat sailed near the ______."] },
  { word: "boa", definition: "a long snake or a scarf made of feathers", examples: ["The zoo has a huge ______.", "She wore a pink feather ______."] }
],

"Autumn 2 Week 5": [
  { word: "toe", definition: "a part of your foot", examples: ["He stubbed his ______ on the table.", "My big ______ hurts."] },
  { word: "out", definition: "not in; outside", examples: ["She went ______ to play.", "Take the rubbish ______."] },
  { word: "around", definition: "in a circle or nearby", examples: ["We walked ______ the park.", "The dog ran ______ the house."] },
  { word: "mouse", definition: "a small animal or a computer tool", examples: ["The ______ ran under the chair.", "Use the ______ to click."] },
  { word: "woe", definition: "deep sadness or trouble", examples: ["He spoke of his ______.", "She was full of ______ after the loss."] },
  { word: "goes", definition: "moves or travels", examples: ["He ______ to school every day.", "She ______ to the shop with Mum."] },
  { word: "about", definition: "on the subject of or approximately", examples: ["The book is ______ dinosaurs.", "We’ll leave in ______ five minutes."] },
  { word: "sound", definition: "something you can hear", examples: ["I heard a loud ______.", "The bell made a clear ______."] },
  { word: "roe", definition: "a type of small deer or fish eggs", examples: ["We saw a ______ in the woods.", "She tasted the salmon ______."] },
  { word: "couch", definition: "a soft seat for more than one person", examples: ["I sat on the ______ to read.", "The dog sleeps on the ______."] },
  { word: "you", definition: "the person being spoken to", examples: ["Can ______ help me?", "Are ______ coming with us?"] },
  { word: "mouth", definition: "the part of your face you eat and talk with", examples: ["Close your ______ when chewing.", "He opened his ______ to speak."] },
  { word: "foe", definition: "an enemy or opponent", examples: ["The hero fought his ______.", "A true friend is better than a false ______."] },
  { word: "hoe", definition: "a tool for gardening", examples: ["He used a ______ to dig.", "The ______ helped clear the weeds."] },
  { word: "pouch", definition: "a small bag or pocket", examples: ["The kangaroo has a ______.", "She put the coins in a ______."] },
  { word: "ounce", definition: "a small unit of weight", examples: ["Add an ______ of butter.", "It weighs just one ______."] },
  { word: "south", definition: "the direction opposite north", examples: ["They travelled ______ for the winter.", "The beach is to the ______."] },
  { word: "house", definition: "a building where people live", examples: ["We built a ______ with blocks.", "Their ______ has a red door."] }
],


"Autumn 2 Week 6": [
  { word: "now", definition: "at this moment", examples: ["We are eating lunch ______.", "Do it right ______."] },
  { word: "down", definition: "moving lower", examples: ["She climbed ______ the stairs.", "Put the book ______."] },
  { word: "blow", definition: "to move air or be moved by air", examples: ["The wind will ______ the leaves.", "Please don't ______ on your food."] },
  { word: "show", definition: "to let someone see something", examples: ["Can you ______ me your drawing?", "I'll ______ you the way."] },
  { word: "true", definition: "real or correct", examples: ["That story is ______.", "It’s not ______ that I was late."] },
  { word: "how", definition: "in what way", examples: ["______ do you do that?", "Tell me ______ you made it."] },
  { word: "town", definition: "a place where people live, smaller than a city", examples: ["We went into ______ to shop.", "This ______ has a library."] },
  { word: "snow", definition: "frozen white flakes that fall in winter", examples: ["We played in the ______.", "The ______ covered the trees."] },
  { word: "blue", definition: "a colour like the sky", examples: ["She wore a ______ hat.", "The sky is bright and ______."] },
  { word: "rescue", definition: "to save someone from danger", examples: ["The firefighters will ______ the cat.", "We saw a ______ mission on the news."] },
  { word: "brown", definition: "a dark colour like chocolate or soil", examples: ["The dog has ______ fur.", "He wore ______ shoes."] },
  { word: "own", definition: "to have something that belongs to you", examples: ["I ______ a bike.", "She has her ______ lunchbox."] },
  { word: "grow", definition: "to get bigger or taller", examples: ["The plants will ______ in spring.", "He wants to ______ tall."] },
  { word: "clue", definition: "something that helps solve a puzzle or mystery", examples: ["The map gave a big ______.", "Can you find the next ______?"] },
  { word: "Tuesday", definition: "the day after Monday", examples: ["We have music on ______.", "She went swimming on ______."] },
  { word: "new", definition: "not old; just made or bought", examples: ["I have a ______ book.", "We moved to a ______ house."] },
  { word: "few", definition: "a small number", examples: ["I have a ______ sweets left.", "There are only a ______ pencils."] },
  { word: "grew", definition: "got bigger or taller in the past", examples: ["The flower ______ quickly.", "He ______ taller over the summer."] }
],

"Autumn 2 Week 7": [
  { word: "person", definition: "a human being", examples: ["She is a kind ______.", "Every ______ must line up."] },
  { word: "first", definition: "coming before all others", examples: ["He came ______ in the race.", "Finish your ______ task before moving on."] },
  { word: "zoo", definition: "a place where animals are kept for people to see", examples: ["We saw a lion at the ______.", "Let’s visit the ______ this weekend."] },
  { word: "croak", definition: "a rough sound made by a frog", examples: ["I heard a frog ______ at night.", "The frog gave a loud ______."] },
  { word: "mouse", definition: "a small animal or a computer tool", examples: ["The ______ ran under the chair.", "Use the ______ to click."] },
  { word: "summer", definition: "the warmest season of the year", examples: ["We go to the beach in ______.", "I love the sunny days of ______."] },
  { word: "third", definition: "the position after second", examples: ["She finished in ______ place.", "The ______ question was tricky."] },
  { word: "soon", definition: "after a short time", examples: ["We will eat ______.", "She’ll be here very ______."] },
  { word: "goat", definition: "an animal with horns that climbs rocks", examples: ["The ______ jumped on the hill.", "We saw a baby ______ at the farm."] },
  { word: "roe", definition: "a type of small deer or fish eggs", examples: ["We saw a ______ in the woods.", "She tasted the salmon ______."] },
  { word: "under", definition: "below something", examples: ["The cat is ______ the table.", "Look ______ your bed."] },
  { word: "turn", definition: "to move around a point or change direction", examples: ["It’s your ______ to roll the dice.", "Please ______ left at the corner."] },
  { word: "book", definition: "pages bound together with writing or pictures", examples: ["I read a ______ about dinosaurs.", "She borrowed a ______ from the library."] },
  { word: "foal", definition: "a baby horse", examples: ["The ______ stayed close to its mother.", "We saw a tiny ______ run in the field."] },
  { word: "hoe", definition: "a tool for gardening", examples: ["He used a ______ to dig.", "The ______ helped clear the weeds."] },
  { word: "show", definition: "to let someone see something", examples: ["Can you ______ me your drawing?", "I'll ______ you the way."] },
  { word: "blue", definition: "a colour like the sky", examples: ["She wore a ______ hat.", "The sky is bright and ______."] },
  { word: "clue", definition: "something that helps solve a puzzle or mystery", examples: ["The map gave a big ______.", "Can you find the next ______?"] }
],

"Spring 1 Week 1": [
  { word: "lie", definition: "to not tell the truth", examples: ["It’s wrong to ______.", "Don’t ______ to your friends."] },
  { word: "cried", definition: "shed tears", examples: ["She ______ when she fell.", "He ______ during the sad movie."] },
  { word: "chief", definition: "a leader or boss", examples: ["The fire ______ gave orders.", "He is the ______ of the tribe."] },
  { word: "fried", definition: "cooked in hot oil", examples: ["I had ______ eggs for breakfast.", "They served ______ fish and chips."] },
  { word: "piece", definition: "a part of something", examples: ["I ate a ______ of cake.", "Can I have a ______ of paper?"] },
  { word: "tie", definition: "to fasten with a string or cord", examples: ["Please ______ your shoes.", "Let’s ______ the balloons."] },
  { word: "tried", definition: "made an attempt", examples: ["She ______ to open the jar.", "I ______ my best."] },
  { word: "field", definition: "an open area of land", examples: ["We ran across the ______.", "Cows live in the ______."] },
  { word: "lied", definition: "did not tell the truth", examples: ["He ______ about his homework.", "She ______ to avoid trouble."] },
  { word: "niece", definition: "a daughter of your brother or sister", examples: ["My ______ is visiting today.", "She played with her little ______."] },
  { word: "pie", definition: "a baked dish with a filling", examples: ["We had apple ______ for dessert.", "I baked a cherry ______."] },
  { word: "dried", definition: "lost moisture or water", examples: ["The clothes ______ in the sun.", "The paint has ______."] },
  { word: "thief", definition: "someone who steals", examples: ["The ______ took my bag.", "A ______ broke into the shop."] },
  { word: "vie", definition: "to compete or fight for something", examples: ["They ______ for the trophy.", "Teams ______ to win the prize."] },
  { word: "relief", definition: "a feeling of comfort after worry", examples: ["I felt ______ when the test ended.", "What a ______ to hear that!"] },
  { word: "mischief", definition: "playful trouble or behavior", examples: ["The puppy caused ______.", "He got into ______ at school."] },
  { word: "brief", definition: "short in time or length", examples: ["She gave a ______ talk.", "Let’s keep this ______."] },
  { word: "die", definition: "to stop living", examples: ["Flowers ______ without water.", "He watched the battery ______."] }
],

"Spring 1 Week 2": [
  { word: "high", definition: "far above the ground", examples: ["The kite flew ______.", "That shelf is too ______."] },
  { word: "bright", definition: "giving lots of light", examples: ["The sun is very ______.", "She wore a ______ dress."] },
  { word: "nigh", definition: "near in time or place (old-fashioned)", examples: ["The end is ______.", "Night is drawing ______."] },
  { word: "knight", definition: "a soldier from the olden days", examples: ["The ______ wore shiny armor.", "The ______ rode a horse."] },
  { word: "tight", definition: "held firmly or closely", examples: ["Hold the rope ______.", "My shoes feel ______."] },
  { word: "night", definition: "the time when it is dark", examples: ["We sleep at ______.", "The stars shine at ______."] },
  { word: "right", definition: "correct or the opposite of left", examples: ["That answer is ______.", "Turn to the ______."] },
  { word: "sigh", definition: "to let out a long breath", examples: ["She gave a big ______.", "He let out a ______ of relief."] },
  { word: "fright", definition: "a sudden scare", examples: ["He gave me a ______.", "She jumped in ______."] },
  { word: "nightmare", definition: "a scary dream", examples: ["I had a ______ last night.", "The movie gave me a ______."] },
  { word: "light", definition: "brightness or not heavy", examples: ["Turn on the ______.", "The bag is very ______."] },
  { word: "might", definition: "could happen or strength", examples: ["It ______ rain today.", "He showed his ______ in the game."] },
  { word: "thigh", definition: "the upper part of the leg", examples: ["My ______ is sore from running.", "She hurt her ______."] },
  { word: "delight", definition: "great joy or pleasure", examples: ["He opened the gift with ______.", "What a ______ to see you!"] },
  { word: "height", definition: "how tall something is", examples: ["The ______ of the wall surprised me.", "What’s your ______?"] },
  { word: "flight", definition: "a journey by air", examples: ["Our ______ leaves at 10.", "The bird took ______."] },
  { word: "fight", definition: "to argue or struggle", examples: ["They had a ______.", "Don’t ______ with your friends."] },
  { word: "plight", definition: "a bad or difficult situation", examples: ["They were in a sad ______.", "We heard about their ______."] }
],

"Spring 1 Week 3": [
  { word: "for", definition: "used to show purpose or who gets something", examples: ["This gift is ______ you.", "We made snacks ______ the trip."] },
  { word: "horse", definition: "a large animal you can ride", examples: ["She rode a ______.", "The ______ galloped fast."] },
  { word: "score", definition: "the number of points in a game", examples: ["What was the final ______?", "He got a high ______."] },
  { word: "shore", definition: "the land next to water", examples: ["We walked along the ______.", "Shells were on the ______."] },
  { word: "core", definition: "the center of something", examples: ["Throw away the apple ______.", "The Earth's ______ is hot."] },
  { word: "born", definition: "came into the world", examples: ["She was ______ in May.", "The baby was just ______."] },
  { word: "more", definition: "a larger amount", examples: ["I want ______ juice.", "Add some ______ paint."] },
  { word: "wore", definition: "had clothing on", examples: ["He ______ a coat.", "She ______ her boots."] },
  { word: "bore", definition: "made someone feel uninterested", examples: ["His long speech ______ me.", "That movie ______ the children."] },
  { word: "gore", definition: "blood from a wound or a violent injury", examples: ["The movie showed too much ______.", "The bull's horns caused ______."] },
  { word: "sore", definition: "painful or hurting", examples: ["My legs are ______.", "She has a ______ throat."] },
  { word: "store", definition: "a place to buy things", examples: ["We went to the ______.", "The ______ sells toys."] },
  { word: "snore", definition: "a sound made when sleeping", examples: ["Dad began to ______.", "He made a loud ______."] },
  { word: "chore", definition: "a small job or task", examples: ["My ______ is to wash dishes.", "She did her ______ before playing."] },
  { word: "forest", definition: "a large area of trees", examples: ["The deer ran through the ______.", "We hiked in the ______."] },
  { word: "short", definition: "not tall or not long", examples: ["That was a ______ story.", "She has ______ hair."] },
  { word: "morning", definition: "the start of the day", examples: ["We eat breakfast in the ______.", "The sun rises in the ______."] },
  { word: "before", definition: "earlier than something else", examples: ["Brush your teeth ______ bed.", "Finish your work ______ lunch."] }
],

"Spring 1 Week 4": [
  { word: "saw", definition: "past tense of see", examples: ["I ______ a bird in the tree.", "She ______ her friend at lunch."] },
  { word: "crawl", definition: "to move slowly on hands and knees", examples: ["The baby began to ______.", "Spiders often ______ on the wall."] },
  { word: "dinosaur", definition: "a large extinct reptile", examples: ["The ______ had sharp teeth.", "We saw a ______ model at the museum."] },
  { word: "claw", definition: "a sharp nail on an animal", examples: ["The cat scratched with its ______.", "Birds grip branches with a ______."] },
  { word: "dawn", definition: "the time when the sun rises", examples: ["We woke up at ______.", "The sky turned pink at ______."] },
  { word: "draw", definition: "to make a picture with a pen or pencil", examples: ["Can you ______ a house?", "She likes to ______ animals."] },
  { word: "author", definition: "a person who writes books", examples: ["The ______ signed my book.", "Who is your favourite ______?"] },
  { word: "astronaut", definition: "a person who travels in space", examples: ["The ______ walked on the moon.", "She wants to be an ______."] },
  { word: "straw", definition: "a tube for drinking or dry stalks of grain", examples: ["I drank milk with a ______.", "The barn was full of ______."] },
  { word: "fawn", definition: "a young deer", examples: ["The ______ hid in the grass.", "We saw a baby ______ with its mother."] },
  { word: "yawn", definition: "to open your mouth wide when tired", examples: ["She let out a big ______.", "I saw him ______ during the movie."] },
  { word: "August", definition: "the eighth month of the year", examples: ["School starts in ______.", "Her birthday is in ______."] },
  { word: "raw", definition: "not cooked", examples: ["The meat is still ______.", "We ate ______ vegetables."] },
  { word: "hawk", definition: "a bird that hunts other animals", examples: ["The ______ flew high.", "A ______ circled above the trees."] },
  { word: "lawn", definition: "an area of grass near a house", examples: ["He mowed the ______.", "We played on the front ______."] },
  { word: "shawl", definition: "a piece of fabric worn over the shoulders", examples: ["She wore a warm ______.", "The old lady wrapped her ______ tightly."] },
  { word: "sauce", definition: "a liquid added to food for flavour", examples: ["We had pasta with tomato ______.", "Add some soy ______ to the rice."] },
  { word: "haunt", definition: "to stay in a place as a ghost", examples: ["People say the house is ______ed.", "Ghosts ______ the castle in the story."] }
],

"Spring 1 Week 5": [
  { word: "air", definition: "the invisible gas we breathe", examples: ["The fresh ______ felt nice.", "Open the window for some ______."] },
  { word: "hair", definition: "what grows on your head", examples: ["She brushed her ______.", "His ______ is very curly."] },
  { word: "dear", definition: "loved or valued", examples: ["She is a very ______ friend.", "My ______ dog passed away."] },
  { word: "near", definition: "close to", examples: ["We live ______ the park.", "The bus stop is ______ our house."] },
  { word: "lair", definition: "a resting place of a wild animal", examples: ["The fox returned to its ______.", "The bear was hiding in its ______."] },
  { word: "fair", definition: "just or light in colour or a fun event", examples: ["That’s not ______!", "We went to the school ______."] },
  { word: "chair", definition: "something you sit on", examples: ["He sat on the ______.", "Pull up a ______ and join us."] },
  { word: "hear", definition: "to notice sound with your ears", examples: ["Can you ______ that noise?", "I can’t ______ you!"] },
  { word: "year", definition: "12 months", examples: ["We go on holiday once a ______.", "She is 7 ______s old."] },
  { word: "stair", definition: "a step in a staircase", examples: ["Be careful on the last ______.", "He fell down the ______."] },
  { word: "pair", definition: "two things that go together", examples: ["I bought a ______ of shoes.", "They danced as a ______."] },
  { word: "ear", definition: "the part of the body for hearing", examples: ["She has a small ______.", "My ______ hurts."] },
  { word: "beard", definition: "hair that grows on a man’s face", examples: ["He has a long ______.", "Santa has a white ______."] },
  { word: "flair", definition: "a special talent or style", examples: ["She has a ______ for music.", "He decorated with great ______."] },
  { word: "bear", definition: "a large wild animal", examples: ["A ______ lives in the forest.", "We saw a ______ at the zoo."] },
  { word: "pear", definition: "a sweet fruit with a round bottom", examples: ["I ate a juicy ______.", "Would you like a ______ or an apple?"] },
  { word: "swear", definition: "to promise or say something bad", examples: ["I ______ I didn't do it.", "Don't ______ at people."] },
  { word: "tear", definition: "a drop from the eye or to rip", examples: ["A ______ rolled down her cheek.", "Try not to ______ the paper."] }
],

"Spring 1 Week 6": [
  { word: "hare", definition: "an animal like a rabbit", examples: ["The ______ ran fast.", "We saw a ______ in the field."] },
  { word: "are", definition: "used to describe or ask about more than one thing", examples: ["You ______ my best friend.", "Where ______ the pencils?"] },
  { word: "care", definition: "to look after or feel concern", examples: ["Please ______ for the puppy.", "I ______ about my family."] },
  { word: "stare", definition: "to look at something for a long time", examples: ["Don't ______ at people.", "She gave a long ______."] },
  { word: "blare", definition: "a loud, harsh sound", examples: ["The horn began to ______.", "Music began to ______ from the speakers."] },
  { word: "rare", definition: "not common", examples: ["That’s a ______ bird.", "It's ______ to see snow here."] },
  { word: "bare", definition: "not covered", examples: ["He walked with ______ feet.", "The tree was ______ of leaves."] },
  { word: "share", definition: "to give part to others", examples: ["Let's ______ the toys.", "She will ______ her snack."] },
  { word: "mare", definition: "a female horse", examples: ["The ______ galloped through the field.", "We saw a ______ with her foal."] },
  { word: "glare", definition: "a bright light or an angry look", examples: ["The sun gave off a strong ______.", "He gave me a sharp ______."] },
  { word: "flare", definition: "a sudden burst of light or fire", examples: ["The signal ______ lit up the sky.", "Watch the fire ______ up."] },
  { word: "dare", definition: "to have courage or challenge someone", examples: ["I ______ you to jump!", "She didn't ______ to try."] },
  { word: "scared", definition: "feeling afraid", examples: ["I was ______ during the storm.", "He looked ______ of the dark."] },
  { word: "ware", definition: "items for sale or use (often in shops)", examples: ["The shop sold kitchen ______.", "We looked at the wooden ______."] },
  { word: "snare", definition: "a trap for catching animals", examples: ["The rabbit was caught in a ______.", "He set a ______ in the woods."] },
  { word: "shared", definition: "gave part to others", examples: ["She ______ her lunch with me.", "We ______ the same toy."] },
  { word: "blare", definition: "a loud, harsh sound", examples: ["Sirens began to ______ in the street.", "We heard a ______ from the speakers."] },
  { word: "scare", definition: "to make someone feel afraid", examples: ["Don’t ______ your sister!", "The loud noise gave me a ______."] }
],

"Spring 1 Week 7": [
  { word: "cried", definition: "shed tears", examples: ["She ______ when she fell.", "He ______ during the sad movie."] },
  { word: "bright", definition: "giving lots of light", examples: ["The sun is very ______.", "She wore a ______ dress."] },
  { word: "score", definition: "the number of points in a game", examples: ["What was the final ______?", "He got a high ______."] },
  { word: "crawl", definition: "to move slowly on hands and knees", examples: ["The baby began to ______.", "Spiders often ______ on the wall."] },
  { word: "dear", definition: "loved or valued", examples: ["She is a very ______ friend.", "My ______ dog passed away."] },
  { word: "tie", definition: "to fasten with a string or cord", examples: ["Please ______ your shoes.", "Let’s ______ the balloons."] },
  { word: "sigh", definition: "to let out a long breath", examples: ["She gave a big ______.", "He let out a ______ of relief."] },
  { word: "before", definition: "earlier than something else", examples: ["Brush your teeth ______ bed.", "Finish your work ______ lunch."] },
  { word: "author", definition: "a person who writes books", examples: ["The ______ signed my book.", "Who is your favourite ______?"] },
  { word: "swear", definition: "to promise or say something bad", examples: ["I ______ I didn't do it.", "Don't ______ at people."] },
  { word: "brief", definition: "short in time or length", examples: ["She gave a ______ talk.", "Let’s keep this ______."] },
  { word: "might", definition: "could happen or strength", examples: ["It ______ rain today.", "He showed his ______ in the game."] },
  { word: "for", definition: "used to show purpose or who gets something", examples: ["This gift is ______ you.", "We made snacks ______ the trip."] },
  { word: "August", definition: "the eighth month of the year", examples: ["School starts in ______.", "Her birthday is in ______."] },
  { word: "beard", definition: "hair that grows on a man’s face", examples: ["He has a long ______.", "Santa has a white ______."] },
  { word: "spare", definition: "extra or not needed", examples: ["Do you have a ______ pencil?", "We keep a ______ key."] },
  { word: "cared", definition: "looked after or had concern for", examples: ["She ______ for her grandma.", "He ______ about his friend."] },
  { word: "shared", definition: "gave part to others", examples: ["She ______ her lunch with me.", "We ______ the same toy."] }
],

"Spring 2 Week 1": [
  { word: "very", definition: "to a great degree", examples: ["She is ______ happy today.", "That test was ______ hard."] },
  { word: "party", definition: "a fun event with people", examples: ["We had a birthday ______.", "The ______ was lots of fun."] },
  { word: "my", definition: "belonging to me", examples: ["This is ______ toy.", "I love ______ dog."] },
  { word: "fry", definition: "to cook in hot oil", examples: ["Can you ______ the eggs?", "We will ______ the chips."] },
  { word: "busy", definition: "having a lot to do", examples: ["He was too ______ to play.", "She had a ______ day."] },
  { word: "happy", definition: "feeling good and joyful", examples: ["He is ______ with his toy.", "The song made her ______."] },
  { word: "family", definition: "people who live together and are related", examples: ["My ______ went on holiday.", "We had dinner with our ______."] },
  { word: "shy", definition: "not wanting to be seen or noticed", examples: ["The girl is very ______.", "He is too ______ to speak."] },
  { word: "ivy", definition: "a green plant that climbs walls", examples: ["The ______ grew up the wall.", "We saw ______ in the garden."] },
  { word: "copy", definition: "to do the same thing or make a duplicate", examples: ["Please ______ the sentence.", "She tried to ______ my drawing."] },
  { word: "funny", definition: "something that makes you laugh", examples: ["That joke was ______!", "He told a ______ story."] },
  { word: "by", definition: "next to or through the action of", examples: ["Sit ______ me.", "The book was written ______ her."] },
  { word: "boy", definition: "a young male child", examples: ["The ______ is playing football.", "That ______ is my cousin."] },
  { word: "ruby", definition: "a red gemstone", examples: ["The ring had a ______ in it.", "She wore a ______ necklace."] },
  { word: "pony", definition: "a small horse", examples: ["The child rode a ______.", "We saw a brown ______."] },
  { word: "sway", definition: "to move slowly side to side", examples: ["The trees ______ in the wind.", "He began to ______ to the music."] },
  { word: "edgy", definition: "nervous or easily upset", examples: ["She felt ______ before the test.", "He was a bit ______ all day."] },
  { word: "gory", definition: "showing lots of blood or violence", examples: ["The movie was too ______ for kids.", "That story had a ______ scene."] }
],

"Spring 2 Week 2": [
  { word: "dolphin", definition: "a smart sea animal that swims fast", examples: ["The ______ jumped out of the water.", "We saw a ______ at the zoo."] },
  { word: "elephant", definition: "a large grey animal with a trunk", examples: ["The ______ has big ears.", "An ______ sprayed water."] },
  { word: "which", definition: "used to ask or choose", examples: ["______ one is yours?", "I don’t know ______ book to pick."] },
  { word: "wheat", definition: "a grain used to make flour", examples: ["The field is full of ______.", "Bread is made from ______."] },
  { word: "phase", definition: "a stage or part of something", examples: ["He’s in a noisy ______.", "That’s just a passing ______."] },
  { word: "alphabet", definition: "the set of letters used in writing", examples: ["We learned the ______ song.", "The English ______ has 26 letters."] },
  { word: "when", definition: "at what time", examples: ["______ is dinner?", "Tell me ______ to come."] },
  { word: "wheel", definition: "a round object that helps things move", examples: ["The car has a flat ______.", "The ______ fell off the bike."] },
  { word: "photo", definition: "a picture taken with a camera", examples: ["Let’s take a ______.", "He showed me a ______ of his dog."] },
  { word: "phial", definition: "a small bottle", examples: ["The ______ held red liquid.", "She dropped the ______."] },
  { word: "phonics", definition: "learning to read by sounds", examples: ["We use ______ to sound out words.", "______ lessons help us spell."] },
  { word: "where", definition: "asking about a place", examples: ["______ is my pencil?", "Do you know ______ she went?"] },
  { word: "while", definition: "during the time something happens", examples: ["We talked ______ walking.", "He sang ______ cooking."] },
  { word: "photograph", definition: "a printed or digital picture", examples: ["She took a ______ of the sunset.", "This ______ is old."] },
  { word: "phobia", definition: "a strong fear of something", examples: ["He has a ______ of spiders.", "A ______ is a big fear."] },
  { word: "whale", definition: "a huge animal that lives in the sea", examples: ["The ______ splashed water.", "A blue ______ is very big."] },
  { word: "whack", definition: "to hit something hard", examples: ["He gave the ball a ______.", "Don't ______ the table!"] },
  { word: "wheeze", definition: "to breathe with a whistling sound", examples: ["He began to ______ after running.", "I heard a loud ______."] }
],

"Spring 2 Week 3": [
  { word: "Kent", definition: "a county in England", examples: ["We visited ______ last summer.", "______ is in the southeast."] },
  { word: "skin", definition: "the outer layer of your body", examples: ["My ______ is soft.", "He has dry ______."] },
  { word: "kitchen", definition: "a room where you cook food", examples: ["Dinner is in the ______.", "She cleaned the ______."] },
  { word: "silk", definition: "a smooth and shiny fabric", examples: ["She wore a ______ dress.", "The scarf feels like ______."] },
  { word: "kite", definition: "a flying toy on a string", examples: ["Let’s fly a ______ today.", "The ______ flew high."] },
  { word: "sketch", definition: "a quick drawing", examples: ["I made a ______ of the dog.", "He drew a ______ of the park."] },
  { word: "frisky", definition: "full of energy", examples: ["The puppy is ______ today.", "She was in a ______ mood."] },
  { word: "keep", definition: "to hold or not give away", examples: ["Can I ______ this pencil?", "Please ______ your promise."] },
  { word: "blanket", definition: "a warm cover", examples: ["She snuggled in her ______.", "The baby needs a ______."] },
  { word: "king", definition: "a male ruler", examples: ["The ______ wore a crown.", "We read a story about a ______."] },
  { word: "kit", definition: "a set of tools or things", examples: ["He packed his art ______.", "The first aid ______ is ready."] },
  { word: "kettle", definition: "a pot used to boil water", examples: ["The ______ is boiling.", "Put the ______ on for tea."] },
  { word: "basket", definition: "a container for holding items", examples: ["Put the toys in the ______.", "The ______ is full of apples."] },
  { word: "dark", definition: "without light", examples: ["It gets ______ at night.", "She is afraid of the ______."] },
  { word: "key", definition: "a tool to open locks", examples: ["Use your house ______.", "I lost my car ______."] },
  { word: "karate", definition: "a sport with kicks and punches", examples: ["He takes ______ lessons.", "I learned ______ at school."] },
  { word: "fork", definition: "a tool used to eat", examples: ["Use your ______ for pasta.", "The ______ has four points."] },
  { word: "milk", definition: "a white drink from cows", examples: ["I had ______ with cereal.", "Pour some ______ in your cup."] }
],

"Spring 2 Week 4": [
  { word: "off", definition: "not on or away from", examples: ["Turn the lights ______.", "He jumped ______ the chair."] },
  { word: "buzz", definition: "a low humming sound", examples: ["I heard a bee ______.", "The phone gave a soft ______."] },
  { word: "cliff", definition: "a steep high rock near water or land", examples: ["The boat sailed past the ______.", "Don't go near the edge of the ______."] },
  { word: "scruff", definition: "the back of the neck", examples: ["He grabbed the cat by the ______.", "The dog was held by the ______."] },
  { word: "grass", definition: "short green plants in the ground", examples: ["We played on the ______.", "The cows ate the fresh ______."] },
  { word: "well", definition: "a deep hole to get water or in good health", examples: ["The old ______ was dry.", "I hope you feel ______ soon."] },
  { word: "back", definition: "the rear part or to return", examples: ["Sit at the ______ of the class.", "Give the toy ______ to her."] },
  { word: "sniff", definition: "to smell something by pulling air in", examples: ["She gave a loud ______.", "He likes to ______ the flowers."] },
  { word: "bless", definition: "to wish good things or give thanks", examples: ["______ you when you sneeze!", "They said a ______ing before dinner."] },
  { word: "kiss", definition: "a touch with the lips to show love", examples: ["He gave Mum a ______.", "She blew a ______ to the baby."] },
  { word: "miss", definition: "to feel sad about someone or fail to hit", examples: ["I ______ my friend.", "Don’t ______ the target!"] },
  { word: "staff", definition: "a group of workers or a stick", examples: ["The school ______ is friendly.", "The wizard held a magic ______."] },
  { word: "ill", definition: "not feeling well", examples: ["She was ______ and stayed home.", "I felt ______ after lunch."] },
  { word: "glass", definition: "a material you can see through or a drinking cup", examples: ["The window is made of ______.", "She drank from a ______."] },
  { word: "hiss", definition: "a sharp sound made by snakes or steam", examples: ["The snake gave a loud ______.", "The kettle made a ______."] },
  { word: "moss", definition: "a soft green plant that grows in damp places", examples: ["The rock was covered in ______.", "We stepped on wet ______."] },
  { word: "clock", definition: "a device that tells time", examples: ["Look at the ______ on the wall.", "The ______ struck three."] },
  { word: "lock", definition: "a device that keeps something closed", examples: ["Shut the door and turn the ______.", "I lost the key to my bike ______."] }
],

"Spring 2 Week 5": [
  { word: "bank", definition: "a place that keeps money or the edge of a river", examples: ["We went to the ______ to save money.", "They sat by the river ______."] },
  { word: "sunk", definition: "went under water", examples: ["The boat ______ fast.", "His toy ______ in the bath."] },
  { word: "lank", definition: "long, thin, and limp", examples: ["Her hair hung in ______ strands.", "The flowers went ______ in the heat."] },
  { word: "blink", definition: "to close and open your eyes quickly", examples: ["Try not to ______ during the photo.", "She didn’t even ______."] },
  { word: "stink", definition: "a very bad smell", examples: ["What’s that ______?", "The bin had a horrible ______."] },
  { word: "think", definition: "to use your mind to decide or imagine", examples: ["______ before you speak.", "I ______ I lost my book."] },
  { word: "thank", definition: "to show you are grateful", examples: ["Don’t forget to ______ her.", "Say ______ you!"] },
  { word: "dank", definition: "cold, damp, and unpleasant", examples: ["The basement was dark and ______.", "We ran through the ______ cave."] },
  { word: "drank", definition: "past tense of drink", examples: ["He ______ all the juice.", "I ______ from the bottle."] },
  { word: "rink", definition: "a place to skate", examples: ["We skated at the ice ______.", "The ______ was crowded."] },
  { word: "honk", definition: "a loud sound made by a horn or goose", examples: ["The car made a loud ______.", "I heard the goose ______."] },
  { word: "tank", definition: "a container for holding liquid or a large military vehicle", examples: ["The fish swim in a ______.", "The army used a ______."] },
  { word: "wink", definition: "to close one eye quickly", examples: ["She gave a playful ______.", "He likes to ______ when joking."] },
  { word: "link", definition: "a connection or part of a chain", examples: ["There’s a strong ______ between them.", "Click the ______ to open it."] },
  { word: "drink", definition: "to swallow liquid", examples: ["Don’t forget to ______ water.", "He likes to ______ juice."] },
  { word: "trunk", definition: "the main part of a tree or a large box", examples: ["The elephant has a long ______.", "We packed clothes in the ______."] },
  { word: "wink", definition: "to close one eye quickly", examples: ["She gave me a secret ______.", "Did he just ______ at you?"] },
  { word: "pink", definition: "a light red colour", examples: ["She wore a ______ dress.", "The flower is bright ______."] }
],

"Spring 2 Week 5": [
  { word: "bank", definition: "a place that keeps money or the edge of a river", examples: ["We went to the ______ to save money.", "They sat by the river ______."] },
  { word: "sunk", definition: "went under water", examples: ["The boat ______ fast.", "His toy ______ in the bath."] },
  { word: "lank", definition: "long, thin, and limp", examples: ["Her hair hung in ______ strands.", "The flowers went ______ in the heat."] },
  { word: "blink", definition: "to close and open your eyes quickly", examples: ["Try not to ______ during the photo.", "She didn’t even ______."] },
  { word: "stink", definition: "a very bad smell", examples: ["What’s that ______?", "The bin had a horrible ______."] },
  { word: "think", definition: "to use your mind to decide or imagine", examples: ["______ before you speak.", "I ______ I lost my book."] },
  { word: "thank", definition: "to show you are grateful", examples: ["Don’t forget to ______ her.", "Say ______ you!"] },
  { word: "dank", definition: "cold, damp, and unpleasant", examples: ["The basement was dark and ______.", "We ran through the ______ cave."] },
  { word: "drank", definition: "past tense of drink", examples: ["He ______ all the juice.", "I ______ from the bottle."] },
  { word: "rink", definition: "a place to skate", examples: ["We skated at the ice ______.", "The ______ was crowded."] },
  { word: "honk", definition: "a loud sound made by a horn or goose", examples: ["The car made a loud ______.", "I heard the goose ______."] },
  { word: "tank", definition: "a container for holding liquid or a large military vehicle", examples: ["The fish swim in a ______.", "The army used a ______."] },
  { word: "wink", definition: "to close one eye quickly", examples: ["She gave a playful ______.", "He likes to ______ when joking."] },
  { word: "link", definition: "a connection or part of a chain", examples: ["There’s a strong ______ between them.", "Click the ______ to open it."] },
  { word: "drink", definition: "to swallow liquid", examples: ["Don’t forget to ______ water.", "He likes to ______ juice."] },
  { word: "trunk", definition: "the main part of a tree or a large box", examples: ["The elephant has a long ______.", "We packed clothes in the ______."] },
  { word: "pink", definition: "a light red colour", examples: ["She wore a ______ dress.", "The flower is bright ______."] }
],

"Summer 1 Week 1": [
  { word: "cats", definition: "more than one cat", examples: ["The ______ chased a mouse.", "Two black ______ sat on the wall."] },
  { word: "rocks", definition: "hard pieces of stone", examples: ["He picked up some ______.", "We found ______ by the river."] },
  { word: "doors", definition: "openings to go in or out of a room or building", examples: ["Close all the ______.", "There were three ______ to choose from."] },
  { word: "rulers", definition: "tools for measuring or people in charge", examples: ["We used our ______ in maths.", "Kings and queens are ______."] },
  { word: "glasses", definition: "lenses worn to help see", examples: ["She wears ______ to read.", "I need new ______."] },
  { word: "dogs", definition: "more than one dog", examples: ["The ______ barked loudly.", "Three ______ ran in the park."] },
  { word: "thanks", definition: "a way to show you are thankful", examples: ["Give your ______ for the gift.", "He said '______' to the teacher."] },
  { word: "bowls", definition: "round dishes for holding food", examples: ["We ate from clean ______.", "The ______ were full of soup."] },
  { word: "books", definition: "things with pages and stories or facts", examples: ["She loves reading ______.", "There are lots of ______ in the library."] },
  { word: "flowers", definition: "colourful parts of plants", examples: ["The ______ are blooming.", "He picked some ______."] },
  { word: "spends", definition: "uses money or time", examples: ["She ______ time with her family.", "He ______ all his pocket money."] },
  { word: "catches", definition: "grabs something moving", examples: ["He ______ the ball.", "She ______ the bus on time."] },
  { word: "pencils", definition: "tools for writing or drawing", examples: ["Sharpen your ______.", "We used coloured ______."] },
  { word: "bags", definition: "containers to carry things", examples: ["They packed their school ______.", "Put the shopping in ______."] },
  { word: "trees", definition: "tall plants with trunks and branches", examples: ["The ______ lost their leaves.", "Birds live in the ______."] },
  { word: "cooks", definition: "makes food", examples: ["Dad ______ dinner every night.", "She ______ pasta and sauce."] },
  { word: "sits", definition: "rests on a chair or surface", examples: ["He ______ by the window.", "She ______ on the mat."] },
  { word: "runs", definition: "moves quickly on foot", examples: ["He ______ fast in races.", "The dog ______ after the ball."] }
],

"Summer 1 Week 2": [
  { word: "hunting", definition: "looking for animals or something to find", examples: ["They went ______ for treasure.", "The fox is ______ for food."] },
  { word: "buzzing", definition: "making a humming sound", examples: ["The bees are ______ around.", "I hear ______ in my ear."] },
  { word: "jumping", definition: "pushing yourself off the ground", examples: ["She is ______ on the trampoline.", "We were ______ over the rope."] },
  { word: "washing", definition: "cleaning something", examples: ["Mum is ______ the clothes.", "He is ______ the dishes."] },
  { word: "cleaning", definition: "making something clean", examples: ["We are ______ the floor.", "She is ______ her room."] },
  { word: "hunter", definition: "someone who looks for animals", examples: ["The ______ waited quietly.", "A lion is a great ______."] },
  { word: "buzzer", definition: "a device that makes a sound", examples: ["The ______ went off at lunch.", "Press the ______ to enter."] },
  { word: "jumper", definition: "a piece of warm clothing or a person who jumps", examples: ["She wore a red ______.", "The long ______ won the race."] },
  { word: "watered", definition: "gave water to", examples: ["He ______ the flowers.", "She ______ the garden."] },
  { word: "cleaner", definition: "a person or thing that makes things clean", examples: ["The ______ cleaned the classroom.", "Get the glass ______."] },
  { word: "hunted", definition: "looked for animals", examples: ["The wolf ______ in a pack.", "They ______ in the forest."] },
  { word: "buzzed", definition: "made a humming sound", examples: ["The bee ______ by my ear.", "The alarm ______ loudly."] },
  { word: "jumped", definition: "leapt into the air", examples: ["She ______ into the pool.", "He ______ over the rope."] },
  { word: "watering", definition: "giving water to plants", examples: ["She is ______ the plants now.", "He spent time ______ the garden."] },
  { word: "cleaned", definition: "made tidy or free from dirt", examples: ["I ______ my shoes.", "She ______ the table."] },
  { word: "writing", definition: "putting words on paper", examples: ["He is ______ a story.", "I’m ______ a letter."] },
  { word: "writer", definition: "a person who writes", examples: ["She is a famous ______.", "The ______ signed his book."] },
  { word: "walking", definition: "moving on foot", examples: ["We are ______ to school.", "She enjoys ______ in the park."] }
],

"Summer 1 Week 3": [
  { word: "grander", definition: "more impressive or big", examples: ["Her dress was even ______ than before.", "This house is ______ than ours."] },
  { word: "freshest", definition: "most new or clean", examples: ["These are the ______ flowers.", "He picked the ______ apples."] },
  { word: "cleaner", definition: "a person or thing that makes things clean", examples: ["The ______ wiped the windows.", "We need a ______ mop."] },
  { word: "fastest", definition: "most quick", examples: ["That is the ______ car!", "She ran the ______."] },
  { word: "calmer", definition: "more peaceful or quiet", examples: ["She felt ______ after a nap.", "The sea is ______ now."] },
  { word: "fresher", definition: "more clean or new", examples: ["This fruit is ______ than that one.", "The air is ______ today."] },
  { word: "quickest", definition: "most fast", examples: ["He gave the ______ answer.", "The ______ way is through here."] },
  { word: "faster", definition: "more quick", examples: ["He runs ______ than me.", "That train is ______."] },
  { word: "slowest", definition: "most slow", examples: ["He is the ______ in the race.", "This is the ______ day ever."] },
  { word: "kinder", definition: "more nice or helpful", examples: ["She is ______ than him.", "We should be ______ to each other."] },
  { word: "grandest", definition: "most grand or fancy", examples: ["This is the ______ room in the house.", "She wore her ______ dress."] },
  { word: "quicker", definition: "more fast", examples: ["Be ______ next time.", "This way is ______."] },
  { word: "cleanest", definition: "most clean", examples: ["That is the ______ plate.", "He won the award for the ______ room."] },
  { word: "slower", definition: "more slow", examples: ["She walked ______ than him.", "This car is ______."] },
  { word: "calmest", definition: "most calm or peaceful", examples: ["The lake is ______ in the morning.", "He is the ______ person I know."] },
  { word: "lightest", definition: "least heavy", examples: ["This box is the ______.", "She carried the ______ bag."] },
  { word: "darker", definition: "more dark", examples: ["The sky is getting ______.", "My coat is ______ than yours."] },
  { word: "darkest", definition: "most dark", examples: ["This is the ______ hour.", "The ______ part of the cave was scary."] }
],

"Summer 1 Week 4": [
  { word: "unhappy", definition: "not happy", examples: ["She looked ______ today.", "He felt ______ about the test."] },
  { word: "unfair", definition: "not fair", examples: ["That rule is ______!", "It's ______ to cheat."] },
  { word: "unarmed", definition: "not carrying weapons", examples: ["The man was ______.", "The guards were ______ at the gate."] },
  { word: "unfasten", definition: "to undo or open something", examples: ["Please ______ your coat.", "He tried to ______ the buttons."] },
  { word: "unwell", definition: "not feeling well", examples: ["I feel ______ today.", "She stayed home because she was ______."] },
  { word: "undo", definition: "to take back or reverse", examples: ["Can you ______ the knot?", "Click here to ______ your last move."] },
  { word: "unlock", definition: "to open a lock", examples: ["I will ______ the door.", "She forgot how to ______ her phone."] },
  { word: "unbolt", definition: "to slide a bolt open", examples: ["He tried to ______ the gate.", "______ the door from inside."] },
  { word: "unknown", definition: definition: "not known or familiar", examples: ["We took an ______ path.", "An ______ number called me."] },
  { word: "unable", definition: "not able to do something", examples: ["I was ______ to lift it.", "He is ______ to attend."] },
  { word: "unload", definition: "to take things out", examples: ["Time to ______ the car.", "We ______ the boxes from the van."] },
  { word: "unfold", definition: "to open something folded", examples: ["Please ______ your map.", "She ______ the blanket."] },
  { word: "unfit", definition: "not in good health or not suitable", examples: ["He was ______ to run.", "That toy is ______ for babies."] },
  { word: "unhealthy", definition: "not healthy", examples: ["Eating too much cake is ______.", "That snack is ______."] },
  { word: "untidy", definition: "not neat or clean", examples: ["Your room is ______.", "Pick up these ______ clothes."] },
  { word: "unusual", definition: "not common or normal", examples: ["That’s an ______ pet.", "She wore an ______ dress."] },
  { word: "unpopular", definition: "not liked by many", examples: ["The rule was ______.", "He was ______ at school."] },
  { word: "untrained", definition: "not taught or prepared", examples: ["The dog is still ______.", "I’m ______ for that job."] }
],


"Summer 1 Week 6": [
  { word: "the", definition: "used to point to a specific thing", examples: ["Close ______ door.", "I saw ______ dog outside."] },
  { word: "to", definition: "shows direction or purpose", examples: ["Give it ______ her.", "We went ______ the shop."] },
  { word: "said", definition: "spoke words aloud", examples: ["She ______ hello to me.", "He ______ it was time to go."] },
  { word: "were", definition: "past form of 'are'", examples: ["They ______ happy.", "We ______ at the park."] },
  { word: "his", definition: "belongs to a boy or man", examples: ["That is ______ bag.", "He lost ______ pencil."] },
  { word: "a", definition: "one of something", examples: ["I saw ______ cat.", "She has ______ apple."] },
  { word: "today", definition: "the current day", examples: ["We have P.E. ______.", "Is it sunny ______?"] },
  { word: "says", definition: "talks or tells", examples: ["He ______ it’s time to eat.", "Mum ______ it’s bedtime."] },
  { word: "was", definition: "past form of 'is'", examples: ["She ______ late.", "It ______ a good day."] },
  { word: "has", definition: "owns or holds", examples: ["He ______ a new toy.", "She ______ a pet rabbit."] },
  { word: "do", definition: "to act or perform something", examples: ["Can you ______ your work?", "What shall we ______ now?"] },
  { word: "of", definition: "shows belonging or part", examples: ["A glass ______ water.", "A piece ______ cake."] },
  { word: "are", definition: "present form of 'be'", examples: ["You ______ kind.", "We ______ going home."] },
  { word: "is", definition: "tells what someone or something is", examples: ["She ______ my friend.", "The ball ______ red."] },
  { word: "I", definition: "yourself when speaking", examples: ["______ am happy.", "______ like pizza."] },
  { word: "you", definition: "the person being spoken to", examples: ["______ are funny!", "Can ______ help me?"] },
  { word: "your", definition: "belonging to you", examples: ["Is this ______ book?", "I like ______ drawing."] },
  { word: "they", definition: "a group of people or things", examples: ["______ are my friends.", "______ live next door."] }
],

"Summer 1 Week 7": [
  { word: "cats", definition: "more than one cat", examples: ["The ______ chased a mouse.", "Two black ______ sat on the wall."] },
  { word: "hunting", definition: "looking for animals or something to find", examples: ["They went ______ for treasure.", "The fox is ______ for food."] },
  { word: "grander", definition: "more impressive or big", examples: ["Her dress was even ______ than before.", "This house is ______ than ours."] },
  { word: "unhappy", definition: "not happy", examples: ["She looked ______ today.", "He felt ______ about the test."] },
  { word: "football", definition: "a sport played with a ball and feet", examples: ["We played ______ at lunch.", "He kicked the ______ far."] },
  { word: "dogs", definition: "more than one dog", examples: ["The ______ barked loudly.", "Three ______ ran in the park."] },
  { word: "hunted", definition: "looked for animals", examples: ["The wolf ______ in a pack.", "They ______ in the forest."] },
  { word: "grandest", definition: "most grand or fancy", examples: ["This is the ______ room in the house.", "She wore her ______ dress."] },
  { word: "undo", definition: "to take back or reverse", examples: ["Can you ______ the knot?", "Click here to ______ your last move."] },
  { word: "playground", definition: "a place for children to play", examples: ["We ran to the ______ after lunch.", "There’s a swing in the ______."] },
  { word: "spends", definition: "uses money or time", examples: ["She ______ time with her family.", "He ______ all his pocket money."] },
  { word: "hunter", definition: "someone who looks for animals", examples: ["The ______ waited quietly.", "A lion is a great ______."] },
  { word: "fresher", definition: "more clean or new", examples: ["This fruit is ______ than that one.", "The air is ______ today."] },
  { word: "unload", definition: "to take things out", examples: ["Time to ______ the car.", "We ______ the boxes from the van."] },
  { word: "farmyard", definition: "the area around a farm building", examples: ["The chickens ran in the ______.", "The ______ was noisy and muddy."] },
  { word: "said", definition: "spoke words aloud", examples: ["She ______ hello to me.", "He ______ it was time to go."] },
  { word: "says", definition: "talks or tells", examples: ["He ______ it’s time to eat.", "Mum ______ it’s bedtime."] },
  { word: "are", definition: "present form of 'be'", examples: ["You ______ kind.", "We ______ going home."] }
],

"Summer 2 Week 1": [
  { word: "pocket", definition: "a small pouch in clothes to hold things", examples: ["He put his keys in his ______.", "Check your ______ for coins."] },
  { word: "thunder", definition: "a loud noise during a storm", examples: ["I heard ______ last night.", "The ______ made me jump."] },
  { word: "table", definition: "a piece of furniture with a flat top", examples: ["We ate dinner at the ______.", "Put the book on the ______."] },
  { word: "trousers", definition: "clothing for your legs", examples: ["He wore blue ______.", "My ______ have a tear."] },
  { word: "wallet", definition: "a small case for money and cards", examples: ["Dad lost his ______.", "She opened her ______."] },
  { word: "rabbit", definition: "a small animal with long ears", examples: ["The ______ hopped away.", "We fed the ______ some carrots."] },
  { word: "sunset", definition: "when the sun goes down", examples: ["We watched the ______ together.", "The ______ was beautiful."] },
  { word: "curtain", definition: "cloth that covers a window", examples: ["I closed the ______.", "Pull the ______ open."] },
  { word: "jumper", definition: "a warm piece of clothing", examples: ["She wore her red ______.", "He folded his ______."] },
  { word: "water", definition: "a clear liquid we drink", examples: ["Drink some ______.", "She poured ______ into a glass."] },
  { word: "carrot", definition: "a long orange vegetable", examples: ["I ate a raw ______.", "The rabbit nibbled a ______."] },
  { word: "happy", definition: "feeling good or joyful", examples: ["She was ______ on her birthday.", "He smiled because he was ______."] },
  { word: "tablet", definition: "a flat computer or a small pill", examples: ["I played a game on the ______.", "He took a ______ for his cold."] },
  { word: "glasses", definition: "lenses worn to help see", examples: ["She wears ______ to read.", "Clean your ______."] },
  { word: "toilet", definition: "a bathroom fixture for waste", examples: ["Go to the ______ before we leave.", "The ______ is upstairs."] },
  { word: "backpack", definition: "a bag carried on your back", examples: ["He packed his ______ for school.", "She zipped up her ______."] },
  { word: "apple", definition: "a round fruit with red or green skin", examples: ["I ate an ______ at lunch.", "She brought an ______ for snack."] },
  { word: "orange", definition: "a citrus fruit or colour", examples: ["Peel the ______ before eating.", "She wore an ______ jumper."] }
],

"Summer 2 Week 2": [
  { word: "there", definition: "in that place", examples: ["Put it over ______.", "He is sitting over ______."] },
  { word: "here", definition: "in this place", examples: ["Come and sit ______.", "The book is right ______."] },
  { word: "quiet", definition: "not noisy", examples: ["Be ______ in the library.", "The house was very ______."] },
  { word: "won", definition: "past tense of win", examples: ["He ______ the game.", "Our team ______ the match."] },
  { word: "to", definition: "shows direction or purpose", examples: ["Give it ______ her.", "We went ______ the shop."] },
  { word: "their", definition: "belonging to them", examples: ["It is ______ dog.", "They lost ______ bags."] },
  { word: "hear", definition: "to listen with your ears", examples: ["Can you ______ that noise?", "I ______ music."] },
  { word: "see", definition: "to use your eyes", examples: ["I ______ the moon.", "Can you ______ the bird?"] },
  { word: "sun", definition: "the star that gives us light", examples: ["The ______ is shining.", "Wear a hat in the ______."] },
  { word: "two", definition: "the number 2", examples: ["She has ______ cats.", "I see ______ birds."] },
  { word: "they’re", definition: "they are", examples: ["______ going to the park.", "______ my friends."] },
  { word: "quite", definition: "very or a little bit", examples: ["That was ______ hard.", "She is ______ tall."] },
  { word: "sea", definition: "a large body of salt water", examples: ["We swam in the ______.", "The boat sailed on the ______."] },
  { word: "son", definition: "a male child", examples: ["Their ______ is 7 years old.", "He has a ______ and a daughter."] },
  { word: "be", definition: "to exist or happen", examples: ["He wants to ______ a vet.", "It will ______ fine."] },
  { word: "bee", definition: "an insect that makes honey", examples: ["The ______ buzzed past.", "She was stung by a ______."] },
  { word: "blue", definition: "a colour like the sky", examples: ["He wore a ______ shirt.", "The sky is ______."] },
  { word: "blew", definition: "past tense of blow", examples: ["The wind ______ hard.", "She ______ out the candles."] }
],

"Summer 2 Week 3": [
  { word: "catch", definition: "to grab something", examples: ["Can you ______ the ball?", "She will ______ the bus."] },
  { word: "notch", definition: "a small cut or mark", examples: ["He made a ______ in the wood.", "There’s a small ______ in the spoon."] },
  { word: "latch", definition: "a lock for a door or gate", examples: ["Fasten the ______.", "The gate has a metal ______."] },
  { word: "wretch", definition: "an unhappy or wicked person", examples: ["The poor ______ cried.", "The ______ stole the gold."] },
  { word: "fetch", definition: "to go and bring something", examples: ["Can you ______ my bag?", "The dog can ______ the stick."] },
  { word: "hutch", definition: "a small house for animals", examples: ["The rabbit sleeps in a ______.", "Clean the guinea pig’s ______."] },
  { word: "hatch", definition: "to come out of an egg", examples: ["The chicks will ______ soon.", "The dragon will ______ from the egg."] },
  { word: "batch", definition: "a group of items made together", examples: ["She baked a ______ of cookies.", "We made a big ______ of cards."] },
  { word: "stretch", definition: "to reach or extend", examples: ["I ______ my arms.", "Can you ______ that far?"] },
  { word: "kitchen", definition: "a room where food is cooked", examples: ["She is in the ______.", "The ______ smells good."] },
  { word: "match", definition: "a game or something that is the same", examples: ["We won the football ______.", "Find the right ______ for the sock."] },
  { word: "patch", definition: "a small area that is different", examples: ["There’s a muddy ______.", "Mum sewed a ______ on my jeans."] },
  { word: "retch", definition: "to try to vomit", examples: ["The smell made him ______.", "She began to ______ suddenly."] },
  { word: "switch", definition: "a device to turn something on or off", examples: ["Flip the light ______.", "The ______ is on the wall."] },
  { word: "itch", definition: "a feeling that makes you want to scratch", examples: ["I have an ______ on my leg.", "Don’t scratch that ______!"] },
  { word: "watch", definition: "a device that tells time or to look closely", examples: ["Wear your ______ on your wrist.", "______ the show with me."] },
  { word: "pitch", definition: "a sports field or how high a sound is", examples: ["The game is on the football ______.", "She sang in a high ______."] }
],

"Summer 2 Week 4": [
  { word: "have", definition: "to own or hold", examples: ["I ______ a new pencil.", "We ______ lunch at noon."] },
  { word: "love", definition: "to care about deeply", examples: ["I ______ my family.", "She ______s her cat."] },
  { word: "serve", definition: "to give food or help", examples: ["They ______ lunch at noon.", "He will ______ the ball."] },
  { word: "captive", definition: "someone held prisoner", examples: ["The lion was a ______ in the zoo.", "The pirate kept a ______."] },
  { word: "attractive", definition: "nice to look at", examples: ["The flowers are very ______.", "That dress is really ______."] },
  { word: "live", definition: "to be alive or happen now", examples: ["They ______ in London.", "We watched a ______ show."] },
  { word: "above", definition: "over or higher than", examples: ["The clock is ______ the door.", "Birds flew ______ the trees."] },
  { word: "nerve", definition: "a part of your body or bravery", examples: ["He hurt a ______ in his leg.", "She had the ______ to try."] },
  { word: "massive", definition: "very large", examples: ["That truck is ______!", "We saw a ______ cake."] },
  { word: "extensive", definition: "large in amount or area", examples: ["The search was ______.", "He has ______ knowledge."] },
  { word: "give", definition: "to hand something to someone", examples: ["Please ______ me the ball.", "She will ______ you a gift."] },
  { word: "glove", definition: "clothing that covers your hand", examples: ["He wore one ______.", "Put on your ______ in the snow."] },
  { word: "active", definition: "doing things; full of energy", examples: ["She is very ______ in class.", "The volcano is still ______."] },
  { word: "native", definition: "born in a place", examples: ["He’s a ______ speaker.", "That tree is ______ to this area."] },
  { word: "swerve", definition: "to turn suddenly", examples: ["The car had to ______.", "She ______d to miss the cat."] },
  { word: "sensitive", definition: "easily affected", examples: ["His skin is ______ to sun.", "She’s very ______ to noise."] },
  { word: "relative", definition: "a member of your family", examples: ["My aunt is my ______.", "We visited every ______."] },
  { word: "carve", definition: "to cut into something", examples: ["He will ______ the pumpkin.", "She likes to ______ wood."] }
],

"Summer 2 Week 5": [
  { word: "me", definition: "the person speaking", examples: ["Give it to ______.", "He saw ______ at the park."] },
  { word: "no", definition: "a word used to refuse or deny", examples: ["The answer is ______.", "I said ______ to sweets."] },
  { word: "by", definition: "next to or through the action of", examples: ["She stood ______ the door.", "The book was written ______ him."] },
  { word: "there", definition: "in that place", examples: ["Put it over ______.", "He is sitting over ______."] },
  { word: "come", definition: "to move towards", examples: ["Please ______ here.", "Can you ______ to the park?"] },
  { word: "she", definition: "a girl or woman being talked about", examples: ["______ is my sister.", "______ went to the shop."] },
  { word: "go", definition: "to move from one place to another", examples: ["Let’s ______ to the park.", "They will ______ now."] },
  { word: "my", definition: "belonging to me", examples: ["This is ______ book.", "______ shoes are new."] },
  { word: "where", definition: "asks about a place", examples: ["______ are you going?", "Tell me ______ it is."] },
  { word: "some", definition: "a small amount or number", examples: ["Would you like ______ juice?", "I found ______ coins."] },
  { word: "we", definition: "the person speaking and others", examples: ["______ are going home.", "______ made a cake."] },
  { word: "so", definition: "therefore or very", examples: ["It was ______ fun!", "I was tired, ______ I slept."] },
  { word: "here", definition: "in this place", examples: ["Come and sit ______.", "The toy is right ______."] },
  { word: "love", definition: "to care about deeply", examples: ["I ______ my family.", "She ______s her cat."] },
  { word: "one", definition: "the number 1", examples: ["I have ______ dog.", "Choose just ______ toy."] },
  { word: "once", definition: "one time", examples: ["We went there ______.", "Try it just ______."] },
  { word: "ask", definition: "to say you want information", examples: ["Can I ______ a question?", "I will ______ the teacher."] },
  { word: "friend", definition: "someone you like and spend time with", examples: ["He is my best ______.", "She played with her ______."] }
],

"Summer 2 Week 6": [
  { word: "very", definition: "to a great degree", examples: ["She is ______ happy today.", "That test was ______ hard."] },
  { word: "party", definition: "a fun event with people", examples: ["We had a birthday ______.", "The ______ was fun."] },
  { word: "my", definition: "belonging to me", examples: ["This is ______ toy.", "I love ______ dog."] },
  { word: "fry", definition: "to cook in hot oil", examples: ["Can you ______ the eggs?", "We will ______ the chips."] },
  { word: "busy", definition: "having a lot to do", examples: ["He was too ______ to play.", "She had a ______ day."] },
  { word: "happy", definition: "feeling good or joyful", examples: ["She was ______ on her birthday.", "He smiled because he was ______."] },
  { word: "family", definition: "people who live together and are related", examples: ["My ______ went on holiday.", "We had dinner with our ______."] },
  { word: "shy", definition: "not wanting to be seen or noticed", examples: ["The girl is very ______.", "He is too ______ to speak."] },
  { word: "ivy", definition: "a green plant that climbs walls", examples: ["The ______ grew up the wall.", "We saw ______ in the garden."] },
  { word: "copy", definition: "to do the same thing or make a duplicate", examples: ["Please ______ the sentence.", "She tried to ______ my drawing."] },
  { word: "funny", definition: "something that makes you laugh", examples: ["That joke was ______!", "He told a ______ story."] },
  { word: "by", definition: "next to or through the action of", examples: ["She stood ______ the door.", "The book was written ______ him."] },
  { word: "boy", definition: "a young male child", examples: ["The ______ is playing football.", "That ______ is my cousin."] },
  { word: "ruby", definition: "a red gemstone", examples: ["The ring had a ______ in it.", "She wore a ______ necklace."] },
  { word: "pony", definition: "a small horse", examples: ["The child rode a ______.", "We saw a brown ______."] },
  { word: "sway", definition: "to move slowly side to side", examples: ["The trees ______ in the wind.", "He began to ______ to the music."] },
  { word: "edgy", definition: "nervous or easily upset", examples: ["She felt ______ before the test.", "He was a bit ______ all day."] },
  { word: "gory", definition: "showing lots of blood or violence", examples: ["The movie was too ______ for kids.", "That story had a ______ scene."] }
],

"Summer 2 Week 7": [
  { word: "table", definition: "a piece of furniture with a flat top", examples: ["We ate dinner at the ______.", "Put the book on the ______."] },
  { word: "quiet", definition: "not noisy", examples: ["Be ______ in the library.", "The house was very ______."] },
  { word: "itch", definition: "a feeling that makes you want to scratch", examples: ["I have an ______ on my leg.", "Don’t scratch that ______!"] },
  { word: "love", definition: "to care about deeply", examples: ["I ______ my family.", "She ______s her cat."] },
  { word: "once", definition: "one time", examples: ["We went there ______.", "Try it just ______."] },
  { word: "curtain", definition: "cloth that covers a window", examples: ["I closed the ______.", "Pull the ______ open."] },
  { word: "see", definition: "to use your eyes", examples: ["I ______ the moon.", "Can you ______ the bird?"] },
  { word: "watch", definition: "a device that tells time or to look closely", examples: ["Wear your ______ on your wrist.", "______ the show with me."] },
  { word: "above", definition: "over or higher than", examples: ["The clock is ______ the door.", "Birds flew ______ the trees."] },
  { word: "ask", definition: "to say you want information", examples: ["Can I ______ a question?", "I will ______ the teacher."] },
  { word: "tablet", definition: "a flat computer or a small pill", examples: ["I played a game on the ______.", "He took a ______ for his cold."] },
  { word: "sea", definition: "a large body of salt water", examples: ["We swam in the ______.", "The boat sailed on the ______."] },
  { word: "pitch", definition: "a sports field or how high a sound is", examples: ["The game is on the football ______.", "She sang in a high ______."] },
  { word: "glove", definition: "clothing that covers your hand", examples: ["He wore one ______.", "Put on your ______ in the snow."] },
  { word: "friend", definition: "someone you like and spend time with", examples: ["He is my best ______.", "She played with her ______."] },
  { word: "busy", definition: "having a lot to do", examples: ["He was too ______ to play.", "She had a ______ day."] },
  { word: "copy", definition: "to do the same thing or make a duplicate", examples: ["Please ______ the sentence.", "She tried to ______ my drawing."] },
  { word: "pony", definition: "a small horse", examples: ["The child rode a ______.", "We saw a brown ______."] }
],




























"Autumn 1 Week 1": [
  { word: "pocket", definition: "a small pouch in clothes for carrying things", examples: ["He put the coin in his ______.", "My keys are in my ______."] },
  { word: "thunder", definition: "a loud sound during a storm", examples: ["The ______ scared the dog.", "We heard ______ last night."] },
  { word: "table", definition: "a flat surface with legs to put things on", examples: ["Dinner is on the ______.", "She set the ______ for lunch."] },
  { word: "trousers", definition: "clothing worn on your legs", examples: ["He wore blue ______.", "Your ______ are too long."] },
  { word: "wallet", definition: "a small case for money and cards", examples: ["He lost his ______.", "The ______ is in her bag."] },
  { word: "rabbit", definition: "a small animal with long ears", examples: ["The ______ hopped away.", "She has a pet ______."] },
  { word: "sunset", definition: "the time when the sun goes down", examples: ["We watched the ______ together.", "The sky turned pink at ______."] },
  { word: "curtain", definition: "cloth that covers a window", examples: ["I closed the ______.", "The wind moved the ______."] },
  { word: "jumper", definition: "a warm piece of clothing for your upper body", examples: ["She wore a red ______.", "Put on your ______, it's cold."] },
  { word: "water", definition: "a clear liquid we drink", examples: ["Please drink some ______.", "The glass is full of ______."] },
  { word: "carrot", definition: "an orange vegetable", examples: ["The rabbit ate a ______.", "I put a ______ in the salad."] },
  { word: "happy", definition: "feeling good and smiling", examples: ["She was very ______ today.", "The puppy looks ______."] },
  { word: "tablet", definition: "a small flat computer or a pill", examples: ["He plays games on a ______.", "The doctor gave me a ______."] },
  { word: "glasses", definition: "lenses worn to help see better", examples: ["He wears ______ to read.", "Her ______ are on the desk."] },
  { word: "toilet", definition: "a bathroom fixture used for waste", examples: ["I need to use the ______.", "The ______ is upstairs."] },
  { word: "backpack", definition: "a bag worn on the back", examples: ["My books are in my ______.", "She carried a blue ______."] },
  { word: "apple", definition: "a round fruit that grows on trees", examples: ["She ate an ______ for lunch.", "The ______ is red and shiny."] },
  { word: "orange", definition: "a round fruit with juicy segments", examples: ["He peeled the ______.", "Would you like an ______?"] }
],

"Autumn 1 Week 2": [
  { word: "can’t", definition: "short for 'cannot'", examples: ["I ______ find my pencil.", "She ______ come today."] },
  { word: "hasn’t", definition: "short for 'has not'", examples: ["He ______ finished his work.", "She ______ eaten lunch."] },
  { word: "I’ll", definition: "short for 'I will'", examples: ["______ help you.", "______ be back soon."] },
  { word: "shouldn’t", definition: "short for 'should not'", examples: ["You ______ run inside.", "We ______ be late."] },
  { word: "we’re", definition: "short for 'we are'", examples: ["______ going to the park.", "______ ready now."] },
  { word: "wouldn’t", definition: "short for 'would not'", examples: ["He ______ open the door.", "I ______ do that."] },
  { word: "couldn’t", definition: "short for 'could not'", examples: ["She ______ reach the shelf.", "I ______ hear you."] },
  { word: "we’ll", definition: "short for 'we will'", examples: ["______ go tomorrow.", "______ see you soon."] },
  { word: "they're", definition: "short for 'they are'", examples: ["______ playing outside.", "______ coming with us."] },
  { word: "didn’t", definition: "short for 'did not'", examples: ["She ______ know the answer.", "He ______ see the cat."] },
  { word: "it’s", definition: "short for 'it is'", examples: ["______ raining outside.", "______ my turn."] },
  { word: "don’t", definition: "short for 'do not'", examples: ["Please ______ shout.", "I ______ like that."] },
  { word: "won’t", definition: "short for 'will not'", examples: ["He ______ be home today.", "I ______ forget."] },
  { word: "aren’t", definition: "short for 'are not'", examples: ["They ______ here yet.", "You ______ listening."] },
  { word: "doesn’t", definition: "short for 'does not'", examples: ["She ______ like broccoli.", "It ______ fit."] },
  { word: "isn’t", definition: "short for 'is not'", examples: ["This ______ fair.", "He ______ happy."] }
],

"Autumn 1 Week 3": [
  { word: "cats", definition: "more than one cat", examples: ["The ______ are playing.", "We saw two ______."] },
  { word: "rocks", definition: "more than one rock", examples: ["He threw ______ in the pond.", "The path is full of ______."] },
  { word: "bags", definition: "more than one bag", examples: ["The ______ are heavy.", "We packed our ______."] },
  { word: "horses", definition: "more than one horse", examples: ["The ______ ran fast.", "She fed the ______."] },
  { word: "witches", definition: "more than one witch", examples: ["The ______ flew on brooms.", "Scary ______ live here."] },
  { word: "dogs", definition: "more than one dog", examples: ["The ______ barked loudly.", "Those ______ are friendly."] },
  { word: "thanks", definition: "words to show you are grateful", examples: ["Say ______ to Grandma.", "He gave me a gift, so I said ______."] },
  { word: "pencils", definition: "more than one pencil", examples: ["Sharpen your ______.", "I bought new ______."] },
  { word: "rabbits", definition: "more than one rabbit", examples: ["The ______ are eating carrots.", "We saw three ______."] },
  { word: "apples", definition: "more than one apple", examples: ["She picked red ______.", "The ______ are in the basket."] },
  { word: "spends", definition: "uses money or time", examples: ["She ______ all her money.", "He ______ time reading."] },
  { word: "catches", definition: "grabs or stops something moving", examples: ["He ______ the ball.", "She ______ butterflies."] },
  { word: "rulers", definition: "tools for measuring", examples: ["We have two ______.", "Use your ______ for drawing."] },
  { word: "flowers", definition: "plants that bloom", examples: ["The ______ are blooming.", "She picked some ______."] },
  { word: "buses", definition: "more than one bus", examples: ["The ______ arrived late.", "We saw three yellow ______."] },
  { word: "churches", definition: "more than one church", examples: ["There are two old ______.", "The town has many ______."] },
  { word: "dresses", definition: "clothes girls wear", examples: ["She has many ______.", "The ______ were all pink."] },
  { word: "foxes", definition: "more than one fox", examples: ["The ______ ran into the woods.", "I saw three ______."] }
],

"Autumn 1 Week 5": [
  { word: "hunting", definition: "looking for animals or things to catch", examples: ["The fox is ______ for food.", "We went ______ for treasure."] },
  { word: "buzzing", definition: "making a humming sound like a bee", examples: ["The bees are ______.", "I heard a ______ noise."] },
  { word: "jumping", definition: "moving off the ground with your feet", examples: ["The boy is ______ on the bed.", "Frogs are good at ______."] },
  { word: "washing", definition: "cleaning with water", examples: ["She is ______ the dishes.", "We are ______ our hands."] },
  { word: "cleaning", definition: "making something tidy or free of dirt", examples: ["I’m ______ my room.", "He is ______ the windows."] },
  { word: "hunter", definition: "a person who looks for animals to catch", examples: ["The ______ tracked the deer.", "The ______ was quiet in the woods."] },
  { word: "buzzer", definition: "a device that makes a buzzing sound", examples: ["The ______ went off loudly.", "Press the ______ to answer."] },
  { word: "jumper", definition: "a warm top you wear", examples: ["She wore a thick ______.", "His blue ______ is soft."] },
  { word: "watered", definition: "gave water to plants", examples: ["Mum ______ the flowers.", "He ______ the garden."] },
  { word: "cleaner", definition: "someone or something that cleans", examples: ["The ______ came at 10.", "Use a ______ to wipe it up."] },
  { word: "hunted", definition: "looked for animals or things", examples: ["They ______ for eggs.", "We ______ in the forest."] },
  { word: "buzzed", definition: "made a buzzing noise", examples: ["The bee ______ past my ear.", "My phone ______ on the table."] },
  { word: "jumped", definition: "leapt into the air", examples: ["She ______ in the puddle.", "I ______ over the rope."] },
  { word: "watering", definition: "giving water to plants", examples: ["I’m ______ the tomatoes.", "He is ______ the lawn."] },
  { word: "cleaned", definition: "made something tidy", examples: ["We ______ our desks.", "She ______ her shoes."] },
  { word: "writing", definition: "putting words on paper", examples: ["He is ______ a letter.", "I like ______ stories."] },
  { word: "writer", definition: "a person who writes", examples: ["She is a great ______.", "The ______ wrote a book."] },
  { word: "walking", definition: "moving on foot", examples: ["We are ______ to school.", "She went ______ in the park."] }
],

"Autumn 1 Week 6": [
  { word: "grander", definition: "more impressive or fancy", examples: ["This palace is ______ than the last.", "Her new dress is ______."] },
  { word: "freshest", definition: "most recently picked or clean", examples: ["These are the ______ berries.", "We ate the ______ bread."] },
  { word: "cleaner", definition: "more tidy or less dirty", examples: ["Her room is ______ now.", "This side is ______ than that one."] },
  { word: "fastest", definition: "quickest in speed", examples: ["He is the ______ runner.", "That was the ______ lap."] },
  { word: "calmer", definition: "more peaceful or relaxed", examples: ["She felt ______ after resting.", "The sea is ______ today."] },
  { word: "fresher", definition: "more new or clean", examples: ["The air is ______ in the morning.", "This fruit is ______ than that one."] },
  { word: "quickest", definition: "fastest of all", examples: ["He gave the ______ answer.", "This is the ______ way there."] },
  { word: "faster", definition: "more speedy", examples: ["She ran ______ than before.", "Can you go any ______?"] },
  { word: "slowest", definition: "least fast", examples: ["This snail is the ______.", "He was the ______ in the race."] },
  { word: "kinder", definition: "more nice or caring", examples: ["Be ______ to your brother.", "She is ______ than you think."] },
  { word: "grandest", definition: "most fancy or impressive", examples: ["It was the ______ hall I had seen.", "They stayed in the ______ hotel."] },
  { word: "quicker", definition: "more fast", examples: ["We need a ______ way.", "He gave a ______ reply."] },
  { word: "cleanest", definition: "most tidy", examples: ["This is the ______ room in the house.", "She has the ______ shoes."] },
  { word: "slower", definition: "less quick", examples: ["Walk ______ next time.", "This computer is ______."] },
  { word: "calmest", definition: "most peaceful or quiet", examples: ["She stayed the ______ during the storm.", "It’s the ______ beach I've seen."] },
  { word: "lightest", definition: "least heavy", examples: ["This feather is the ______.", "Pick the ______ box."] },
  { word: "darker", definition: "less light", examples: ["The sky got ______.", "This paint is ______ than that one."] },
  { word: "darkest", definition: "most without light", examples: ["It was the ______ night of the year.", "The ______ room is upstairs."] }
],

"Autumn 2 Week 2": [
  { word: "all", definition: "every one or everything", examples: ["We ate ______ the cake.", "______ the children were playing."] },
  { word: "walk", definition: "to move on foot", examples: ["We ______ to school.", "I like to ______ in the park."] },
  { word: "small", definition: "not big", examples: ["The kitten is very ______.", "I found a ______ coin."] },
  { word: "hall", definition: "a large room or corridor", examples: ["The ______ was full of people.", "She ran down the ______."] },
  { word: "also", definition: "in addition", examples: ["I like apples and ______ oranges.", "He ______ came to the party."] },
  { word: "ball", definition: "a round object used in games", examples: ["He kicked the ______.", "Throw the ______ to me."] },
  { word: "talk", definition: "to speak with someone", examples: ["Let’s ______ about your day.", "We ______ at lunch."] },
  { word: "tall", definition: "having great height", examples: ["She is very ______.", "That’s a ______ tree."] },
  { word: "wall", definition: "a flat structure that forms a room", examples: ["Hang the picture on the ______.", "The ball hit the ______."] },
  { word: "almost", definition: "nearly", examples: ["I ______ finished.", "We’re ______ there."] },
  { word: "call", definition: "to phone or shout to someone", examples: ["I will ______ you later.", "She heard me ______ her name."] },
  { word: "always", definition: "every time", examples: ["He ______ says thank you.", "I will ______ love you."] },
  { word: "fall", definition: "to drop down", examples: ["Don’t ______ over!", "Leaves ______ in autumn."] },
  { word: "stall", definition: "a small stand or booth", examples: ["I bought sweets at the ______.", "She runs a flower ______."] },
  { word: "although", definition: "even though", examples: ["______ it rained, we went out.", "She smiled ______ she was tired."] },
  { word: "stalk", definition: "a stem of a plant", examples: ["The flower has a long ______.", "Cut off the ______."] },
  { word: "altogether", definition: "completely or in total", examples: ["That’s £5 ______.", "They stopped ______."] }
],

"Autumn 2 Week 3": [
  { word: "other", definition: "not the same one", examples: ["I want the ______ toy.", "The ______ book is better."] },
  { word: "nothing", definition: "not anything", examples: ["There is ______ in the box.", "He said ______."] },
  { word: "smother", definition: "to cover completely", examples: ["Don’t ______ the fire.", "She tried to ______ her laugh."] },
  { word: "money", definition: "coins or notes used to buy things", examples: ["I saved my ______.", "She spent all her ______."] },
  { word: "glove", definition: "clothing for your hand", examples: ["I lost a ______.", "Put on your ______, it's cold."] },
  { word: "mother", definition: "a female parent", examples: ["My ______ is kind.", "He hugged his ______."] },
  { word: "Monday", definition: "the first day of the week", examples: ["School starts on ______.", "Today is ______."] },
  { word: "monk", definition: "a man who lives a religious life", examples: ["The ______ lives in a monastery.", "A kind ______ helped us."] },
  { word: "honey", definition: "sweet food made by bees", examples: ["I put ______ on my toast.", "Bees make ______."] },
  { word: "brother", definition: "a male sibling", examples: ["My ______ is older than me.", "He has a little ______."] },
  { word: "another", definition: "one more", examples: ["Can I have ______ piece?", "She picked ______ flower."] },
  { word: "month", definition: "about four weeks of time", examples: ["My birthday is next ______.", "It has been a long ______."] },
  { word: "love", definition: "a strong feeling of care", examples: ["I ______ my family.", "She shows ______ for her dog."] },
  { word: "shovel", definition: "a tool used to dig", examples: ["He used a ______ to clear snow.", "I need a ______ for the sand."] },
  { word: "govern", definition: "to lead or manage a country or group", examples: ["They ______ the city.", "He will ______ fairly."] },
  { word: "cover", definition: "to place over something", examples: ["Please ______ the food.", "Snow will ______ the ground."] },
  { word: "wonder", definition: "to be curious or amazed", examples: ["I ______ what’s inside.", "He looked at the stars in ______."] }
],

"Autumn 2 Week 4": [
  { word: "television", definition: "a screen to watch shows and programmes", examples: ["We watched a cartoon on the ______.", "Turn off the ______ before bed."] },
  { word: "vision", definition: "the ability to see", examples: ["He has poor ______ at night.", "Cats have good night ______."] },
  { word: "pleasure", definition: "a feeling of happiness or enjoyment", examples: ["It was a ______ to meet you.", "Reading brings her great ______."] },
  { word: "unusual", definition: "not common or normal", examples: ["That’s an ______ colour.", "He has an ______ pet."] },
  { word: "collision", definition: "a crash between two things", examples: ["There was a car ______.", "The bikes had a ______."] },
  { word: "treasure", definition: "valuable or special things", examples: ["They found ______ in a chest.", "She treats the toy like a ______."] },
  { word: "division", definition: "splitting something into parts", examples: ["We learned ______ in maths.", "The ______ of work was fair."] },
  { word: "measure", definition: "to find the size or amount of something", examples: ["Please ______ the length.", "Use a ruler to ______."] },
  { word: "Asia", definition: "a continent", examples: ["India is in ______.", "______ is the largest continent."] },
  { word: "occasion", definition: "a special event or time", examples: ["Her birthday is a happy ______.", "It was a grand ______."] },
  { word: "usual", definition: "normal or expected", examples: ["He had his ______ breakfast.", "It’s quieter than ______."] },
  { word: "decision", definition: "a choice made after thinking", examples: ["It was a hard ______ to make.", "She made a quick ______."] },
  { word: "usually", definition: "most of the time", examples: ["I ______ walk to school.", "She’s ______ early."] },
  { word: "casual", definition: "relaxed or informal", examples: ["He wore ______ clothes.", "It was a ______ visit."] },
  { word: "revision", definition: "looking over something again to remember it", examples: ["Do some ______ before the test.", "She started her ______ early."] },
  { word: "enclosure", definition: "an area that is closed off", examples: ["The lions are in the ______.", "The sheep stayed in the ______."] },
  { word: "exposure", definition: "being out in the open or shown to something", examples: ["Too much sun ______ is bad.", "He had ______ to cold air."] },
  { word: "leisure", definition: "free time for fun or rest", examples: ["She reads in her ______ time.", "He enjoys painting for ______."] }
],

"Autumn 2 Week 6": [
  { word: "age", definition: "how many years someone has lived", examples: ["What is your ______?", "He is the same ______ as me."] },
  { word: "charge", definition: "to ask for payment or to power up", examples: ["They ______ money to enter.", "Please ______ your tablet."] },
  { word: "cage", definition: "a container for keeping animals", examples: ["The bird lives in a ______.", "He cleaned the rabbit’s ______."] },
  { word: "hinge", definition: "a joint that lets something swing or open", examples: ["The door ______ squeaked.", "Oil the ______ to stop the noise."] },
  { word: "beige", definition: "a light brown colour", examples: ["She wore a ______ coat.", "The sofa is a soft ______."] },
  { word: "huge", definition: "very big", examples: ["The elephant is ______!", "That’s a ______ cake."] },
  { word: "bulge", definition: "a rounded swelling or bump", examples: ["There’s a ______ in my pocket.", "The bag had a ______."] },
  { word: "rage", definition: "strong anger", examples: ["He shouted in ______.", "She was filled with ______."] },
  { word: "strange", definition: "unusual or odd", examples: ["That’s a ______ smell.", "He wore a ______ hat."] },
  { word: "cringe", definition: "to react with discomfort or embarrassment", examples: ["I ______ at the noise.", "She made me ______."] },
  { word: "change", definition: "to make something different", examples: ["I want to ______ my clothes.", "Let’s ______ the plan."] },
  { word: "village", definition: "a small group of houses", examples: ["They live in a ______.", "The ______ has a bakery."] },
  { word: "plunge", definition: "to fall or dive quickly", examples: ["He took a ______ into the pool.", "The coin will ______ into the water."] },
  { word: "binge", definition: "to do something a lot in a short time", examples: ["They had a movie ______.", "He went on a candy ______."] },
  { word: "advantage", definition: "something helpful or good", examples: ["Speed is her ______.", "It’s an ______ to know two languages."] },
  { word: "lounge", definition: "a comfortable room for relaxing", examples: ["They sat in the ______.", "We watched TV in the ______."] },
  { word: "courage", definition: "bravery when facing fear", examples: ["He showed ______ in the fire.", "It takes ______ to speak up."] },
  { word: "pigeon", definition: "a type of bird", examples: ["A ______ sat on the roof.", "We fed a ______ crumbs."] }
],

"Autumn 2 Week 7": [
  { word: "quiet", definition: "not noisy", examples: ["Please be ______ in the library.", "He spoke in a ______ voice."] },
  { word: "walk", definition: "to move on foot", examples: ["We ______ to school.", "They ______ through the woods."] },
  { word: "nothing", definition: "not anything", examples: ["There is ______ in the box.", "She said ______ at all."] },
  { word: "vision", definition: "the ability to see", examples: ["Cats have good night ______.", "He has clear ______."] },
  { word: "badge", definition: "a small sign or emblem you wear", examples: ["I earned a ______ at Scouts.", "She wore a name ______."] },
  { word: "there", definition: "in or at a place", examples: ["He is over ______.", "Put your shoes ______."] },
  { word: "talk", definition: "to speak", examples: ["Let’s ______ after class.", "I like to ______ with friends."] },
  { word: "Monday", definition: "the first day of the week", examples: ["School starts on ______.", "He has football every ______."] },
  { word: "division", definition: "splitting something into parts", examples: ["We practised ______ in maths.", "The cake was cut into equal ______."] },
  { word: "edge", definition: "the border or end of something", examples: ["Stay away from the cliff's ______.", "He stood at the water’s ______."] },
  { word: "sea", definition: "a large body of salt water", examples: ["The boat sailed on the ______.", "We swam in the ______."] },
  { word: "always", definition: "every time", examples: ["She ______ brushes her teeth.", "He is ______ kind to others."] },
  { word: "another", definition: "one more", examples: ["Can I have ______ cookie?", "She read ______ book."] },
  { word: "decision", definition: "a choice made after thinking", examples: ["It was a hard ______.", "He made the ______ to stay."] },
  { word: "bridge", definition: "a structure built over something", examples: ["We crossed the ______.", "The ______ goes over the river."] },
  { word: "charge", definition: "to ask for money or add power", examples: ["I need to ______ my phone.", "They ______ a fee for tickets."] },
  { word: "bulge", definition: "a rounded swelling or bump", examples: ["There’s a ______ in the bag.", "The pocket has a big ______."] },
  { word: "village", definition: "a small group of houses", examples: ["She lives in a quiet ______.", "The ______ has one shop."] }
],

"Spring 1 Week 1": [
  { word: "gem", definition: "a shiny and valuable stone", examples: ["She found a red ______.", "The crown has a blue ______."] },
  { word: "giraffe", definition: "a tall animal with a long neck", examples: ["The ______ eats from trees.", "I saw a ______ at the zoo."] },
  { word: "jar", definition: "a glass container with a lid", examples: ["The ______ was full of sweets.", "He opened the ______ of jam."] },
  { word: "adjust", definition: "to change slightly for a better fit", examples: ["He had to ______ his glasses.", "Can you ______ the seat?"] },
  { word: "Germany", definition: "a country in Europe", examples: ["She lives in ______.", "Berlin is in ______."] },
  { word: "giant", definition: "very big", examples: ["He saw a ______ spider!", "That’s a ______ sandwich."] },
  { word: "energy", definition: "the strength to do things", examples: ["He had lots of ______ after lunch.", "Running uses up ______."] },
  { word: "jog", definition: "to run slowly", examples: ["They ______ around the park.", "I ______ every morning."] },
  { word: "job", definition: "work that someone does", examples: ["She has a new ______.", "What is your ______?"] },
  { word: "gymnastics", definition: "a sport with jumps and flips", examples: ["She practises ______ after school.", "We watched the ______ show."] },
  { word: "magic", definition: "special tricks or powers", examples: ["He did a ______ trick.", "The wizard used ______."] },
  { word: "jacket", definition: "a short coat", examples: ["He wore a blue ______.", "Take your ______, it's cold."] },
  { word: "join", definition: "to become part of something", examples: ["Can I ______ your game?", "She will ______ the club."] },
  { word: "jump", definition: "to push off the ground", examples: ["I can ______ really high!", "The dog tried to ______ the fence."] },
  { word: "allergy", definition: "a reaction to certain things", examples: ["She has an ______ to nuts.", "His ______ makes him sneeze."] },
  { word: "apology", definition: "saying sorry", examples: ["She made an ______ for being late.", "He gave a kind ______."] },
  { word: "adjoin", definition: "to be next to", examples: ["The rooms ______ each other.", "The garden will ______ the house."] },
  { word: "jury", definition: "a group that decides in court", examples: ["The ______ listened to the case.", "The ______ found him not guilty."] }
],

"Spring 1 Week 2": [
  { word: "race", definition: "a contest of speed", examples: ["He won the ______.", "We had a running ______."] },
  { word: "city", definition: "a large town", examples: ["London is a ______.", "The ______ is busy."] },
  { word: "pace", definition: "the speed of something", examples: ["She ran at a fast ______.", "Slow your ______."] },
  { word: "circus", definition: "a place with clowns and tricks", examples: ["We went to the ______.", "The ______ was fun!"] },
  { word: "ice", definition: "frozen water", examples: ["The ______ melted quickly.", "Be careful on the ______."] },
  { word: "fancy", definition: "very nice or decorative", examples: ["She wore a ______ dress.", "He had a ______ cake."] },
  { word: "space", definition: "a place or area", examples: ["There is no ______ left.", "Leave some ______ between them."] },
  { word: "circle", definition: "a round shape", examples: ["Draw a big ______.", "They sat in a ______."] },
  { word: "mercy", definition: "kindness shown when someone is in trouble", examples: ["He asked for ______.", "She showed ______ to the dog."] },
  { word: "cell", definition: "a small room or part of a living thing", examples: ["The prisoner was in a ______.", "Our bodies are made of ______s."] },
  { word: "lace", definition: "a thin, pretty fabric or a shoe tie", examples: ["She wore a ______ dress.", "Tie your shoe ______."] },
  { word: "nice", definition: "kind or pleasant", examples: ["That was a ______ thing to say.", "She is a very ______ person."] },
  { word: "cinema", definition: "a place to watch films", examples: ["We went to the ______.", "The ______ was crowded."] },
  { word: "rice", definition: "a small white grain we eat", examples: ["I had ______ for dinner.", "Would you like some ______?"] },
  { word: "face", definition: "the front part of your head", examples: ["She washed her ______.", "He smiled with his whole ______."] },
  { word: "slice", definition: "a thin piece of something", examples: ["I had a ______ of cake.", "Cut a ______ of bread."] }
],

"Spring 1 Week 3": [
  { word: "knock", definition: "to hit something to make a sound", examples: ["Please ______ on the door.", "I heard a loud ______."] },
  { word: "knee", definition: "the joint in the middle of your leg", examples: ["He scraped his ______.", "Bend your ______."] },
  { word: "gnome", definition: "a small garden figure", examples: ["The ______ stood by the pond.", "She has a smiling ______ in her yard."] },
  { word: "knight", definition: "a warrior from long ago", examples: ["The ______ rode a horse.", "A brave ______ saved the day."] },
  { word: "gnaw", definition: "to chew something hard", examples: ["Mice love to ______.", "He began to ______ the bone."] },
  { word: "gnat", definition: "a tiny flying insect", examples: ["A ______ flew near my face.", "I swatted the ______ away."] },
  { word: "knot", definition: "a way of tying something", examples: ["He tied a ______ in the rope.", "Can you untie this ______?"] },
  { word: "gnarled", definition: "twisted and bumpy", examples: ["The ______ tree was old.", "His hands were ______ from work."] },
  { word: "kneel", definition: "to go down on your knees", examples: ["Please ______ for the photo.", "They ______ on the floor."] },
  { word: "know", definition: "to have information", examples: ["I ______ the answer.", "She doesn’t ______ the way."] },
  { word: "knit", definition: "to make something with yarn", examples: ["Grandma will ______ a scarf.", "She loves to ______ in winter."] },
  { word: "known", definition: "understood or recognised", examples: ["He was a well-______ artist.", "She has ______ him for years."] },
  { word: "knew", definition: "past tense of 'know'", examples: ["I ______ that already.", "She ______ the truth."] },
  { word: "knotting", definition: "tying something into a knot", examples: ["She is ______ the thread.", "He kept ______ the rope."] },
  { word: "knife", definition: "a sharp tool for cutting", examples: ["Use a ______ to slice it.", "Be careful with that ______."] },
  { word: "knoll", definition: "a small rounded hill", examples: ["We sat on a grassy ______.", "The cottage sat by the ______."] }
],

"Spring 1 Week 4": [
  { word: "write", definition: "to put words on paper", examples: ["Please ______ your name.", "He will ______ a story."] },
  { word: "wrong", definition: "not correct", examples: ["That answer is ______.", "I took the ______ turn."] },
  { word: "writing", definition: "the act of putting words down", examples: ["She is ______ a letter.", "I enjoy ______ stories."] },
  { word: "wrapped", definition: "covered something with paper or cloth", examples: ["She ______ the gift.", "He ______ the baby in a blanket."] },
  { word: "wreck", definition: "a destroyed or broken thing", examples: ["The car was a ______.", "We found a ship ______."] },
  { word: "written", definition: "put down in writing", examples: ["It is ______ in your notebook.", "The book was ______ last year."] },
  { word: "wrap", definition: "to cover something up", examples: ["Please ______ the sandwich.", "I will ______ the present."] },
  { word: "wriggle", definition: "to move by twisting and turning", examples: ["The worm began to ______.", "She did a little ______ dance."] },
  { word: "wrath", definition: "strong anger", examples: ["He feared the king’s ______.", "Her ______ was frightening."] },
  { word: "wren", definition: "a small bird", examples: ["The ______ sang in the tree.", "I saw a tiny ______ fly past."] },
  { word: "wrote", definition: "past tense of 'write'", examples: ["She ______ a long story.", "I ______ that poem last week."] },
  { word: "wrapping", definition: "paper used to cover presents", examples: ["The gift had shiny ______.", "Use red ______ for this box."] },
  { word: "wrest", definition: "to pull away with force", examples: ["He tried to ______ the toy.", "She had to ______ the ball away."] },
  { word: "wreak", definition: "to cause something (often bad)", examples: ["The storm will ______ damage.", "He will ______ havoc."] },
  { word: "wrench", definition: "a tool or a sudden twist", examples: ["He used a ______ to fix it.", "I gave the door a ______."] },
  { word: "wrestle", definition: "to fight by grabbing and holding", examples: ["The boys love to ______.", "They began to ______ in the yard."] },
  { word: "wrinkle", definition: "a small line or fold", examples: ["His shirt had a ______.", "She saw a ______ on her forehead."] },
  { word: "wrist", definition: "the joint between hand and arm", examples: ["He wore a watch on his ______.", "She hurt her ______ playing."] }
],

"Spring 1 Week 5": [
  { word: "table", definition: "a flat surface with legs used for placing things", examples: ["Dinner is ready on the ______.", "She cleaned the ______."] },
  { word: "little", definition: "small in size or amount", examples: ["The kitten is very ______.", "I saw a ______ mouse."] },
  { word: "topple", definition: "to fall over", examples: ["The tower began to ______.", "Don't ______ the vase!"] },
  { word: "juggle", definition: "to toss and catch things in the air", examples: ["Can you ______ three balls?", "He learned to ______."] },
  { word: "dazzle", definition: "to shine brightly or impress greatly", examples: ["The lights ______ my eyes.", "She will ______ the crowd."] },
  { word: "apple", definition: "a round fruit with red or green skin", examples: ["I ate an ______ at lunch.", "She gave me a shiny ______."] },
  { word: "middle", definition: "the centre", examples: ["Stand in the ______ of the room.", "She sat in the ______ seat."] },
  { word: "bottle", definition: "a container for liquids", examples: ["He drank from the ______.", "The ______ is full of milk."] },
  { word: "double", definition: "twice as much", examples: ["We need ______ the amount.", "That’s a ______ scoop!"] },
  { word: "article", definition: "a piece of writing in a newspaper or magazine", examples: ["I read an ______ about dogs.", "She wrote an ______."] },
  { word: "fable", definition: "a short story with a lesson", examples: ["We read a ______ about animals.", "The ______ taught us to be kind."] },
  { word: "fiddle", definition: "another word for a violin", examples: ["He played a tune on his ______.", "The old man had a wooden ______."] },
  { word: "castle", definition: "a large building where kings or queens lived", examples: ["The ______ had tall towers.", "We visited a stone ______."] },
  { word: "ankle", definition: "the joint between foot and leg", examples: ["She hurt her ______.", "His ______ is swollen."] },
  { word: "poodle", definition: "a type of dog", examples: ["The ______ barked at the postman.", "She has a fluffy ______."] },
  { word: "tickle", definition: "to touch lightly to make someone laugh", examples: ["Don’t ______ my feet!", "He began to ______ her side."] },
  { word: "able", definition: "having the power or skill to do something", examples: ["She is ______ to swim.", "Are you ______ to help?"] }
],

"Spring 1 Week 6": [
  { word: "camel", definition: "an animal with a hump that lives in deserts", examples: ["The ______ walked in the sand.", "A ______ can go without water."] },
  { word: "travel", definition: "to go from one place to another", examples: ["They ______ by car.", "We will ______ in summer."] },
  { word: "trowel", definition: "a small tool for digging", examples: ["He used a ______ in the garden.", "Hand me the ______ please."] },
  { word: "peel", definition: "to take off the skin of fruit or vegetables", examples: ["______ the banana.", "She helped me ______ the orange."] },
  { word: "label", definition: "a tag that gives information", examples: ["Read the ______ on the bottle.", "Put a name ______ on your bag."] },
  { word: "tunnel", definition: "a long passage under the ground", examples: ["The train went through a ______.", "They dug a ______."] },
  { word: "towel", definition: "a cloth for drying", examples: ["Use a ______ after your bath.", "He forgot his beach ______."] },
  { word: "hotel", definition: "a place where you stay when travelling", examples: ["We slept in a big ______.", "The ______ had a swimming pool."] },
  { word: "level", definition: "a flat or equal height or stage", examples: ["Keep the shelf ______.", "He passed the next game ______."] },
  { word: "wheel", definition: "a round object that turns", examples: ["The car has a flat ______.", "Spin the ______."] },
  { word: "model", definition: "a small copy or example", examples: ["He built a plane ______.", "The ______ was made of plastic."] },
  { word: "refuel", definition: "to fill up with gas or energy again", examples: ["The plane needs to ______.", "We stopped to ______ the car."] },
  { word: "parcel", definition: "a wrapped package", examples: ["The ______ was on the step.", "She got a birthday ______."] },
  { word: "squirrel", definition: "a small animal with a bushy tail", examples: ["A ______ ran up the tree.", "We saw a ______ eating nuts."] },
  { word: "tinsel", definition: "shiny decoration used at Christmas", examples: ["We hung ______ on the tree.", "The room was full of ______."] },
  { word: "kneel", definition: "to go down on your knees", examples: ["Please ______ for the prayer.", "I saw her ______ by the chair."] },
  { word: "angel", definition: "a heavenly being", examples: ["She dressed like an ______.", "The card had an ______ on it."] },
  { word: "channel", definition: "a path or TV station", examples: ["Switch to a different ______.", "The water flowed through the ______."] }
],

"Spring 1 Week 7": [
  { word: "gem", definition: "a shiny and valuable stone", examples: ["She found a red ______.", "The crown has a blue ______."] },
  { word: "city", definition: "a large town", examples: ["London is a ______.", "The ______ is busy."] },
  { word: "knee", definition: "the joint in the middle of your leg", examples: ["He scraped his ______.", "Bend your ______."] },
  { word: "writing", definition: "the act of putting words down", examples: ["She is ______ a letter.", "I enjoy ______ stories."] },
  { word: "table", definition: "a flat surface with legs used for placing things", examples: ["Dinner is ready on the ______.", "She cleaned the ______."] },
  { word: "giraffe", definition: "a tall animal with a long neck", examples: ["The ______ eats from trees.", "I saw a ______ at the zoo."] },
  { word: "fancy", definition: "very nice or decorative", examples: ["She wore a ______ dress.", "He had a ______ cake."] },
  { word: "gnat", definition: "a tiny flying insect", examples: ["A ______ flew near my face.", "I swatted the ______ away."] },
  { word: "wriggle", definition: "to move by twisting and turning", examples: ["The worm began to ______.", "She did a little ______ dance."] },
  { word: "apple", definition: "a round fruit with red or green skin", examples: ["I ate an ______ at lunch.", "She gave me a shiny ______."] },
  { word: "jar", definition: "a glass container with a lid", examples: ["The ______ was full of sweets.", "He opened the ______ of jam."] },
  { word: "lace", definition: "a thin, pretty fabric or a shoe tie", examples: ["She wore a ______ dress.", "Tie your shoe ______."] },
  { word: "knit", definition: "to make something with yarn", examples: ["Grandma will ______ a scarf.", "She loves to ______ in winter."] },
  { word: "wrest", definition: "to pull away with force", examples: ["He tried to ______ the toy.", "She had to ______ the ball away."] },
  { word: "bottle", definition: "a container for liquids", examples: ["He drank from the ______.", "The ______ is full of milk."] },
  { word: "travel", definition: "to go from one place to another", examples: ["They ______ by car.", "We will ______ in summer."] },
  { word: "towel", definition: "a cloth for drying", examples: ["Use a ______ after your bath.", "He forgot his beach ______."] },
  { word: "tinsel", definition: "shiny decoration used at Christmas", examples: ["We hung ______ on the tree.", "The room was full of ______."] }
],

"Spring 2 Week 1": [
  { word: "metal", definition: "a hard, shiny material like iron or gold", examples: ["The bike is made of ______.", "Gold is a kind of ______."] },
  { word: "hospital", definition: "a place where sick people are treated", examples: ["She went to the ______.", "The ______ has many doctors."] },
  { word: "fossil", definition: "old remains of plants or animals in rock", examples: ["He found a dinosaur ______.", "We saw a ______ in the museum."] },
  { word: "anvil", definition: "a heavy metal block used for shaping", examples: ["The blacksmith used an ______.", "The hammer hit the ______."] },
  { word: "April", definition: "the fourth month of the year", examples: ["Her birthday is in ______.", "It often rains in ______."] },
  { word: "pedal", definition: "a lever you push with your foot", examples: ["He pressed the bike ______.", "Push the ______ to go faster."] },
  { word: "animal", definition: "a living creature, not a plant", examples: ["The lion is a wild ______.", "She has a pet ______."] },
  { word: "nostril", definition: "one of the openings in your nose", examples: ["Air goes through your ______.", "He blocked one ______."] },
  { word: "pupil", definition: "a student or the black part of your eye", examples: ["She is a ______ in Year 2.", "His ______ got bigger in the dark."] },
  { word: "peril", definition: "great danger", examples: ["The explorers were in ______.", "The storm put us in ______."] },
  { word: "capital", definition: "a main city or big letter", examples: ["London is the ______ of England.", "Write it with a ______ letter."] },
  { word: "pencil", definition: "a tool for writing or drawing", examples: ["Sharpen your ______.", "She drew with a ______."] },
  { word: "basil", definition: "a green herb used in cooking", examples: ["Add some ______ to the sauce.", "We grow ______ in a pot."] },
  { word: "stencil", definition: "a cut-out shape used for drawing", examples: ["Use a ______ to trace stars.", "He painted using a ______."] },
  { word: "evil", definition: "very bad or wicked", examples: ["The villain was ______.", "They stopped the ______ plan."] },
  { word: "bridal", definition: "related to a wedding", examples: ["She wore a ______ dress.", "They went to a ______ shop."] },
  { word: "arrival", definition: "the act of coming", examples: ["His ______ was on time.", "We waited for the train’s ______."] },
  { word: "oval", definition: "a shape like a stretched circle", examples: ["An egg is an ______.", "Draw an ______ shape."] }
],

"Spring 2 Week 2": [
  { word: "cry", definition: "to shed tears or call out loudly", examples: ["Don’t ______ over the toy.", "Babies often ______."] },
  { word: "try", definition: "to make an effort", examples: ["Please ______ your best.", "She will ______ again."] },
  { word: "my", definition: "belonging to me", examples: ["That is ______ book.", "Here is ______ coat."] },
  { word: "why", definition: "a word used to ask a reason", examples: ["______ are you late?", "Tell me ______ you’re upset."] },
  { word: "sly", definition: "clever in a sneaky way", examples: ["The fox is very ______.", "He gave a ______ smile."] },
  { word: "fly", definition: "to move through the air", examples: ["Birds can ______.", "Watch the kite ______."] },
  { word: "reply", definition: "to answer", examples: ["Please ______ to the question.", "She didn’t ______ to my message."] },
  { word: "supply", definition: "to give or provide something", examples: ["The shop will ______ food.", "They ______ water to the town."] },
  { word: "shy", definition: "nervous around people", examples: ["She is very ______ at school.", "The kitten was ______."] },
  { word: "spy", definition: "someone who secretly watches", examples: ["The ______ wore dark clothes.", "He acted like a ______."] },
  { word: "dry", definition: "not wet", examples: ["The towel is ______.", "Let the clothes ______."] },
  { word: "July", definition: "the seventh month of the year", examples: ["School ends in ______.", "It’s hot in ______."] },
  { word: "by", definition: "next to or through the action of", examples: ["She sat ______ the window.", "The book was written ______ her."] },
  { word: "butterfly", definition: "a flying insect with colourful wings", examples: ["A ______ landed on the flower.", "I saw a yellow ______."] },
  { word: "sky", definition: "the space above the Earth", examples: ["The ______ turned pink.", "Look up at the ______."] },
  { word: "fry", definition: "to cook in hot oil", examples: ["She will ______ the eggs.", "Don’t ______ the food too long."] },
  { word: "sty", definition: "a place for pigs or a sore eye", examples: ["The pig lives in a ______.", "He has a ______ in his eye."] },
  { word: "defy", definition: "to go against or resist", examples: ["They ______ the rules.", "Don’t ______ your teacher."] }
],

"Spring 2 Week 3": [
  { word: "flies", definition: "more than one flying insect or the act of flying", examples: ["The bird ______ over the tree.", "There are lots of ______ in the room."] },
  { word: "copies", definition: "more than one duplicate", examples: ["He made three ______ of the photo.", "We need extra ______ of the paper."] },
  { word: "cries", definition: "sounds made when someone is upset", examples: ["The baby ______ when it’s hungry.", "She ______ during sad films."] },
  { word: "lies", definition: "untrue statements", examples: ["He told ______ about his homework.", "No one believes his ______."] },
  { word: "tries", definition: "makes efforts", examples: ["She always ______ her best.", "He ______ hard in every test."] },
  { word: "babies", definition: "more than one baby", examples: ["The ______ are sleeping.", "She looked after two ______."] },
  { word: "denies", definition: "says something is not true", examples: ["He ______ breaking the vase.", "She ______ the story."] },
  { word: "relies", definition: "depends on someone or something", examples: ["The team ______ on their captain.", "She ______ on her mum."] },
  { word: "carries", definition: "holds and moves something", examples: ["He ______ his bag to school.", "She ______ her books."] },
  { word: "replies", definition: "answers back", examples: ["He always ______ politely.", "No one ______ to the question."] },
  { word: "fries", definition: "thin strips of fried potato", examples: ["I love to eat ______ with ketchup.", "The ______ were hot and crispy."] },
  { word: "supplies", definition: "things given or needed", examples: ["They brought school ______.", "The ______ arrived late."] },
  { word: "tidies", definition: "cleans up", examples: ["She ______ her room every day.", "He ______ the classroom quickly."] },
  { word: "butterflies", definition: "insects with colourful wings", examples: ["The garden was full of ______.", "I saw three blue ______."] },
  { word: "defies", definition: "goes against rules or people", examples: ["He ______ the teacher’s orders.", "She ______ expectations."] }
],

"Spring 2 Week 4": [
  { word: "copied", definition: "made the same as something else", examples: ["He ______ my drawing.", "She ______ the answers."] },
  { word: "happiest", definition: "most joyful", examples: ["That was the ______ day ever!", "She was the ______ in the class."] },
  { word: "applied", definition: "asked or used for a purpose", examples: ["He ______ for a job.", "She ______ glue to the paper."] },
  { word: "dried", definition: "became not wet", examples: ["The clothes ______ in the sun.", "I ______ my hands."] },
  { word: "spied", definition: "looked secretly or noticed", examples: ["He ______ the treasure.", "She ______ on her brother."] },
  { word: "copier", definition: "a person or machine that makes copies", examples: ["The ______ broke down.", "Ask the ______ to print these."] },
  { word: "cried", definition: "shed tears", examples: ["She ______ after the fall.", "He ______ during the movie."] },
  { word: "defied", definition: "refused to obey", examples: ["They ______ the rule.", "He ______ his parents."] },
  { word: "supplied", definition: "gave something needed", examples: ["The shop ______ the food.", "She ______ pencils to the class."] },
  { word: "trier", definition: "someone who tries hard", examples: ["He’s a good ______.", "The best ______ won a prize."] },
  { word: "happier", definition: "more joyful", examples: ["She is ______ today.", "He looks ______ with friends."] },
  { word: "replied", definition: "answered", examples: ["He ______ to the question.", "She ______ with a smile."] },
  { word: "tried", definition: "made an effort", examples: ["He ______ his best.", "She ______ to lift it."] },
  { word: "supplier", definition: "a person who provides things", examples: ["The ______ brings the food.", "Call the ______ for more books."] },
  { word: "fried", definition: "cooked in oil", examples: ["I ______ the eggs.", "We ______ the fish."] },
  { word: "funnier", definition: "more amusing", examples: ["That joke was even ______!", "He is ______ than his brother."] },
  { word: "funniest", definition: "most amusing", examples: ["That was the ______ show ever.", "She told the ______ story."] },
  { word: "emptiest", definition: "most empty", examples: ["This box is the ______.", "The ______ jar was thrown away."] }
],

"Spring 2 Week 5": [
  { word: "hiking", definition: "walking long distances for fun", examples: ["They went ______ in the hills.", "We enjoy ______ at the weekend."] },
  { word: "nicer", definition: "more kind or pleasant", examples: ["She is ______ today.", "This gift is ______ than mine."] },
  { word: "shiniest", definition: "the most shiny", examples: ["That is the ______ apple!", "Her shoes are the ______ of all."] },
  { word: "biker", definition: "someone who rides a bike", examples: ["The ______ wore a helmet.", "A ______ rode past quickly."] },
  { word: "hoping", definition: "wishing for something to happen", examples: ["I’m ______ it doesn’t rain.", "She is ______ to win."] },
  { word: "hiked", definition: "walked a long distance", examples: ["We ______ up the mountain.", "They ______ for miles."] },
  { word: "nicest", definition: "most kind or pleasant", examples: ["He is the ______ person I know.", "That was the ______ thing to say."] },
  { word: "shinier", definition: "more shiny", examples: ["Your shoes are ______ than mine.", "Her hair looks ______ today."] },
  { word: "writer", definition: "someone who writes", examples: ["She wants to be a ______.", "The ______ signed books."] },
  { word: "making", definition: "creating or building something", examples: ["We are ______ a cake.", "He is ______ a model."] },
  { word: "hiker", definition: "a person who goes hiking", examples: ["The ______ brought a map.", "I met a ______ in the woods."] },
  { word: "shiny", definition: "bright and glossy", examples: ["The ring is very ______.", "Clean the table until it’s ______."] },
  { word: "shining", definition: "giving off light", examples: ["The sun is ______ brightly.", "Her eyes were ______."] },
  { word: "writing", definition: "putting words on paper", examples: ["She is ______ a story.", "His ______ is very neat."] },
  { word: "maker", definition: "a person who makes things", examples: ["She is a toy ______.", "The ______ of the car is famous."] },
  { word: "baking", definition: "cooking with heat in an oven", examples: ["We are ______ a cake.", "She loves ______ biscuits."] },
  { word: "baker", definition: "a person who bakes", examples: ["The ______ made fresh bread.", "My aunt is a great ______."] },
  { word: "baked", definition: "cooked in an oven", examples: ["He ______ the cookies himself.", "She ______ a pie yesterday."] }
],

"Spring 2 Week 6": [
  { word: "patting", definition: "lightly touching or tapping", examples: ["He is ______ the dog.", "She kept ______ the baby."] },
  { word: "hummed", definition: "made a low sound with lips closed", examples: ["He ______ a tune.", "She ______ while working."] },
  { word: "sadder", definition: "more unhappy", examples: ["I felt ______ after the ending.", "She was ______ than before."] },
  { word: "fattest", definition: "the most overweight", examples: ["That cat is the ______ of all.", "He saw the ______ pig on the farm."] },
  { word: "drumming", definition: "playing a drum", examples: ["He was ______ loudly.", "The band started ______."] },
  { word: "patted", definition: "tapped gently", examples: ["She ______ the dog’s head.", "He ______ me on the back."] },
  { word: "dropping", definition: "letting something fall", examples: ["She kept ______ her spoon.", "Stop ______ your books!"] },
  { word: "saddest", definition: "most unhappy", examples: ["It was the ______ story I’ve read.", "He looked the ______ of them all."] },
  { word: "runner", definition: "someone who runs", examples: ["The ______ finished the race.", "She is a fast ______."] },
  { word: "drummed", definition: "played a drum", examples: ["They ______ all night.", "He ______ on the desk."] },
  { word: "humming", definition: "making a soft tune", examples: ["She’s always ______ a song.", "He walked while ______."] },
  { word: "dropped", definition: "let something fall", examples: ["I ______ my lunch.", "She ______ the phone."] },
  { word: "fatter", definition: "more overweight", examples: ["That dog is ______ than the cat.", "This one is ______ than yours."] },
  { word: "runny", definition: "not solid; watery", examples: ["I have a ______ nose.", "The eggs were too ______."] },
  { word: "stopping", definition: "bringing something to an end", examples: ["We are ______ at the shop.", "He kept ______ to rest."] },
  { word: "stopped", definition: "came to an end", examples: ["She ______ walking.", "The bus ______ quickly."] },
  { word: "sitting", definition: "resting on a seat", examples: ["He was ______ on the bench.", "The cat is ______ on the mat."] },
  { word: "tapping", definition: "lightly hitting", examples: ["She is ______ her pencil.", "I heard someone ______ the window."] }
],

"Spring 2 Week 7": [
  { word: "metal", definition: "a hard, shiny material like iron or gold", examples: ["The bike is made of ______.", "Gold is a kind of ______."] },
  { word: "try", definition: "to make an effort", examples: ["Please ______ your best.", "She will ______ again."] },
  { word: "cries", definition: "sounds made when someone is upset", examples: ["The baby ______ when it’s hungry.", "She ______ during sad films."] },
  { word: "copied", definition: "made the same as something else", examples: ["He ______ my drawing.", "She ______ the answers."] },
  { word: "shiniest", definition: "the most shiny", examples: ["That is the ______ apple!", "Her shoes are the ______ of all."] },
  { word: "pedal", definition: "a lever you push with your foot", examples: ["He pressed the bike ______.", "Push the ______ to go faster."] },
  { word: "reply", definition: "to answer", examples: ["Please ______ to the question.", "She didn’t ______ to my message."] },
  { word: "denies", definition: "says something is not true", examples: ["He ______ breaking the vase.", "She ______ the story."] },
  { word: "copier", definition: "a person or machine that makes copies", examples: ["The ______ broke down.", "Ask the ______ to print these."] },
  { word: "shinier", definition: "more shiny", examples: ["Your shoes are ______ than mine.", "Her hair looks ______ today."] },
  { word: "capital", definition: "a main city or big letter", examples: ["London is the ______ of England.", "Write it with a ______ letter."] },
  { word: "July", definition: "the seventh month of the year", examples: ["School ends in ______.", "It’s hot in ______."] },
  { word: "fries", definition: "thin strips of fried potato", examples: ["I love to eat ______ with ketchup.", "The ______ were hot and crispy."] },
  { word: "happiest", definition: "most joyful", examples: ["That was the ______ day ever!", "She was the ______ in the class."] },
  { word: "shining", definition: "giving off light", examples: ["The sun is ______ brightly.", "Her eyes were ______."] },
  { word: "sadder", definition: "more unhappy", examples: ["I felt ______ after the ending.", "She was ______ than before."] },
  { word: "runny", definition: "not solid; watery", examples: ["I have a ______ nose.", "The eggs were too ______."] },
  { word: "hopped", definition: "jumped on one foot", examples: ["The bunny ______ away.", "She ______ across the stones."] }
],

"Summer 1 Week 1": [
  { word: "word", definition: "a single unit of language", examples: ["Write each ______ clearly.", "That’s a new ______."] },
  { word: "world", definition: "the Earth or everything in existence", examples: ["The ______ is round.", "We travel around the ______."] },
  { word: "warm", definition: "a little hot", examples: ["The soup is ______.", "It was a ______ day."] },
  { word: "award", definition: "a prize for doing well", examples: ["He won an ______.", "She got an ______ for reading."] },
  { word: "warfare", definition: "fighting between groups or countries", examples: ["They studied ancient ______.", "The movie was about ______."] },
  { word: "work", definition: "a task you do", examples: ["I have to finish my ______.", "She goes to ______ every day."] },
  { word: "worth", definition: "how valuable something is", examples: ["This coin is ______ a lot.", "What is it ______ to you?"] },
  { word: "towards", definition: "moving in the direction of", examples: ["He walked ______ the door.", "The car drove ______ us."] },
  { word: "swarm", definition: "a large group, usually of insects", examples: ["A ______ of bees flew by.", "The flies came in a ______."] },
  { word: "worse", definition: "not as good", examples: ["Today is ______ than yesterday.", "His cold got ______."] },
  { word: "worm", definition: "a small soft creature with no legs", examples: ["The bird ate a ______.", "I found a ______ in the garden."] },
  { word: "war", definition: "a big fight between countries", examples: ["The ______ lasted many years.", "We learned about the ______."] },
  { word: "warden", definition: "a person who looks after a place", examples: ["The park ______ gave directions.", "Ask the ______ for help."] },
  { word: "wardrobe", definition: "a cupboard for clothes", examples: ["Hang your coat in the ______.", "The ______ is full of dresses."] },
  { word: "worst", definition: "the most bad", examples: ["That was the ______ storm ever.", "It was his ______ score."] },
  { word: "worthy", definition: "deserving something", examples: ["She is ______ of praise.", "Is this idea ______ of attention?"] },
  { word: "worthless", definition: "having no value", examples: ["The old toy was ______.", "His excuse sounded ______."] }
],

"Summer 1 Week 2": [
  { word: "enjoyment", definition: "the feeling of having fun", examples: ["The game brought great ______.", "Reading gives me ______."] },
  { word: "playful", definition: "full of fun and games", examples: ["The puppy is very ______.", "She has a ______ smile."] },
  { word: "badly", definition: "in a poor way", examples: ["He behaved ______.", "The glass broke ______."] },
  { word: "happiness", definition: "the feeling of being happy", examples: ["Her ______ showed on her face.", "I wish you ______."] },
  { word: "happily", definition: "in a joyful way", examples: ["They danced ______.", "He ______ agreed."] },
  { word: "sadness", definition: "the feeling of being sad", examples: ["There was ______ in her eyes.", "He felt deep ______."] },
  { word: "hopeless", definition: "having no hope", examples: ["The situation seemed ______.", "She felt ______ and alone."] },
  { word: "argument", definition: "a disagreement or fight with words", examples: ["They had an ______.", "An ______ broke out."] },
  { word: "plentiful", definition: "a lot of something", examples: ["The apples were ______.", "Food was ______ at the party."] },
  { word: "sadly", definition: "in a sad way", examples: ["He nodded ______.", "She looked at me ______."] },
  { word: "careful", definition: "taking care not to make mistakes", examples: ["Be ______ with that glass.", "She is always ______."] },
  { word: "plainness", definition: "the quality of being simple", examples: ["The room's ______ was calming.", "He liked the ______ of the shirt."] },
  { word: "merriment", definition: "joy and fun", examples: ["The party was full of ______.", "We joined in the ______."] },
  { word: "penniless", definition: "having no money", examples: ["The man was ______.", "She felt ______ after shopping."] },
  { word: "kindly", definition: "in a kind way", examples: ["He smiled ______.", "She spoke ______ to the child."] },
  { word: "kindness", definition: "being nice or caring", examples: ["Show ______ to others.", "Her ______ was remembered."] },
  { word: "hopeful", definition: "full of hope", examples: ["We are ______ for sunshine.", "He gave a ______ answer."] },
  { word: "excitement", definition: "a strong happy feeling", examples: ["She clapped with ______.", "There was much ______ in the air."] }
],

"Summer 1 Week 3": [
  { word: "enjoyment", definition: "the feeling of having fun", examples: ["The game brought great ______.", "Reading gives me ______."] },
  { word: "playful", definition: "full of fun and games", examples: ["The puppy is very ______.", "She has a ______ smile."] },
  { word: "badly", definition: "in a poor way", examples: ["He behaved ______.", "The glass broke ______."] },
  { word: "happiness", definition: "the feeling of being happy", examples: ["Her ______ showed on her face.", "I wish you ______."] },
  { word: "happily", definition: "in a joyful way", examples: ["They danced ______.", "He ______ agreed."] },
  { word: "sadness", definition: "the feeling of being sad", examples: ["There was ______ in her eyes.", "He felt deep ______."] },
  { word: "hopeless", definition: "having no hope", examples: ["The situation seemed ______.", "She felt ______ and alone."] },
  { word: "argument", definition: "a disagreement or fight with words", examples: ["They had an ______.", "An ______ broke out."] },
  { word: "plentiful", definition: "a lot of something", examples: ["The apples were ______.", "Food was ______ at the party."] },
  { word: "sadly", definition: "in a sad way", examples: ["He nodded ______.", "She looked at me ______."] },
  { word: "careful", definition: "taking care not to make mistakes", examples: ["Be ______ with that glass.", "She is always ______."] },
  { word: "plainness", definition: "the quality of being simple", examples: ["The room's ______ was calming.", "He liked the ______ of the shirt."] },
  { word: "merriment", definition: "joy and fun", examples: ["The party was full of ______.", "We joined in the ______."] },
  { word: "penniless", definition: "having no money", examples: ["The man was ______.", "She felt ______ after shopping."] },
  { word: "kindly", definition: "in a kind way", examples: ["He smiled ______.", "She spoke ______ to the child."] },
  { word: "kindness", definition: "being nice or caring", examples: ["Show ______ to others.", "Her ______ was remembered."] },
  { word: "hopeful", definition: "full of hope", examples: ["We are ______ for sunshine.", "He gave a ______ answer."] },
  { word: "excitement", definition: "a strong happy feeling", examples: ["She clapped with ______.", "There was much ______ in the air."] }
],

"Summer 1 Week 4": [
  { word: "station", definition: "a place where trains stop", examples: ["Meet me at the ______.", "We waited at the train ______."] },
  { word: "nation", definition: "a whole country and its people", examples: ["Our ______ is very proud.", "The ______ voted for peace."] },
  { word: "ration", definition: "a fixed amount of something", examples: ["Each child got a ______.", "They ate their food in ______s."] },
  { word: "potion", definition: "a magical drink", examples: ["The witch made a green ______.", "He drank the magic ______."] },
  { word: "caption", definition: "words under a picture", examples: ["The photo has a funny ______.", "Read the ______ under the comic."] },
  { word: "fiction", definition: "a story that is made up", examples: ["She loves reading ______ books.", "Is it fact or ______?"] },
  { word: "section", definition: "a part of something", examples: ["This ______ of the book is long.", "Cut the cake into ______s."] },
  { word: "option", definition: "a choice you can make", examples: ["That’s a good ______.", "You have two ______s to choose from."] },
  { word: "emotion", definition: "a strong feeling", examples: ["She showed no ______.", "Fear is a powerful ______."] },
  { word: "fraction", definition: "a part of a whole", examples: ["A half is a ______.", "We learned about ______s today."] },
  { word: "motion", definition: "movement", examples: ["The car was in ______.", "They stood still without ______."] },
  { word: "action", definition: "doing something", examples: ["She took quick ______.", "It’s time for ______."] },
  { word: "lotion", definition: "a cream for the skin", examples: ["Put ______ on your sunburn.", "This ______ smells nice."] },
  { word: "portion", definition: "a part or share of something", examples: ["I had a small ______ of cake.", "Each person gets a ______."] },
  { word: "caution", definition: "care taken to avoid danger", examples: ["Use ______ near the fire.", "Walk with ______ on ice."] },
  { word: "mention", definition: "to talk about something quickly", examples: ["Did she ______ my name?", "Please ______ the date."] },
  { word: "notion", definition: "a small idea or thought", examples: ["He had a strange ______.", "That’s just a silly ______."] },
  { word: "elation", definition: "great happiness", examples: ["She felt ______ after the win.", "The team was full of ______."] }
],

"Summer 1 Week 5": [
  { word: "can’t", definition: "short for 'cannot'", examples: ["I ______ reach the top shelf.", "He ______ come today."] },
  { word: "hasn’t", definition: "short for 'has not'", examples: ["She ______ done her work.", "It ______ rained all week."] },
  { word: "I’ll", definition: "short for 'I will'", examples: ["______ help you with that.", "______ be there soon."] },
  { word: "shouldn’t", definition: "short for 'should not'", examples: ["You ______ run inside.", "He ______ shout like that."] },
  { word: "we’re", definition: "short for 'we are'", examples: ["______ going to the park.", "______ happy to help."] },
  { word: "wouldn’t", definition: "short for 'would not'", examples: ["She ______ like that.", "I ______ do that if I were you."] },
  { word: "couldn’t", definition: "short for 'could not'", examples: ["He ______ lift the box.", "They ______ see it coming."] },
  { word: "we’ll", definition: "short for 'we will'", examples: ["______ go after lunch.", "______ see you there."] },
  { word: "they're", definition: "short for 'they are'", examples: ["______ playing outside.", "______ my best friends."] },
  { word: "didn’t", definition: "short for 'did not'", examples: ["I ______ hear you.", "She ______ come yesterday."] },
  { word: "it’s", definition: "short for 'it is'", examples: ["______ raining outside.", "______ a lovely day."] },
  { word: "don’t", definition: "short for 'do not'", examples: ["Please ______ touch that.", "I ______ know the answer."] },
  { word: "won’t", definition: "short for 'will not'", examples: ["He ______ eat vegetables.", "They ______ stop laughing."] },
  { word: "aren’t", definition: "short for 'are not'", examples: ["They ______ ready yet.", "We ______ going today."] },
  { word: "doesn’t", definition: "short for 'does not'", examples: ["He ______ like carrots.", "That ______ look right."] },
  { word: "isn’t", definition: "short for 'is not'", examples: ["This ______ my book.", "That ______ fair."] }
],

"Summer 1 Week 6": [
  { word: "Megan’s", definition: "belonging to Megan", examples: ["That is ______ toy.", "We went to ______ house."] },
  { word: "child’s", definition: "belonging to a child", examples: ["This is the ______ drawing.", "The ______ toy was broken."] },
  { word: "Joe’s", definition: "belonging to Joe", examples: ["That is ______ bike.", "______ coat is blue."] },
  { word: "cat’s", definition: "belonging to a cat", examples: ["The ______ bed is soft.", "I filled the ______ bowl."] },
  { word: "Charles'", definition: "belonging to Charles", examples: ["That is ______ room.", "______ book is on the table."] },
  { word: "Ravi’s", definition: "belonging to Ravi", examples: ["______ lunch is packed.", "That is ______ pencil case."] },
  { word: "man’s", definition: "belonging to a man", examples: ["The ______ coat is red.", "I saw the ______ car."] },
  { word: "Simon’s", definition: "belonging to Simon", examples: ["That is ______ chair.", "______ jacket is on the hook."] },
  { word: "witches’", definition: "belonging to more than one witch", examples: ["The ______ hats were black.", "We saw the ______ broomsticks."] },
  { word: "brothers'", definition: "belonging to more than one brother", examples: ["The ______ toys are on the floor.", "We met the ______ friends."] },
  { word: "girl’s", definition: "belonging to a girl", examples: ["The ______ dress is pink.", "I found the ______ book."] },
  { word: "Amy’s", definition: "belonging to Amy", examples: ["______ bag is new.", "This is ______ lunchbox."] },
  { word: "dog’s", definition: "belonging to a dog", examples: ["The ______ bone is buried.", "That is the ______ toy."] },
  { word: "people’s", definition: "belonging to people", examples: ["The ______ ideas were heard.", "It was the ______ choice."] },
  { word: "children's", definition: "belonging to children", examples: ["The ______ toys were everywhere.", "That is the ______ playground."] },
  { word: "computer’s", definition: "belonging to the computer", examples: ["The ______ screen is blank.", "That is the ______ mouse."] },
  { word: "woman's", definition: "belonging to a woman", examples: ["That is the ______ coat.", "The ______ bag was lost."] },
  { word: "animal’s", definition: "belonging to an animal", examples: ["The ______ cage is open.", "That is the ______ footprint."] }
],

"Summer 1 Week 7": [
  { word: "world", definition: "everything on Earth, including all people, places, and things", examples: ["There are many different animals in the ______.", "She wants to travel around the ______ one day."] },
  { word: "playful", definition: "full of fun and enjoys having a good time", examples: ["The puppy was very ______ and chased its tail.", "He gave his sister a ______ wink."] },
  { word: "badly", definition: "in a poor or wrong way", examples: ["He wanted to win the game so ______.", "She hurt her knee ______ when she fell."] },
  { word: "station", definition: "a place where trains, buses, or other vehicles stop for people", examples: ["We waited at the ______ for our train to arrive.", "Dad picked us up from the ______ after school."] },
  { word: "I’ll", definition: "a short way to say 'I will'", examples: ["______ help you clean your room.", "Don’t worry, ______ bring my lunch."] },
  { word: "warm", definition: "a little hot, but not too hot", examples: ["The sun felt ______ on my face.", "I wore a ______ sweater in the morning."] },
  { word: "hopeless", definition: "feeling like nothing can make things better", examples: ["She felt ______ when she lost her book.", "It seemed ______ to finish all the homework in one night."] },
  { word: "argument", definition: "when people disagree and speak strongly or loudly", examples: ["They had an ______ over which game to play.", "The ______ between the two friends made them both upset."] },
  { word: "fiction", definition: "a story that is made up and not real", examples: ["He loves reading ______ about dragons.", "That movie is fun, but it’s pure ______."] },
  { word: "we’ll", definition: "a short way to say 'we will'", examples: ["______ go to the park after lunch.", "If it rains, ______ stay inside and play."] },
  { word: "award", definition: "a prize given for doing something well", examples: ["She won an ______ for her painting.", "He got an ______ for helping others."] },
  { word: "plainness", definition: "the quality of being simple or not fancy", examples: ["The ______ of the room made it feel calm.", "He liked the ______ of his clothes."] },
  { word: "merriment", definition: "lots of fun, laughter, and joy", examples: ["The party was full of ______ and music.", "You could hear the ______ from down the street."] },
  { word: "motion", definition: "movement or the act of moving", examples: ["The car was in ______ on the highway.", "She waved her hand in a gentle ______."] },
  { word: "don’t", definition: "a short way to say 'do not'", examples: ["Please ______ forget your backpack.", "I ______ like scary movies."] },
  { word: "Charles'", definition: "belonging to Charles", examples: ["______ book is on the table.", "We saw ______ new puppy at the park."] },
  { word: "Amy’s", definition: "belonging to Amy", examples: ["That is ______ favorite toy.", "We went to ______ house for dinner."] },
  { word: "children's", definition: "belonging to young boys and girls", examples: ["The ______ toys were all over the floor.", "That book is from the ______ section at the library."] }
],

"Summer 2 Week 1": [
  { word: "door", definition: "a flat object that opens and closes to let people in or out", examples: ["Please shut the ______ behind you.", "The ______ was painted red."] },
  { word: "because", definition: "used to show the reason for something", examples: ["She was happy ______ it was her birthday.", "He stayed home ______ he was sick."] },
  { word: "mind", definition: "the part of you that thinks and feels", examples: ["Use your ______ to solve the puzzle.", "Her ______ was full of ideas."] },
  { word: "children", definition: "young boys and girls", examples: ["The ______ played in the park.", "The teacher read to the ______."] },
  { word: "most", definition: "more than anything else or the majority", examples: ["______ people like ice cream.", "He got the ______ points in the game."] },
  { word: "floor", definition: "the surface you walk on in a room", examples: ["The toys were all over the ______.", "She cleaned the ______ before guests arrived."] },
  { word: "find", definition: "to discover something that was hidden or lost", examples: ["Can you ______ your shoes?", "He was happy to ______ his missing toy."] },
  { word: "behind", definition: "at the back of something", examples: ["The ball rolled ______ the sofa.", "She stood ______ the door."] },
  { word: "wild", definition: "not tamed or controlled", examples: ["The jungle is full of ______ animals.", "He had a ______ look in his eyes."] },
  { word: "both", definition: "refers to two things or people together", examples: ["I want ______ apples and bananas.", "They ______ laughed at the joke."] },
  { word: "poor", definition: "having little money or things", examples: ["The ______ man had no shoes.", "They helped the ______ family."] },
  { word: "kind", definition: "nice and caring about others", examples: ["She is very ______ to animals.", "A ______ person always helps others."] },
  { word: "child", definition: "a young person", examples: ["The ______ was drawing a picture.", "Every ______ received a gift."] },
  { word: "climb", definition: "to go up something like a tree or stairs", examples: ["He tried to ______ the wall.", "She can ______ very high."] },
  { word: "old", definition: "having lived a long time", examples: ["The ______ house looked spooky.", "He wore his ______ jacket."] },
  { word: "cold", definition: "having a low temperature", examples: ["It was very ______ this morning.", "She drank a ______ glass of water."] },
  { word: "only", definition: "no more than or just one", examples: ["He has ______ one toy left.", "This is the ______ book I like."] },
  { word: "gold", definition: "a shiny yellow metal or colour", examples: ["She wore a ______ necklace.", "The trophy was made of ______."] }
],

"Summer 2 Week 2": [
  { word: "every", definition: "each one in a group", examples: ["She opened ______ gift.", "He ran to ______ corner of the room."] },
  { word: "great", definition: "very good or large", examples: ["You did a ______ job!", "The mountain was very ______."] },
  { word: "pretty", definition: "nice to look at", examples: ["She wore a ______ dress.", "The garden looked ______ in spring."] },
  { word: "fast", definition: "able to move quickly", examples: ["The car is very ______.", "She ran as ______ as she could."] },
  { word: "father", definition: "a male parent", examples: ["My ______ is cooking dinner.", "His ______ is very kind."] },
  { word: "everybody", definition: "all the people", examples: ["______ was happy at the party.", "I told ______ the news."] },
  { word: "break", definition: "to separate or smash something", examples: ["Be careful not to ______ the glass.", "He tried not to ______ his toy."] },
  { word: "beautiful", definition: "very nice to see, hear, or feel", examples: ["That was a ______ song.", "She has a ______ smile."] },
  { word: "last", definition: "the final one", examples: ["He was the ______ in line.", "This is the ______ day of school."] },
  { word: "class", definition: "a group of students", examples: ["Our ______ went on a trip.", "She is the teacher of our ______."] },
  { word: "even", definition: "equal or flat; also used to show surprise", examples: ["The ground is nice and ______.", "I can't ______ believe it!"] },
  { word: "steak", definition: "a thick piece of meat", examples: ["He ordered a juicy ______.", "They cooked the ______ on the grill."] },
  { word: "after", definition: "coming later than something else", examples: ["We’ll go home ______ lunch.", "He arrived just ______ you."] },
  { word: "past", definition: "gone by in time or already happened", examples: ["We walked right ______ the park.", "The story is set in the distant ______."] },
  { word: "grass", definition: "the green plants that grow on the ground", examples: ["The cow ate the ______.", "They played on the ______."] },
  { word: "pass", definition: "to go by or hand over", examples: ["Please ______ the ball.", "We watched the train ______ by."] },
  { word: "plant", definition: "a living thing that grows in the ground", examples: ["I watered the ______.", "That ______ has big leaves."] },
  { word: "path", definition: "a way or track to walk on", examples: ["We followed the forest ______.", "Stay on the ______ through the park."] }
],

"Summer 2 Week 3": [
  { word: "move", definition: "to go from one place to another", examples: ["We will ______ to a new house.", "Please ______ your chair."] },
  { word: "sure", definition: "confident or certain about something", examples: ["Are you ______ about the answer?", "I’m ______ it will rain today."] },
  { word: "could", definition: "used to show something possible or allowed", examples: ["I ______ help you with that.", "He ______ run very fast."] },
  { word: "who", definition: "used to ask or talk about a person", examples: ["______ is knocking at the door?", "The girl ______ won the race is my friend."] },
  { word: "many", definition: "a large number of", examples: ["There are ______ stars in the sky.", "She has ______ toys."] },
  { word: "prove", definition: "to show something is true", examples: ["Can you ______ your point?", "She had to ______ she did the homework."] },
  { word: "sugar", definition: "a sweet white or brown ingredient in food", examples: ["He put ______ in his tea.", "Too much ______ is not healthy."] },
  { word: "should", definition: "used to give advice or show what’s right", examples: ["You ______ brush your teeth.", "We ______ be careful with scissors."] },
  { word: "whole", definition: "all of something, not just a part", examples: ["She ate the ______ apple.", "He read the ______ book in one day."] },
  { word: "clothes", definition: "items you wear like shirts or trousers", examples: ["Pack your ______ for the trip.", "Her ______ are in the drawer."] },
  { word: "improve", definition: "to make something better", examples: ["She wants to ______ her spelling.", "Practice can ______ your skills."] },
  { word: "eye", definition: "the body part used to see", examples: ["I hurt my ______.", "She closed one ______ and winked."] },
  { word: "would", definition: "used to show a choice or future action", examples: ["I ______ like some juice, please.", "He said he ______ help us."] },
  { word: "any", definition: "one or more, no matter which", examples: ["Do you have ______ paper?", "Pick ______ book you like."] },
  { word: "busy", definition: "having lots to do", examples: ["Dad is very ______ at work.", "The bee was ______ all day."] },
  { word: "people", definition: "more than one person", examples: ["Lots of ______ came to the show.", "The ______ were cheering loudly."] },
  { word: "water", definition: "a clear liquid that we drink", examples: ["She drank a glass of ______.", "Please don’t waste ______."] },
  { word: "again", definition: "one more time", examples: ["Let’s play the game ______.", "He asked the question ______."] }
],

"Summer 2 Week 4": [
  { word: "camel", definition: "a large desert animal with a hump on its back", examples: ["The ______ walked across the sand.", "A ______ can go days without water."] },
  { word: "travel", definition: "to go from one place to another", examples: ["We will ______ to the beach.", "They love to ______ by train."] },
  { word: "trowel", definition: "a small hand tool for digging", examples: ["He used a ______ to plant flowers.", "She brought her ______ to the garden."] },
  { word: "peel", definition: "to take off the outer layer", examples: ["Please ______ the orange.", "He helped ______ the potatoes."] },
  { word: "label", definition: "a tag or sticker that tells you about something", examples: ["Check the ______ on the bottle.", "She wrote her name on the ______."] },
  { word: "tunnel", definition: "a long path under the ground", examples: ["The train went through the ______.", "We drove into a dark ______."] },
  { word: "towel", definition: "a cloth used to dry things", examples: ["She dried her hands with a ______.", "He brought a beach ______."] },
  { word: "hotel", definition: "a place where people stay while traveling", examples: ["They stayed at a big ______.", "The ______ had a swimming pool."] },
  { word: "level", definition: "a flat height or stage of something", examples: ["This video game has a new ______.", "The table is not on the same ______."] },
  { word: "wheel", definition: "a round object that turns to help things move", examples: ["The car has a flat ______.", "He turned the ______ of the bike."] },
  { word: "model", definition: "a small copy or version of something", examples: ["He built a ______ of a rocket.", "She showed us a ______ of the house."] },
  { word: "refuel", definition: "to fill again with fuel or energy", examples: ["The plane had to ______.", "Let’s ______ before the long trip."] },
  { word: "parcel", definition: "a package or box sent in the post", examples: ["A ______ came in the mail.", "He wrapped the ______ with paper."] },
  { word: "squirrel", definition: "a small animal with a bushy tail that climbs trees", examples: ["A ______ ran across the road.", "The ______ hid nuts in the ground."] },
  { word: "tinsel", definition: "shiny string used to decorate", examples: ["They hung ______ on the tree.", "The ______ sparkled in the lights."] },
  { word: "kneel", definition: "to go down on your knees", examples: ["He had to ______ to tie his shoe.", "Please ______ quietly during the prayer."] },
  { word: "angel", definition: "a kind and beautiful spirit or being", examples: ["The statue looked like an ______.", "She dressed as an ______ for the play."] },
  { word: "channel", definition: "a path for water or a TV station", examples: ["Switch to your favourite TV ______.", "The water flows through the ______."] }
],

"Summer 2 Week 5": [
  { word: "Megan’s", definition: "belonging to Megan", examples: ["That is ______ backpack.", "We went to ______ birthday party."] },
  { word: "child’s", definition: "belonging to a young person", examples: ["The ______ toy was broken.", "I found the ______ drawing."] },
  { word: "Joe’s", definition: "belonging to Joe", examples: ["That is ______ football.", "I borrowed ______ pencil."] },
  { word: "cat’s", definition: "belonging to a cat", examples: ["The ______ tail is fluffy.", "We filled the ______ bowl."] },
  { word: "Charles'", definition: "belonging to Charles", examples: ["That is ______ book on the desk.", "We went to ______ house after school."] },
  { word: "Ravi’s", definition: "belonging to Ravi", examples: ["That is ______ chair.", "I saw ______ lunchbox on the table."] },
  { word: "man’s", definition: "belonging to a man", examples: ["The ______ hat was old and torn.", "We saw the ______ car drive away."] },
  { word: "Simon’s", definition: "belonging to Simon", examples: ["That is ______ new jacket.", "I liked ______ idea best."] },
  { word: "witches’", definition: "belonging to more than one witch", examples: ["The ______ hats were pointy.", "All the ______ brooms were flying."] },
  { word: "brothers'", definition: "belonging to more than one brother", examples: ["The ______ toys were everywhere.", "We met the ______ friends."] },
  { word: "girl’s", definition: "belonging to one girl", examples: ["That is the ______ dress.", "We saw the ______ painting."] },
  { word: "Amy’s", definition: "belonging to Amy", examples: ["I borrowed ______ book.", "That is ______ seat."] },
  { word: "dog’s", definition: "belonging to a dog", examples: ["The ______ bone is buried.", "We washed the ______ bed."] },
  { word: "people’s", definition: "belonging to a group of people", examples: ["The ______ voices were loud.", "We heard the ______ opinions."] },
  { word: "children's", definition: "belonging to young boys and girls", examples: ["The ______ toys were on the floor.", "That is the ______ reading area."] },
  { word: "computer’s", definition: "belonging to a computer", examples: ["The ______ screen went dark.", "I fixed the ______ speaker."] },
  { word: "woman's", definition: "belonging to a woman", examples: ["That is the ______ umbrella.", "We helped carry the ______ bag."] },
  { word: "animal’s", definition: "belonging to an animal", examples: ["We cleaned the ______ cage.", "The ______ tail wagged."] }
],

"Summer 2 Week 6": [
  { word: "there", definition: "used to show a place or position", examples: ["The ball is over ______.", "She sat ______ on the bench."] },
  { word: "here", definition: "in this place", examples: ["Come and sit ______.", "I live ______ with my family."] },
  { word: "quiet", definition: "making little or no noise", examples: ["Please be ______ in the library.", "The baby is sleeping, so stay ______."] },
  { word: "won", definition: "succeeded or came first in something", examples: ["She ______ the race.", "Our team ______ the match."] },
  { word: "to", definition: "shows direction or purpose", examples: ["We walked ______ the park.", "He gave the book ______ her."] },
  { word: "their", definition: "belonging to them", examples: ["They lost ______ keys.", "The children played with ______ toys."] },
  { word: "hear", definition: "to use your ears to notice sound", examples: ["Can you ______ that noise?", "I ______ music coming from outside."] },
  { word: "see", definition: "to use your eyes to look at something", examples: ["I can ______ the moon.", "Did you ______ the bird fly away?"] },
  { word: "sun", definition: "the bright star that gives us light and heat", examples: ["The ______ is shining.", "We sat in the ______ at the beach."] },
  { word: "two", definition: "the number 2", examples: ["I have ______ pencils.", "She bought ______ apples."] },
  { word: "they’re", definition: "short for 'they are'", examples: ["______ going to the zoo.", "I think ______ very kind."] },
  { word: "quite", definition: "a little or very, depending on the sentence", examples: ["That was ______ a surprise!", "She is ______ good at drawing."] },
  { word: "sea", definition: "a large area of salty water", examples: ["We swam in the ______.", "The boat sailed across the ______."] },
  { word: "son", definition: "a boy child", examples: ["That man has one ______.", "Her ______ is very tall."] },
  { word: "be", definition: "to exist or happen", examples: ["It will ______ sunny tomorrow.", "I want to ______ a teacher."] },
  { word: "bee", definition: "a flying insect that makes honey", examples: ["A ______ landed on the flower.", "The ______ buzzed past me."] },
  { word: "blue", definition: "a colour like the sky", examples: ["She wore a ______ coat.", "The sky turned ______."] },
  { word: "blew", definition: "past tense of 'blow', meaning moved air", examples: ["The wind ______ my hat away.", "She ______ out the candles."] }
],

"Summer 2 Week 7": [
  { word: "because", definition: "used to show the reason for something", examples: ["She was happy ______ it was her birthday.", "He stayed home ______ he was sick."] },
  { word: "beautiful", definition: "very nice to see, hear, or feel", examples: ["That was a ______ song.", "She has a ______ smile."] },
  { word: "many", definition: "a large number of", examples: ["There are ______ stars in the sky.", "She has ______ toys."] },
  { word: "trowel", definition: "a small hand tool for digging", examples: ["He used a ______ to plant flowers.", "She brought her ______ to the garden."] },
  { word: "cat’s", definition: "belonging to a cat", examples: ["The ______ tail is fluffy.", "We filled the ______ bowl."] },
  { word: "father", definition: "a male parent", examples: ["My ______ is cooking dinner.", "His ______ is very kind."] },
  { word: "behind", definition: "at the back of something", examples: ["The ball rolled ______ the sofa.", "She stood ______ the door."] },
  { word: "clothes", definition: "items you wear like shirts or trousers", examples: ["Pack your ______ for the trip.", "Her ______ are in the drawer."] },
  { word: "hotel", definition: "a place where people stay while traveling", examples: ["They stayed at a big ______.", "The ______ had a swimming pool."] },
  { word: "witches’", definition: "belonging to more than one witch", examples: ["The ______ hats were pointy.", "All the ______ brooms were flying."] },
  { word: "class", definition: "a group of students", examples: ["Our ______ went on a trip.", "She is the teacher of our ______."] },
  { word: "child", definition: "a young person", examples: ["The ______ was drawing a picture.", "Every ______ received a gift."] },
  { word: "busy", definition: "having lots to do", examples: ["Dad is very ______ at work.", "The bee was ______ all day."] },
  { word: "mantel", definition: "a shelf above a fireplace", examples: ["The clock sat on the ______.", "She hung stockings on the ______."] },
  { word: "people’s", definition: "belonging to a group of people", examples: ["The ______ voices were loud.", "We heard the ______ opinions."] },
  { word: "bee", definition: "a flying insect that makes honey", examples: ["A ______ landed on the flower.", "The ______ buzzed past me."] },
  { word: "blue", definition: "a colour like the sky", examples: ["She wore a ______ coat.", "The sky turned ______."] },
  { word: "blew", definition: "past tense of 'blow', meaning moved air", examples: ["The wind ______ my hat away.", "She ______ out the candles."] }
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
