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
