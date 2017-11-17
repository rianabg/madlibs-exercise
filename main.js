function genMadLib() {
    checkForErrors();
    genStory();
}

function checkForErrors () {
    if (document.getElementById('nouns').value === '') {
        alert('Please input at least 4 nouns separated by commas!');
        return;
    } else if (document.getElementById('verbs').value === '') {
        alert('Please input at least 4 verbs separated by commas!');
        return;
    } else if (document.getElementById('adverbs').value === '') {
        alert('Please input at least 4 adverbs separated by commas!');
        return;
    } else if (document.getElementById('adjectives').value === '') {
        alert('Please input at least 4 adjectives separated by commas!');
        return;
    }
    if (document.getElementById('date').checked !== true && document.getElementById('vacation').checked !== true && document.getElementById('school').checked !== true) {
        alert('One of the story-types must be selected!');
        return;
    }
}

var dateStory = document.getElementById('date-story');
var vacationStory = document.getElementById('vacation-story');
var schoolStory = document.getElementById('school-story');

function hideAllStories() {
    dateStory.classList.remove('show');
    vacationStory.classList.remove('show');
    schoolStory.classList.remove('show');
}

function getStoryType(){
    if (document.getElementById('date').checked === true) {
        return 'date';
    } else if (document.getElementById('vacation').checked === true) {
        return 'vacation';
    } else if (document.getElementById('school').checked === true) {
        return 'school';
    }
}

function showCurrStory(storyType) {
    if (storyType === 'date') {
        dateStory.classList.add('show');
    } else if (storyType === 'vacation') {
        vacationStory.classList.add('show');
    } else if (storyType === 'school') {
        schoolStory.classList.add('show');
    }
}

function genStory() {
    var storyType = getStoryType();
    var nouns = getWordsOfType('nouns');
    var verbs = getWordsOfType('verbs');
    var adjectives = getWordsOfType('adjectives');
    var adverbs = getWordsOfType('adverbs');
    injectWords(nouns,verbs,adjectives,adverbs, storyType);
    hideAllStories();
    showCurrStory(storyType);
}

function injectWords(nouns,verbs,adjectives,adverbs,storyType) {
    injectWordType('noun',nouns,storyType);
    injectWordType('verb',verbs,storyType);
    injectWordType('adjective',adjectives,storyType);
    injectWordType('adverb',adverbs,storyType);
}

function injectWordType(wordType, words, storyType){
    var blanks = document.querySelectorAll('#' + storyType + '-story .' + wordType );
    console.log(blanks);
    for (var i = 0; i < blanks.length; i++) {
        blanks[i].innerHTML = words[i];
    }
}

function getUserInput(wordType){
   return document.getElementById(wordType).value.trim().split(',');
}

function getWordsOfType(wordType){
    var userWords = getUserInput(wordType);
    return userWords;
    fillWithBackup(userWords, wordType);
}

function fillWithBackup(userWords, wordType) {
    while (userWords.length < 4) {
        if (wordType === 'nouns'){
            userWords.push(randElem(backupNouns));
        } else if (wordType === 'verbs') {
            userWords.push(randElem(backupVerbs));
        } else if (wordType === 'adjectives') {
            userWords.push(randElem(backupAdjectives));
        } else if (wordType === 'adverbs') {
            userWords.push(randElem(backupAdverbs));
        }
    }
}

function randElem(arr){
    var rand = arr[Math.floor(Math.random()*arr.length)];
    return rand;
}

