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
