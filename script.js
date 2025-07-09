const content = document.getElementById('content');
const audio = document.getElementById('audio');

let name = '';
let nickname = '';
let confirmationStep = 0;

function askName() {
    content.innerHTML = `
        <form id="nameForm">
            <p>Please, put your name:</p>
            <input id="nameInput" type="text" required>
            <button type="submit">Next</button>
        </form>
    `;

    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        saveName();
    });
}

function saveName() {
    name = document.getElementById('nameInput').value;
    askNickname();
}

function askNickname() {
    content.innerHTML = `
        <form id="nickForm">
            <p>What is your nickname?</p>
            <input id="nickInput" type="text" required>
            <button type="submit">Next</button>
        </form>
    `;

    document.getElementById('nickForm').addEventListener('submit', function(event) {
        event.preventDefault();
        saveNickname();
    });
}

function saveNickname() {
    nickname = document.getElementById('nickInput').value;
    confirmationStep = 0;
    askIfNinja();
}

function askIfNinja() {
    content.innerHTML = `
        <p>${name}, are you a ninja?</p>
        <button onclick="handleNinjaAnswer(true)">Yes</button>
        <button onclick="handleNinjaAnswer(false)">No</button>
    `;
}

function handleNinjaAnswer(isNinja) {
    if (isNinja) {
        chooseBattle();
    } else {
        if (confirmationStep === 0) {
            confirmationStep++;
            content.innerHTML = `
                <p>You sure?</p>
                <button onclick="handleNinjaAnswer(false)">Yes</button>
                <button onclick="handleNinjaAnswer(true)">No</button>
            `;
        } else if (confirmationStep === 1) {
            confirmationStep++;
            content.innerHTML = `
                <p>You really sure? That doesn’t sound right.</p>
                <button onclick="handleNinjaAnswer(false)">Yes</button>
                <button onclick="handleNinjaAnswer(true)">No</button>
            `;
        } else {
            content.innerHTML = `
                <p>That’s your final answer? Really? Think again.</p>
                <button onclick="handleNinjaAnswer(true)">Ok, I'm a ninja</button>
            `;
        }
    }
}

function chooseBattle() {
    content.innerHTML = `
        <p>Choose your battle:</p>
        <button onclick="battle('Rock Lee')">Rock Lee</button>
        <button onclick="battle('Gaara')">Gaara</button>
        <button onclick="battle('Ambos')">Both</button>
    `;
}

function battle(opponent) {
    if (opponent === 'Ambos') {
        audio.play();
        content.innerHTML = `<p>${nickname}, Rock Lee and Gaara! NUMB!!!</p><p>Press F5 to quit.</p>`;
    } else {
        content.innerHTML = `<p>${name} in a battle against ${opponent}!</p><p>Press F5 to quit.</p>`;
    }
}

askName();
