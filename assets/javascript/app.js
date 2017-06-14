/* Trivia Game
 * Author: Jeremy He
 * Purpose: HW Assignment
 *
 * Created: 6-13-2017
 * Last Update: 6-13-2017
 */

//Holds all trivia questions
var triviaQuestions = {
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
        question: 'What combination of items creates a Megapotion?',
        correct: 'Potion + Honey',
        incorrect: ['Potion + Blue Mushroom', 'Herb + Tropical Berry', 'Herb + Mega Dash Juice', 'Potion + Nitroshroom'],
    },
    question4: {
        question: 'Which weapon does not come with or cannot be used as a shield?',
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
        incorrect: ['Dash Juice', 'Antidote', 'Clenser', 'Energy Drink'],
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
        question: 'What element is a Rathalos weakest to?',
        correct: 'Dragon',
        incorrect: ['Fire', 'Water', 'Ice', 'Thunder'],
    },
    question13: {
        question: 'What element is a Zinogre weakest to?',
        correct: 'Ice',
        incorrect: ['Water', 'Fire', 'Thunder', 'Dragon'],
    },
    question14: {
        question: 'Which game was underwater combat introduced?',
        correct: 'Monster Hunter Tri',
        incorrect: ['Monster Hunter 4U', 'Monster Hunter 3U', 'Monster Hunter Generations', 'Monster Hunter'],
    },
    question15: {
        question: 'Which game was monster mounting introduced?',
        correct: 'Monster Hunter 4U',
        incorrect: ['Monster Hunter Tri', 'Monster Hunter 3U', 'Monster Hunter Generations', 'Monster Hunter'],
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
}

//Interval values
var secondCounter;
var resetTime = 5;
var seconds = resetTime;

//Question values
var triviaKeys = loadKeys(triviaQuestions);
scrambleArray(triviaKeys);
var score = 0;
var currentResponse = false;

//Question tracking variables
var currentQuestion = 0;
var totalQuestionsUsed = 8;

//Interval functions
var intervalHolder = {
    stopSecondCounter: function() {
        clearInterval(secondCounter);
        //intervalHolder.reset();
        //console.log('Stopped');
    },
    startSecondCounter: function() {
        secondCounter = setInterval(intervalHolder.countDown, 1000);
        timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");
        //console.log('Started');
    },

    countDown: function() {
        seconds--;
        timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");

        if (seconds > 0) {
            //console.log(seconds);
        } else {
            intervalHolder.stopSecondCounter();
            //console.log(seconds);
            //console.log('Lap - ' + currentQuestion);
            handleTrivia();
            //intervalHolder.reset();
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
var triviaEnded = false;
var timer = $('#timer');
timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");
var questionHolder = $('#questionHolder');
var answerHolder = $('#answerHolder');
var startButton = $('#startButton');
var nextButton = $('#nextButton');
nextButton.css('visibility', 'hidden');
var scoreHolder = $('#scoreHolder');

/* Test function //
   $('#startButton').mouseup(resetTimer);

   function resetTimer() {
//intervalHolder.reset();
timer.html("<h3 class='text-center'>" + intervalHolder.timeConverter(seconds) + "</h3>");
//console.log(seconds);
intervalHolder.stopSecondCounter();
intervalHolder.startSecondCounter();
}
*/

startButton.mouseup(startFunction);
nextButton.mouseup(nextFunction);

function startFunction() {
    if (triviaEnded) {
        return;
    } else {
        startButton.css('visibility', 'hidden');
        nextButton.css('visibility', 'visible');
        handleTrivia();
    }
    //continueTrivia();
}

function nextFunction() {
    if (triviaEnded) {
        return;
    } else {
        handleTrivia();
    }
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
    }
    return questionArray;
}

//

//console.log('Objects inside triviaQuestions: ' + findObjectLength(triviaQuestions));
//console.log('Objects inside intervalHolder: ' + findObjectLength(intervalHolder));

//Scrambles the answer list
function scrambleArray(inputArray) {
    var i, j, x;
    var arrayLength = inputArray.length;
    for (i = 0; i < inputArray.length; i++) {
        j = Math.floor(Math.random()*(arrayLength-1));
        x = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = x;
    }
}

function emptyTrivia() {
    questionHolder.empty();
    answerHolder.empty();
}

function continueTrivia() {
    emptyTrivia();

    var questionObject = triviaQuestions[triviaKeys[currentQuestion]];
    questionHolder.html('<p>' + questionObject['question'] + '</p>');
    //console.log(questionObject['question']);

    var responses = questionObject['incorrect'].slice(0);
    var correctElement = questionObject['correct'];
    responses.push(correctElement);

    //console.log(correctElement);
    //console.log(responses);

    scrambleArray(responses);

    var answers = $('<form>');
    answerHolder.append(answers);

    for (var i = 0; i < responses.length; i++) {
        //console.log('Runs');
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
        //console.log(responses[i]);
        response.text(responses[i]);
        responseLabel.append(response);
        responseLabel.append(' ' + responses[i]);
        answers.append(responseLabel);
        answers.append('<br>');
    }
    setInputChoice();

    currentQuestion++;
    intervalHolder.reset();
    intervalHolder.stopSecondCounter();
    if (triviaEnded) {
        //Console.log('Trivia has ended.');
    } else {
        intervalHolder.startSecondCounter();
    }
}

function setInputChoice() {
    $('.inputChoice').on('change', function() {
        currentResponse = $(this).data('returnValue');
        //console.log(currentResponse);
    });
}

function handleTrivia() {
    if (triviaEnded) {
        return;
    }

    console.log(currentResponse);
    if (currentResponse) {
        score++;
        currentResponse = false;
    }

    if (currentQuestion < totalQuestionsUsed) {
        //console.log('First case is being run!');
        continueTrivia();
        console.log('Lap - ' + currentQuestion);
    } else {
        endTrivia();
    }
}

function endTrivia() {
    triviaEnded = true;
    intervalHolder.stopSecondCounter();
    emptyTrivia();
    console.log('Trivia has ended.');
    console.log('Score: ' + score);
    nextButton.css('visibility', 'hidden');
    scoreHolder.html('<h3>Score: ' + score + ' out of ' + totalQuestionsUsed +'</h3>');
}
