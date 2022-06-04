const { AsyncResource } = require('async_hooks');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




// 1
console.log(`Welcome to Werewolf Infinite Tsukuyomi.`)

// 2
const instructions = () => {
    console.log(`You are now bound to a secret war amongst each other until you complete your mission.`);
}
setTimeout(instructions, 500);

// Roles & Characters
const arrOfCharacters = [
    Kent = {character: 'Kent'},
    Mong = {character: 'Mong'},
    Cung = {character: 'Cung'},
    Penn = {character: 'Penn'},
    Peez = {character: 'Peez'},
    Tsng = {character: 'Tsng'},
    Stac = {character: 'Stac'},
    Lven = {character: 'Lven'},
    Puck = {character: 'Puck'},
    Zeus = {character: 'Zeus'},
    Knol = {character: 'Knol'},
    Uhoh = {character: 'Uhoh'},
];

const arrOfRoles = [
    'Werewolf',
    'Oracle',
    'Villager',
    'Hunter',
    'Wizard',
    'Healer',
    'Mistress',
    'Shamon',
    'Blacksmith',
    'Chief',
    'Beggar',
    'Fanatic'
];

// Harvest Moon, you can turn into a werewolf


// 3. Role Randomizer and declaration

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// Unquie combination of roles

const countOfCharacters = arrOfCharacters.length;

const chooseCharacter = () => {
    console.log(arrOfCharacters);
    rl.question(`Choose a character: `, firstAnswer);
}
setTimeout(chooseCharacter, 2500);


// 4 Role Assignment

let yourCharacter;

const firstAnswer = (answer) => {

    yourCharacter = answer;

    for(let i = 0; i < arrOfCharacters.length; i++) {
        const randomizer = getRandomInt(2);
        const currentCharacter = arrOfCharacters[i]
        if(randomizer === 0) {
            currentCharacter.role = arrOfRoles.shift()
        } else if(randomizer === 1) {
            currentCharacter.role = arrOfRoles.pop()

        }
    }

    let yourRole;

    for(let i = 0; i < arrOfCharacters.length; i++) {
        currentObj = arrOfCharacters[i];
        for(let key in currentObj) {
            if(currentObj['character'] === answer) {
                let currentRole = currentObj.role;
                yourRole = currentRole
            }
        }
    }

    console.log(`Your secret role is ${yourRole}.`);

    const yourRoleOptions = () => {

        const firstQuestion = `${answer}, do you accept this mission? (Y/N)`

        if(yourRole === 'Werewolf') {

            rl.question(`As ${answer}, ${yourRole} your mission is to kill the rest of the villagers before they find out who you are. ${firstQuestion} `, secondAnswerWerewolf);

        } else if(yourRole !== 'Werewolf') {

            rl.question(`As ${answer}, ${yourRole} your missing is to identify the werewolf is before they kill you. ${firstQuestion} `, secondAnswerNotWerewolf);

        }
    }

    setTimeout(yourRoleOptions, 1000);
}

// 5

const acceptMissionNotWerewolf = `There's no time to waste!`;
const acceptMissionWerewolf = `The Full Moon is almost here, hunger strikes!`;
const declineMissionNotWerewolf = `That's too bad...after the full moon, the werewolf eats all the villagers including you...`;
const declineMissionWerewolf = `The villagers gather their pitchforks against you...`;

const secondAnswerWerewolf = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        rl.question(`${acceptMissionWerewolf} Who would you like to kill? `, thirdAnswerWerewolf);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`${declineMissionWerewolf}`);
        rl.close();
    }
}

const secondAnswerNotWerewolf = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        rl.question(`${acceptMissionNotWerewolf} Who would you like to pick as the werewolf? `, thirdAnswerNotWerewolf);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`${declineMissionNotWerewolf}`);
        rl.close();
    }
}


// 6

const thirdAnswerWerewolf = (answer) => {
    if(answer.toLowerCase() === 'Kent'.toLowerCase) {
        if(yourCharacter === 'Werewolf') {
            console.log(`Gameover, ${answer} commited senpuku!`);
        } else console.log(`Congratulations, ${answer} was a ${Kent.role}`);
        rl.close();
    } else if(answer.toLowerCase() === 'Mong'.toLowerCase()) {
        if(yourCharacter === 'Werewolf') {
            console.log(`Gameover, ${answer} commited senpuku!`);
        } else console.log(`Congratulations, ${answer} was a ${Mong.role}`);
        rl.close();
    } else if(answer.toLowerCase() === 'Cung'.toLowerCase()) {
        if(yourCharacter === 'Werewolf') {
            console.log(`Gameover, ${answer} commited senpuku!`);
        } else console.log(`Congratulations, ${answer} was a ${Cung.role}`);
        rl.close();
    }
}

const thirdAnswerNotWerewolf = (answer) => {
    if(answer.toLowerCase() === 'Kent'.toLowerCase()) {
        if(yourCharacter === 'Villager') {
            console.log(`Gameover, ${answer}! You don't trust yourself, the villager!`);
        } else console.log(`Congratulations, ${answer} was a ${Kent.role}`);
        rl.close();
    } else if(answer.toLowerCase() === 'Mong'.toLowerCase()) {
        if(yourCharacter === 'Villager') {
            console.log(`Gameover, ${answer}! You don't trust yourself, the villager!`);
        } else console.log(`Congratulations, ${answer} was a ${Mong.role}`);
        rl.close();
    } else if(answer.toLowerCase() === 'Cung'.toLowerCase()) {
        if(yourCharacter === 'Villager') {
            console.log(`Gameover, ${answer}! You don't trust yourself, the villager!`);
        } else console.log(`Congratulations, ${answer} was a ${Cung.role}`);
        rl.close();
    }
}


