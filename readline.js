const { AsyncResource } = require('async_hooks');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




// 1
console.log(`Welcome to Werewolf Tsukuyomi.`)

// 2
const instructions = () => {
    console.log(`You are now bound to infinite Tsukuyomi until you complete your mission.`);
}
setTimeout(instructions, 500);



// 3. Role Randomizer and declaration

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const arrOfCharacters = [
    Kent = {name: 'Kent'},
    Mong = {name: 'Mong'},
    Cung = {name: 'Cung'}
];



// Unquie combination of roles



const length = arrOfCharacters.length;

const combinFunc = (length) => {

    if(length === 0) return 1

    return length * combinFunc(length - 1);

}

const combinations = combinFunc(length);


let yourRole;
let secondRole;
let thirdRole;
const arrayOfRoles = [yourRole, secondRole, thirdRole];

const chooseCharacter = () => {
    console.log(arrOfCharacters)
    rl.question(`Choose a character: `, firstAnswer);
}
setTimeout(chooseCharacter, 2500);


// 4 Role Assignment

let yourCharacter;

const firstAnswer = (answer) => {

    yourCharacter = answer;

    const role = getRandomInt(combinations);
    if(role === 0) {
        yourRole = 'Werewolf';
        secondRole = 'Seer';
        thirdRole = 'Villager';
    } else if(role === 1) {
        yourRole = 'Werewolf';
        secondRole = 'Villager';
        thirdRole = 'Seer';
    } else if(role === 2) {
        yourRole = 'Villager';
        secondRole = 'Werewolf';
        thirdRole = 'Seer';
    } else if(role === 3) {
        yourRole = 'Villager';
        secondRole = 'Seer';
        thirdRole = 'Werewolf';
    } else if(role === 4) {
        yourRole = 'Seer';
        secondRole = 'Villager';
        thirdRole = 'Werewolf';
    } else if(role === 5) {
        yourRole = 'Seer';
        secondRole = 'Werewolf';
        thirdRole = 'Villager';
    }


    for(let i = 0; i < arrOfCharacters.length; i++) {
        currentObj = arrOfCharacters[i];
        for(let key in currentObj) {
            if(currentObj.name === answer) {
                currentObj['role'] = yourRole;
                }
            }
    }
    console.log(arrOfCharacters)

    console.log(`Your secret role is ${yourRole}.`);

    const yourRoleOptions = () => {

        const firstQuestion = `${answer}, do you accept this mission? (Y/N)`

        if(yourRole === 'Werewolf') {

            rl.question(`As ${answer}, ${yourRole} your mission is to kill the rest of the villagers before they find out who you are. ${firstQuestion} `, secondAnswerWerewolf);

        } else if(yourRole === 'Villager') {

            rl.question(`As ${answer}, ${yourRole} your missing is to identify the werewolf is before they kill you. ${firstQuestion} `, secondAnswerVillager);

        } else if(yourRole === 'Seer') {

            rl.question(`As ${answer}, ${yourRole} your mission is to alert the villagers about the identity of the werewolf without the werewolf finding out who you are. ${firstQuestion} `, secondAnswerSeer);

        }
    }

    setTimeout(yourRoleOptions, 1000);
}

// 5

const acceptMission = `There's no time to waste!`;
const declineMissionNotWerewolf = `That's too bad...after the full moon, the werewolf eats all the villagers including you...`;
const declineMissionWerewolf = `The villagers gather their pitchforks against you...`;

const secondAnswerWerewolf = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        rl.question(`${acceptMission} Who would you like to kill? `, thirdAnswerWerewolf);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`{${declineMissionWerewolf}}`);
        rl.close();
    }
}

const secondAnswerVillager = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        rl.question(`${acceptMission} Who would you like to pick as the werewolf? `, thirdAnswerVillager);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`${declineMissionNotWerewolf}`);
        rl.close();
    }
}

const secondAnswerSeer = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        rl.question(`${acceptMission} Who would you like to tell about the identity of the werewolf? `, thirdAnswerSeer);
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

const thirdAnswerVillager = (answer) => {
    if(answer.toLowerCase() === 'Kent'.toLowerCase()) {
        if(yourCharacter === 'Villager') {
            console.log(`Gameover, ${answer}! You don't trust yourself, the villager!`);
        } else console.log(`Congratulations, ${answer} was a ${Kent.role}`);
        rl.close();
    } else if(answer.toLowerCase() === yourCharacter.toLowerCase()) {
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

const thirdAnswerSeer = (answer) => {
    if(answer.toLowerCase() === 'Kent'.toLowerCase()) {
        if(yourCharacter === 'Seer') {
            console.log(`Gameover, ${answer}. You already know you're not the werewolf! Now you and other villagers are dead!`);
        } else console.log(`Congratulations, ${answer} was a ${Kent.role}`);
        rl.close();
    } else if(answer.toLowerCase() === 'Mong'.toLowerCase()) {
        if(yourCharacter === 'Seer') {
            console.log(`Gameover, ${answer}. You already know you're not the werewolf! Now you and other villagers are dead!`);
        } else console.log(`Congratulations, ${answer} was a ${Mong.role}`);
        rl.close();
    } else if(answer.toLowerCase() === yourCharacter.toLowerCase()) {
        if(yourCharacter === 'Seer') {
            console.log(`Gameover, ${answer}. You already know you're not the werewolf! Now you and other villagers are dead!`);
        } else console.log(`Congratulations, ${answer} was a ${Cung.role}`);
        rl.close();
    }
}



// if(yourCharacter === 'Kent') {
//     yourCharacter.role = firstRole;
//     Mong.role = secondRole;
//     Cung.role = thirdRole;
// } else if(yourCharacter === 'Mong') {
//     yourCharacter.role = firstRole;
//     Kent.role = secondRole;
//     Cung.role = thirdRole;
// } else if(yourCharacter === 'Cung') {
//     yourCharacter.role = firstRole;
//     Kent.role = secondRole;
//     Mong.role = thirdRole;
// }

// console.log(Kent)

// console.log(firstRole)
// console.log(secondRole)
// console.log(thirdRole)


// Below is an attempt at completely random roles

// const randomizeRole = (max) => {
//     const role = getRandomInt(max);
//     if(role === 0) return 'Werewolf';
//     if(role === 1) return 'Seer';
//     if(role === 2) return 'Villager';
// }

// const firstRole = randomizeRole(3);

// const secondRole = randomizeRole(3);

// const thirdRole = randomizeRole(3);

// console.log(firstRole)
// console.log(secondRole)
// console.log(thirdRole)
// rl.close();
