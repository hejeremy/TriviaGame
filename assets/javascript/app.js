/* Trivia Game
 * Author: Jeremy He
 * Purpose: HW Assignment
 *
 * Created: 6-13-2017
 * Last Update: 6-14-2017
 */

//Holds all trivia questions
var questionsMH = {
    question1: {
        question: 'What Lynian species of cats try to hit you and steal your items?',
        correct: 'Melynx',
        incorrect: ['Felyne', 'Shakalaka', 'Uruki', 'Palico'],
    },
    question2: {
        question: 'Which monster cannot fly?',
        correct: 'Glavenus',
        incorrect: ['Malfestio', 'Rathian', 'Astalos', 'Seltas'],
    },
    question3: {
        question: 'What combination of items creates a Mega Potion?',
        correct: 'Potion + Honey',
        incorrect: ['Potion + Blue Mushroom', 'Herb + Tropical Berry', 'Herb + Mega Dash Juice', 'Potion + Nitroshroom'],
    },
    question4: {
        question: 'Which weapon cannot block?',
        correct: 'Switch Axe',
        incorrect: ['Greatsword', 'Charge Blade', 'Heavy Bowgun', 'Lance'],
    },
    question5: {
        question: 'Which armor set gives the armor skill Evade Extender?',
        correct: 'Silverwind',
        incorrect: ['Dreadking', 'Drilltusk', 'Crystalbeard', 'Thunderlord'],
    },
    question6: {
        question: 'What aquatic monster runs like a chicken?',
        correct: 'Plesioth',
        incorrect: ['Yian Garuga', 'Yian Kut-ku', 'Rathalos', 'Lagiacrus'],
    },
    question7: {
        question: 'Which monster is able to inflate itself and bounce?',
        correct: 'Zamtrios',
        incorrect: ['Lagombi', 'Gammoth', 'Khezu', 'Tigrex'],
    },
    question8: {
        question: 'Which monster is known for using Fulgurbugs to charge up and unleash devastating lightning strikes?',
        correct: 'Zinogre',
        incorrect: ['Astalos', 'Lagiacrus', 'Gendrome', 'Rajang'],
    },
    question9: {
        question: 'What do you get when you combine Blue Mushroom + Herb?',
        correct: 'Potion',
        incorrect: ['Dash Juice', 'Antidote', 'Cleanser', 'Energy Drink'],
    },
    question10: {
        question: 'Which monster has two break stages for its tail?',
        correct: 'Uragaan',
        incorrect: ['Rathalos', 'Deviljho', 'Nargacuga', 'Barioth'],
    },
    question11: {
        question: 'What is the maximum number of Herbs you can carry in your inventory?',
        correct: '10',
        incorrect: ['3', '20', '60', '99'],
    },
    question12: {
        question: 'Which monster can have it\'s tail cut off?',
        correct: 'Barroth',
        incorrect: ['Great Jaggi', 'Qurupeco', 'Plesioth'],
    },
    question13: {
        question: 'What element is a Zinogre weakest to?',
        correct: 'Ice',
        incorrect: ['Water', 'Fire', 'Thunder', 'Dragon'],
    },
    question14: {
        question: 'Which game was underwater combat introduced?',
        correct: 'Monster Hunter Tri',
        incorrect: ['Monster Hunter 4U', 'Monster Hunter 3U', 'Monster Hunter Generations', 'Monster Hunter 4'],
    },
    question15: {
        question: 'Which game was monster mounting introduced?',
        correct: 'Monster Hunter 4',
        incorrect: ['Monster Hunter Tri', 'Monster Hunter 3U', 'Monster Hunter Generations', 'Monster Hunter 4U'],
    },
    question16: {
        question: 'Which armor skill prevents bouncing when hitting a monster?',
        correct: 'Mind\'s Eye',
        incorrect: ['Razor Sharp', 'Silver Bullet', 'Weakness Exploit', 'Focus'],
    },
    question17: {
        question: 'Which armor skill decreases the rate you lose weapon sharpness?',
        correct: 'Razor Sharp',
        incorrect: ['Weakness Exploit', 'Focus', 'Mind\'s Eye', 'Bludgeoner'],
    },
    question18: {
        question: 'Which monster can inflict poison?',
        correct: 'Iodrome',
        incorrect: ['Gendrome', 'Giadrome', 'Velocidrome', 'Bulldrome'],
    },
    question19: {
        question: 'Which armor skill increases the damage you deal when a monster in the area is enraged?',
        correct: 'Challenger',
        incorrect: ['Ruthlessness', 'Adrenaline', 'Peak Performance', 'Expert'],
    },
    question20: {
        question: 'Which story monster do you come across first in Monster Hunter Generations?',
        correct: 'Great Maccao',
        incorrect: ['Great Jaggi', 'Great Baggi', 'Great Wroggi', 'Great Palico'],
    },
    question21: {
        question: 'What gender is a Rathian?',
        correct: 'Female',
        incorrect: ['Male', 'Hermaphrodite'],
    },
    question22: {
        question: 'What materials are generally needed to upgrade armor?',
        correct: 'All of these',
        incorrect: ['Event Tickets', 'Ores', 'Monster Parts'],
    },
    question23: {
        question: 'What monster looks like a big snow bunny?',
        correct: 'Lagombi',
        incorrect: ['Nargacuga', 'Zamtrios', 'Khezu', 'Arzuros'],
    },
    question24: {
        question: 'What monster is known for eating lots of honey?',
        correct: 'Arzuros',
        incorrect: ['Nerscylla', 'Zamtrios', 'Kecha Wacha', 'Lagombi'],
    },
    question25: {
        question: 'What monster resorts to eating it\'s own tail when it is weakend?',
        correct: 'Deviljho',
        incorrect: ['Nargacuga', 'Seregios', 'Gigginox', 'Tigerx'],
    },
    question26: {
        question: 'Which elder dragon spreads the Frenzy virus?',
        correct: 'Shagaru Magala',
        incorrect: ['Fatalis', 'Chameleos', 'Alatreon', 'Dalamadur'],
    },
    question27: {
        question: 'Which monster species among these is the largest monster?',
        correct: 'Jhen Mohran',
        incorrect: ['Great Jaggi', 'Kirin', 'Alatreon', 'Lagiacrus'],
    },
    question28: {
        question: 'Which monster can steal your items when they hit you?',
        correct: 'Chameleos',
        incorrect: ['Teostra', 'Kirin', 'Kushala Daora', 'Lunastra'],
    },
    question29: {
        question: 'Which weapon is most commonly used during introduction tutorials?',
        correct: 'Sword and Shield',
        incorrect: ['Greatsword', 'Hammer', 'Longsword', 'Bow'],
    },
    question30: {
        question: 'What consumable item does not usually recover stamina?',
        correct: 'Max Potion',
        incorrect: ['Dash Juice', 'Well-done Steak', 'Rare Steak', 'Rations'],
    },
}

var questionsBB = {
    question1: {
        question: 'Who is the first boss you must fight to continue the story?',
        correct: 'Father Gascoigne',
        incorrect: ['Cleric Beast', 'Blood-starved Beast', 'Vicar Amelia'],
    },
    question2: {
        question: 'Which trick weapon is not one of the three starting weapons?',
        correct: 'Rifle Spear',
        incorrect: ['Saw Cleaver', 'Hunter Axe', 'Threaded Cane'],
    },
    question3: {
        question: 'Which boss does not gain new forms midfight?',
        correct: 'Vicar Amelia',
        incorrect: ['Father Gascoigne', 'Gehrman, the First Hunter', 'Blood-starved Beast'],
    },
    question4: {
        question: 'Which boss is most widely considered as the last story boss of the Old Hunters DLC?',
        correct: 'Orphan of Kos',
        incorrect: ['Living Failures', 'Ludwig, the Accursed', 'Lady Maria of the Astral Clocktower', 'Laurence, the First Vicar'],
    },
    question5: {
        question: 'What is the highest scaling stat of the Whirligig Saw',
        correct: 'Strength',
        incorrect: ['Sklll', 'Arcane', 'Bloodtinge', 'Vitality', 'Endurance'],
    },
    question6: {
        question: 'Which stat increases your resistance to poison?',
        correct: 'Endurance',
        incorrect: ['Vitality', 'Bloodtinge', 'Strength', 'Arcane', 'Skill'],
    },
    question7: {
        question: 'What weapon was Lady Maria known for wielding?',
        correct: 'Rakuyo',
        incorrect: ['Chikage', 'Bloodletter', 'Reiterpallasch'],
    },
    question8: {
        question: 'What weapon was Ludwig known for wielding?',
        correct: 'Holy Moonlight Sword',
        incorrect: ['Ludwig\'s Holy Blade', 'Burial Blade', 'Blade of Mercy'],
    },
    question9: {
        question: 'How many enemies do you battle in the Shadow of Yharnam boss fight?',
        correct: '3',
        incorrect:['1', '2', '4', '5'],
    },
    question10: {
        question: 'What item does Martyr Logarius drop when you defeat him?',
        correct: 'Crown of Ilusions',
        incorrect: ['Mensis Cage', 'Old Hunter Badge', 'Oedon Tomb Key'],
    },
    question11: {
        question: 'How many additional enemies spawn in the arena where you battle One Reborn?',
        correct: '6',
        incorrect: ['2', '4', '8', '10'],
    },
    question12: {
        question: 'Who is the character known as Viola?',
        correct: 'Gascoigne\'s wife',
        incorrect: ['Gascoigne\'s daughter', 'Gascoigne\'s mistress', 'Gascoigne\'s mother'],
    },
    question13: {
        question: 'Which NPC hunter sounds rather jovial when you talk to him?',
        correct: 'Alfred',
        incorrect: ['Simon', 'Valtr', 'Djura'],
    },
    question14: {
        question: 'Which boss gives you a different message from the others when you defeat it.',
        correct: 'Amygdala',
        incorrect: ['Moon Presence', 'Orphan of Kos', 'Mergo\'s Wet Nurse'],
    },
    question15: {
        question: 'Which covenant is the considered the greatest enemy of the Cainhurst Vilebloods?',
        correct: 'Executioners',
        incorrect: ['The League', 'Hunter of Hunters', 'The Blood Beast', 'Lumenwood Kin'],
    },
    question16: {
        question: 'What is the name of the Vileblood queen?',
        correct: 'Annalise',
        incorrect: ['Arianna', 'Maria', 'Yharnam'],
    },
    question17: {
        question: 'Which of these characters cannot give you special consumable Blood Vials?',
        correct: 'Eileen',
        incorrect: ['Arianna', 'Adella', 'Adeline', 'Iosefka'],
    },
    question18: {
        question: 'Which NPC turns out to be a monster in disguise?',
        correct: 'Suspicious Beggar',
        incorrect: ['Skeptical Man', 'Oedon Chapel Dweller', 'Lonely Old Woman'],
    },
    question19: {
        question: 'After you defeat this boss, the Blood Moon is revealed.',
        correct: 'Rom, the Vacuous Spider',
        incorrect: ['Ebrietas, Daughter of the Cosmos', 'Moon Presence', 'Micolash, Host of the Nightmare'],
    },
    question20: {
        question: 'What is the most common healing item in Bloodborne?',
        correct: 'Blood Vial',
        incorrect: ['Estus Flask', 'Health Potion', 'Food'],
    },
    question21: {
        question: 'What is the most common resource consumed when making ranged attacks in Bloodborne?',
        correct: 'Quicksilver Bullets',
        incorrect: ['Mana', 'Arcane Haze', 'Blood Echos', 'Insight'],
    },
    question22: {
        question: 'What is the most common currency used in Bloodborne?',
        correct: 'Blood Echoes',
        incorrect: ['Insight', 'Souls', 'Shining Coins'],
    },
    question23: {
        question: 'Which one of these is not a special attack modifier.',
        correct: 'Forgotten',
        incorrect: ['Serrated', 'Righteous'],
    },
    question24: {
        question: 'Which of these bosses is the one most players first fight?',
        correct: 'Cleric Beast',
        incorrect: ['Loran Darkbeast', 'Abhorrent Beast', 'Blood-starved Beast'],
    },
    question25: {
        question: 'What type of Coldblood gives the most Blood Echoes?',
        correct: 'Kin Coldblood',
        incorrect: ['Coldblood Dew', 'Thick Coldblood', 'Frenzied Coldblood'],
    },
    question26: {
        question: 'Which weapon Badge is required to buy Ludwig\'s Holy Blade?',
        correct: 'Radiant Sword Hunter Badge',
        incorrect: ['Saw Hunter Badge', 'Spark Hunter Badge', 'Powder Keg Hunter Badge', 'Sword Hunter Badge'],
    },
    question27: {
        question: 'Which weapon Badge is required to buy the Stake Driver?',
        correct: 'Powder Keg Hunter Badge',
        incorrect: ['Firing Hammer Badge', 'Wheel Hunter Badge', 'Old Hunter Badge', 'Sword Hunter Badge'],
    },
    question28: {
        question: 'What item allows you to join another player\'s world and co-op with them?',
        correct: 'Small Resonant Bell',
        incorrect: ['Old Hunter Bell', 'Choir Bell', 'Beckoning Bell'],
    },
    question29: {
        question: 'Which location do you battle Micholash, Host of the Nightmare?',
        correct: 'Nightmare of Mensis',
        incorrect: ['The Hunter\'s Nightmare', 'Nightmare Frontier', 'Nightmare Cathedral'],
    },
    question30: {
        question: 'What is the name of central hub location where hunters can rest, buy supplies, and level up?',
        correct: 'Hunter\'s Dream',
        incorrect: ['Abandoned Old Workshop', 'Hunter\'s Workshop', 'Hunter\'s Nightmare', 'Hunter\'s Home'],
    },
    question31: {
        question: 'What is the name of the old NPC hunter who protects the beasts of Old Yharnam?',
        correct: 'Djura',
        incorrect: ['Valtr', 'Alfred', 'Simon', 'Gehrman'],
    },
    question32: {
        question: 'Who is the NPC that welcomes and guides new hunters in the dream?',
        correct: 'Gehrman',
        incorrect: ['Valtr', 'Alfred', 'Simon', 'Djura'],
    },
    questionXX: {
        question: 'What attack animation does your hunter do when performing a backstab Visceral Attack on a Goliath Pig?',
        correct: 'You fist it... in the butthole',
        incorrect: ['You perform a massive blow to it\'s backside with your weapon', 'You knock it\'s legs out from under it', 'You jump onto it\'s back and deal a surgical strike to the back of its head'],
    },
}

var questionsCooking = {
    question1: {
        question: 'When boiling water, what does adding salt do?',
        correct: 'Makes the water boil at a higher temperature',
        incorrect: ['Makes the water boil faster', 'Makes the water boil at a lower temperature'],
    },
    question2: {
        question: 'What does the term \"braise\" mean?',
        correct: 'Frying lightly and then stewing it slowly in a closed container',
        incorrect: ['Grill quickly on both sides', 'A quick heating on the pan'],
    },
    question3: {
        question: 'How can you fix an over-sweetened dish?',
        correct: 'Add salt and lemon juice',
        incorrect: ['Add some water', 'Add flour'],
    },
    question4: {
        question: 'Which type of wood is not good for smoking foods on an outdoor grill?',
        correct: 'Softwoods',
        incorrect: ['Fruitwoods', 'Hardwoods'],
    },
    question5: {
        question: 'Pesto sauce consists of basil, Parmesan, olive oil, salt, and:',
        correct: 'Pine Nuts',
        incorrect: ['Garlic', 'Pepper'],
    },
    question6: {
        question: 'Which is the most sanitary type of cutting board?',
        correct: 'Wood',
        incorrect: ['Plastic'],
    },
    question7: {
        question: 'How to make sure your boiled eggs are peeled easily?',
        correct: 'Put them in cold water after boiling',
        incorrect: ['Boil them no longer than 5 minutes', 'Add salt to the water while boiling them'],
    },
    question8: {
        question: 'Tomato is:',
        correct: 'A fruit',
        incorrect: ['A vegetable'],
    },
    question9: {
        question: 'Filet mignon comes from the:',
        correct: 'Loin',
        incorrect: ['Leg', 'Belly'],
    },
    question10: {
        question: 'What is Goulash?',
        correct: 'Beef Stew',
        incorrect: ['Romanian chicken stew with vegetables', 'Smoked steak'],
    },
    question11: {
        question: 'Which of the following types of cheese is NOT considered a \"fresh\" cheese?',
        correct: 'Brie',
        incorrect: ['Cream Cheese', 'Ricotta', 'Mozzarella'],
    },
    question12: {
        question: 'A bread recipe calls for instant yeast and you have a packet of rapid rise yeast. Can you use it?',
        correct: 'Sure, it\'s the same',
        incorrect: ['No way!', 'Yes, but use only 25% of the amount'],
    },
    question13: {
        question: 'What is a blond roux?',
        correct: 'A thickening agent made of flour and butter',
        incorrect: ['Mix of spices', 'A way of cooking fish'],
    },
    question14: {
        question: 'A baby Portobello mushroom is known as a:',
        correct: 'Cremini',
        incorrect: ['Portobellini', 'Porcini', 'Enoki'],
    },
    question15: {
        question: 'Which fruit will ripen only after picking?',
        correct: 'Avocados',
        incorrect: ['Peaches', 'Cherries'],
    },
    question16: {
        question: 'To \"bard\" a roast means to:',
        correct: 'Wrap it in fat',
        incorrect: ['Tie it', 'Simmer it in sauce'],
    },
    question17: {
        question: 'What is the name given to beef cooked in puff pastry?',
        correct: 'Beef Wellington',
        incorrect: ['Carne asada', 'Baeckeoffe'],
    },
    question18: {
        question: 'What method will NOT prevent tears while cutting onions?',
        correct: 'Looking at running water',
        incorrect: ['Lighting a candle', 'Chewing gum', 'Freezing the onion'],
    },
    question19: {
        question: 'When a chef juliennes a fruit or vegetable, the result looks like which of the following?',
        correct: 'Matchsticks',
        incorrect: ['Coins', 'Crowns', 'Cubes'],
    },
    question20: {
        question: 'When apples or potatoes are peeled and sliced, the bits will turn brown if not used immediately. To prevent this, they may be soaked in water mixed with lemon juice or white vinegar. What is this preventative measure called?',
        correct: 'Acidulation',
        incorrect: ['Steeping', 'Reconstituting', 'Blanching'],
    },
    question21: {
        question: 'Slightly underripe fruits can be improved for service by maceration. What does \"macerate\" mean?',
        correct: 'To soften by soaking or steeping in a liquid such as alcohol or with sugar',
        incorrect: ['To warm briefly in a microwave oven', 'To chew', 'To leave on a sunny windowsill for several days'],
    },
    question22: {
        question: 'What does \"pare\" mean?',
        correct: 'To remove the peeling or outer skin of a fruit or vegetable with a knife',
        incorrect: ['To divide in half by cutting into two pieces', 'To slice into thin strips', 'To remove the bones from meat or fish'],
    },
    question23: {
        question: 'What does tempering an egg mean?',
        correct: 'To slowly add a bit of a hot liquid to beaten eggs',
        incorrect: ['To bake a whole egg in a moderate oven', 'To crack the eggs angrily', 'To whip vigorously to incorporate air into eggs'],
    },
    question24: {
        question: 'When a recipe directs a cook to pulse food, what should the cook do?',
        correct: 'Turn the blender or food processor on and off rapidly',
        incorrect: ['When cooking live food such as lobster, see if its heart is still beating', 'Mix the food by lifting and turning it until well combined', 'Whip the food, pausing between each circular stroke'],
    },
    question25: {
        question: 'The chef hands you a bunch of basil and asks you to prepare a chiffonade. What should you do with it?',
        correct: 'Stack and then roll the leaves. Cut them into the thinnest possible strips.',
        incorrect: ['Puree them and then beat them with a whisk into a light foam.', 'Deep-fry them until they are like thin crisp pieces of paper', 'Finely chop them. Mix them with water and sugar to produce a refreshing drink.'],
    },
    question26: {
        question: 'When meat is browned in a pan, bits of caramelized juices \(called fond\) remain in the pan. These may be dissolved in a liquid \(such as wine, water, stock or vinegar\) to form the basis for a sauce. What is this process called?',
        correct: 'Deglazing',
        incorrect: ['Steeping', 'Infusion', 'Sweating'],
    },
    question27: {
        question: 'What does \"blanch\" mean as a culinary term?',
        correct: 'To partially cook food in steam or boiling water and then plunge it in ice water',
        incorrect: ['To restore a dehydrated food by soaking it in water or other liquid', 'To coat food with white breadcrumbs before frying or baking', 'To quickly fry food in a bit of fat in an open pan over high heat'],
    },
    question28: {
        question: 'When vinegar or citrus juice is whisked into oil to form a thickened liquid, what is the resulting combination of ingredients called?',
        correct: 'An emulsion',
        incorrect: ['A cream', 'A glaze', 'A puree'],
    },
}

//CSS and background values
var styleValues = {
    r: 175,
    g: 225,
    b: 255,
    a: 0.5,
    icon: 'potion.png',
    title: 'Monster Hunter Trivia',
    background: "backgroundMonsterHunter.jpg",
    cursor: "hbg.png",
}

//Interval values

var secondCounter;
var resetTime = 20;
var seconds = resetTime;

//Trivia list
var currentTrivia = 0;
var triviaList = [];
triviaList.push('triviaMH');
triviaList.push('triviaBB');
triviaList.push('triviaCooking');

//Question values
var triviaQuestions = loadTrivia(triviaList[currentTrivia]);
var objectLength = 0;
var triviaKeys = loadKeys(triviaQuestions);
var score = 0;
var numberIncorrect = 0;
var currentResponse = false;

function loadTrivia(inputString) {
    switch(inputString) {
        case 'triviaMH':
            return questionsMH;
            break;
        case 'triviaBB':
            return questionsBB;
            break;
        case 'triviaCooking':
            return questionsCooking;
            break;
        default:
            break;
    }
}

//Question tracking variables
var currentQuestion = 0;
var totalQuestionsUsed = Math.min(triviaQuestions.length, 10);

//Interval functions
var intervalHolder = {
    stopSecondCounter: function() {
        clearInterval(secondCounter);
    },
    startSecondCounter: function() {
        secondCounter = setInterval(intervalHolder.countDown, 1000);
        timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");
    },

    countDown: function() {
        seconds--;
        timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");

        if (seconds > 0) {
            //console.log(seconds);
        } else {
            intervalHolder.stopSecondCounter();
            handleTrivia();
        }
    },

    timeConverter(inputValue) {
        var minuteString = Math.floor(seconds/60).toString();
        var secondString = (seconds % 60).toString();

        if (secondString.length < 2) {
            secondString = '0'+ secondString;
        }
        if (minuteString.length < 2) {
            minuteString = '0' + minuteString;
        }

        //Make --> 130 = '02:10'
        return minuteString + ':' + secondString;
    },

    reset: function() {
        seconds = resetTime;
        question = 0;
    },
}

//Initial setups
var triviaEnded = true;
var showAnswer = false;
var currentAnswer = 'N/A';
var currentCorrect = 'N/A';
var answered = false;
var timer = $('#timer');
var questionHolder = $('#questionHolder');
var answerHolder = $('#answerHolder');
var scoreHolder = $('#scoreHolder');
var holderQA = $('#holderQA');

//Permanent buttons
var startButton;
var nextButton;
var resetButton;
var toggleButton;
setPermanentButtons();
setPermanentEvents();

resetFunction();

//Set non removed buttons
function setPermanentButtons() {
    startButton = $('<button>');
    startButton.attr('id','startButton');
    startButton.addClass('btn btn-default');
    startButton.text('Start');
    $('#buttonHolder1').append(startButton);

    toggleButton = $('<button>');
    toggleButton.attr('id','toggleButton');
    toggleButton.addClass('btn btn-default');
    toggleButton.text('Different Trivia');
    $('#buttonHolder1').append(toggleButton);

    nextButton = $('<button>');
    nextButton.attr('id','nextButton');
    nextButton.addClass('btn btn-default');
    nextButton.text('Next');
    $('#buttonHolder2').append(nextButton);
    nextButton.css('visibility', 'hidden');

    resetButton = $('<button>');
    resetButton.attr('id','resetButton');
    resetButton.addClass('btn btn-default');
    resetButton.text('Play Again');
    $('#buttonHolder3').append(resetButton);
    resetButton.css('visibility', 'hidden');
}

//Sets permanent buttons
function setPermanentEvents() {
    startButton.mouseup(startFunction);
    toggleButton.mouseup(toggleFunction);
    nextButton.mouseup(nextFunction);
    resetButton.mouseup(resetFunction);
}

//Starts trivia
function startFunction() {
    timer.css('visibility', 'visible');
    if (triviaEnded) {
        triviaEnded = false;
        startButton.css('visibility', 'hidden');
        toggleButton.css('visibility', 'hidden');
        nextButton.css('visibility', 'visible');
        holderQA.css('visibility', 'visible');
        scoreHolder.empty();
        handleTrivia();
    } else {
        return;
    }
    //continueTrivia();
}

//Cycles through the available trivias
function toggleFunction() {
    if (triviaEnded) {
        currentTrivia = (currentTrivia + 1) % triviaList.length;
        var newTrivia = triviaList[currentTrivia];
        changeStyleValues(newTrivia);
        resetFunction();
    } else {
        return;
    }
}

//Resets timer and goes to next questions
function nextFunction() {
    if (triviaEnded) {
        return;
    } else {
        answered = true;
        handleTrivia();
    }
}

//Resets so you can play again!
function resetFunction() {
    if(triviaEnded) {
        $('#iconValue').attr('href', iconFileParse(styleValues.icon));
        $('body').css('background-image', imageFileParse(styleValues.background));
        $('#timer, #holderQA').css('background', rgbaConvert(styleValues));

        $('title, #titleValue').text(styleValues.title);
        $('html, body').css('cursor', cursorFileParse(styleValues.cursor));

        triviaQuestions = loadTrivia(triviaList[currentTrivia]);
        objectLength = 0;
        triviaKeys = loadKeys(triviaQuestions);
        scrambleArray(triviaKeys);
        score = 0;
        currentQuestion = 0;
        totalQuestionsUsed = Math.min(objectLength, 10);
        numberIncorrect = 0;
        currentAnswer = 'N/A';
        currentCorrect = 'N/A';
        scoreHolder.empty();
        resetTime = 20;

        timer.html("<h3 class='text-center'>" + intervalHolder.reset() + "</h3>");
        timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");
        timer.css('visibility', 'hidden');
        startButton.css('visibility', 'visible');
        toggleButton.css('visibility', 'visible');
        resetButton.css('visibility', 'hidden');
        holderQA.css('visibility', 'hidden');
    } else {
        return;
    }
}

//Changes styleValues depending on current input
function changeStyleValues(inputString) {
    switch (inputString) {
        case 'triviaMH':
            styleValues.r = 175;
            styleValues.g = 225;
            styleValues.b = 255;
            styleValues.a = 0.5;
            styleValues.icon = 'potion.png'
            styleValues.title = 'Monster Hunter Trivia';
            styleValues.background = 'backgroundMonsterHunter.jpg';
            styleValues.cursor = 'hbg.png';
            break;
        case 'triviaBB':
            styleValues.r = 120;
            styleValues.g = 170;
            styleValues.b = 210;
            styleValues.a = 0.5;
            styleValues.icon = 'rune.jpeg'
            styleValues.title = 'Bloodborne Trivia';
            styleValues.background = 'backgroundBloodborne.jpg';
            styleValues.cursor = 'sawCleaver.png';
            break;
        case 'triviaCooking':
            styleValues.r = 255;
            styleValues.g = 255;
            styleValues.b = 255;
            styleValues.a = 0.5;
            styleValues.icon = 'pot.png'
            styleValues.title = 'Cooking Trivia';
            styleValues.background = 'backgroundKitchen.jpg';
            styleValues.cursor = 'kitchenUtensils.png';
            break;
        default:
            break;
    }
}

//Parses image file location
function imageFileParse(inputFile) {
    var returnValue = "url(assets/images/";
    returnValue += inputFile + ")";
    return returnValue;
}

//Parses cursor file location
function cursorFileParse(inputFile) {
    var returnValue = "url(assets/images/";
    returnValue += inputFile + "), auto";
    return returnValue;
}

//Parses icon file location
function iconFileParse(inputFile) {
    var returnValue = 'assets/images/';
    returnValue += inputFile;
    return returnValue;
}

//Returns rgba value for background css
function rgbaConvert(inputObject) {
    var returnValue = 'rgba\(' ;
    returnValue += inputObject.r + ',';
    returnValue += inputObject.g + ',';
    returnValue += inputObject.b + ',';
    returnValue += inputObject.a + '\)';

    return returnValue;
}

//Returns length of object
function findObjectLength(inputObject) {
    var objectLength = 0;
    for(x in inputObject) {
        objectLength++;
    }
    return objectLength;
}

//Returns keys of object
function loadKeys(inputObject) {
    var questionArray = [];
    for (x in inputObject) {
        questionArray.push(x);
        objectLength++;
    }
    return questionArray;
}

//Scrambles the answer list
function scrambleArray(inputArray) {
    var i, j, x;
    var arrayLength = inputArray.length;
    for (i = 0; i < inputArray.length; i++) {
        j = Math.floor(Math.random()*(arrayLength));
        x = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = x;
    }
}

//Empties the tags that hold trivia questions and answers
function emptyTrivia() {
    questionHolder.empty();
    answerHolder.empty();
}

//Continues the trivia
function continueTrivia() {
    emptyTrivia();
    currentAnswer = 'N/A';
    currentCorrect = 'N/A';
    resetTime = 20;

    var questionObject = triviaQuestions[triviaKeys[currentQuestion]];
    questionHolder.html('<h3>' + questionObject['question'] + '</h3>');

    var responses = questionObject['incorrect'].slice(0);
    var correctElement = questionObject['correct'];
    currentCorrect = correctElement;
    responses.push(correctElement);

    scrambleArray(responses);

    var answers = $('<form>');
    answerHolder.append(answers);

    for (var i = 0; i < responses.length; i++) {
        var responseLabel = $('<label>');
        var response = $('<input>');
        response.addClass('inputChoice');
        response.attr('type', 'radio');
        response.attr('name', 'answer');
        if (responses[i] === questionObject['correct']) {
            response.data('returnValue', true);
        } else {
            response.data('returnValue', false);
        }
        response.text(responses[i]);
        responseLabel.append(response);
        responseLabel.append(' ' + responses[i]);
        answers.append(responseLabel);
        answers.append('<br>');
    }
    setInputChoice();

    answered = false;
    currentQuestion++;
    showAnswer = true;
    continueCounting();
}

function handleAnswer(inputResult, inputAnswer, inputAnswered) {
    resetTime = 5;
    emptyTrivia();
    var answerDisplay = $('<h3>');
    var yourDisplay = $('<h3>');
    var correctDisplay = $('<h3>');
    if (inputResult) {
        answerDisplay.text('Correct!');
        answerHolder.append(answerDisplay);
    } else {
        if (!inputAnswered) {
            answerDisplay.text('Times Up!');
        } else {
            answerDisplay.text('Incorrect');
            yourDisplay.text('Your Answer: '+ inputAnswer);
        }
        correctDisplay.text('Correct Answer: ' + currentCorrect);
        answerHolder.append(answerDisplay);
        answerHolder.append(yourDisplay);
        answerHolder.append(correctDisplay);
    }
    continueCounting();
}

//Continues the clock counter
function continueCounting() {
    intervalHolder.reset();
    intervalHolder.stopSecondCounter();
    if (triviaEnded) {
        return;
    } else {
        intervalHolder.startSecondCounter();
    }
}

//Sets answer choices
function setInputChoice() {
    $('.inputChoice').on('change', function() {
        answered = true;
        currentResponse = $(this).data('returnValue');
        currentAnswer = $(this).text();
    });
}

//Directs how the trivia is handled
function handleTrivia() {
    if (triviaEnded) {
        return;
    }

    if (showAnswer) {
        handleAnswer(currentResponse, currentAnswer, answered);
        showAnswer = false;
        return;
    } else {
        if (currentResponse) {
            score++;
            currentResponse = false;
        } else {
            numberIncorrect++;
        }
    }


    if (currentQuestion < totalQuestionsUsed) {
        continueTrivia();
    } else {
        endTrivia();
    }
}

//Ends the current active trivia
function endTrivia() {
    triviaEnded = true;
    intervalHolder.stopSecondCounter();
    emptyTrivia();
    console.log('Trivia has ended.');
    console.log('Score: ' + score);
    nextButton.css('visibility', 'hidden');
    scoreHolder.append(scoreResponse(score));
    scoreHolder.append('<h3>Score: ' + score + ' out of ' + totalQuestionsUsed +'</h3>');
    numberIncorrect--;
    scoreHolder.append('<h3>Number Incorrect: ' + numberIncorrect + '</h3>');
    timer.css('visibility', 'hidden');
    holderQA.css('visibility', 'visible');
    resetButton.css('visibility', 'visible');
}

function scoreResponse(inputValue) {
    var message = $('<h2>');
    var threshold1 = totalQuestionsUsed / 2;
    var threshold2 = totalQuestionsUsed / 4 * 3;
    if (inputValue <= threshold1) {
        message.text('Better luck next time!');
    } else if (inputValue > threshold1 && inputValue <= threshold2) {
        message.text('Pretty good!');
    } else {
        message.text('Great work!');
    }
    return message;
}

