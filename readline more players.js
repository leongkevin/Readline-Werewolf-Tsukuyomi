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
    'Chief'
];

// Harvest Moon, you can turn into a werewolf


// 3. Role Randomizer and declaration

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}





// Unquie combination of roles

const countOfCharacters = arrOfCharacters.length;

// const combinFunc = (countOfCharacters) => {

//     if(countOfCharacters === 0) return 1

//     return countOfCharacters * combinFunc(countOfCharacters - 1);

// }

// const combinations = combinFunc(length);


const chooseCharacter = () => {
    console.log(arrOfCharacters);
    rl.question(`Choose a character: `, firstAnswer);
}
setTimeout(chooseCharacter, 2500);


// 4 Role Assignment

let yourCharacter;

const firstAnswer = (answer) => {

    yourCharacter = answer;
    // const arrayOfRoles = [];

    for(let i = 0; i < arrOfCharacters.length; i++) {
        const randomizer = getRandomInt(2);
        const currentCharacter = arrOfCharacters[i]
        if(randomizer === 0) {
            currentCharacter.role = arrOfRoles.shift()
        } else if(randomizer === 1) {
            currentCharacter.role = arrOfRoles.pop()

        }
    }

    // let startIndex;


    // for(let i = 0; i < arrOfCharacters.length; i++) {
    //     currentObj = arrOfCharacters[i];
    //     for(let key in currentObj) {
    //         if(currentObj.character === answer) {
    //             currentObj['role'] = yourRole;
    //             startIndex = i;
    //         } else currentObj['role'] = '?';
    //     }
    // }

    console.log(arrOfCharacters); // After yourRole is assigned and before the others are assigned

    // const startRandomIndex = getRandomInt(countOfCharacters);

    // const takenRoles = [yourRole];



    // if(startRandomIndex + 1 < (arrOfCharacters.length * .5) + .5) {

    //     const nextIndex = arrayOfRoles.indexOf(yourRole) + 1;

    //     for(let i = startRandomIndex; i < (arrOfCharacters.length - startRandomIndex); i++) {
    //         currentObj = arrOfCharacters[i];
    //         for(let key in currentObj) {
    //             if(currentObj['role'] === '?') {
    //                 if(nextIndex !== arrOfCharacters.length - 1) {
    //                     currentObj['role'] = arrayOfRoles[nextIndex];
    //                     takenRoles.push(arrayOfRoles[nextIndex])
    //                 }
    //             }
    //         }
    //     }


        // for(let i = 0; i < arrayOfRoles.length; i++) {
        //     currIndex = arrayOfRoles[i]
        //     if(!takenRoles.includes(currIndex)) {
        //         takenRoles.push(currIndex)
        //     }
        // }
        // // Assign last unused role to last chracter without a role

        // for(let i = 0; i < arrOfCharacters.length; i++) {
        //     currentObj = arrOfCharacters[i];
        //     for(let key in currentObj) {
        //         if(currentObj['role'] === '?') {
        //             currentObj['role'] = takenRoles[takenRoles.length - 1];
        //         }
        //     }
        // }

    // } else {

    //     const nextIndex = arrayOfRoles.indexOf(yourRole) + 1;

    //     for(let i = arrOfCharacters.length - 1; i > 0; i--) {
    //         currentObj = arrOfCharacters[i];
    //         for(let key in currentObj) {
    //             if(currentObj['role'] === '?') {
    //                 if(nextIndex !== arrOfCharacters.length - 1) {
    //                     currentObj['role'] = arrayOfRoles[nextIndex];
    //                 }
    //             }
    //         }
    //     }

    //     for(let i = 0; i < arrayOfRoles.length; i++) {
    //         currIndex = arrayOfRoles[i]
    //         if(!takenRoles.includes(currIndex)) {
    //             takenRoles.push(currIndex)
    //         }
    //     }
    //     // Assign last unused role to last chracter without a role

    //     for(let i = 0; i < arrOfCharacters.length; i++) {
    //         currentObj = arrOfCharacters[i];
    //         for(let key in currentObj) {
    //             if(currentObj['role'] === '?') {
    //                 currentObj['role'] = takenRoles[takenRoles.length - 1];
    //             }
    //         }
    //     }
    // }

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
        console.log(`${declineMissionWerewolf}`);
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
    } else if(answer.toLowerCase() === 'Cung'.toLowerCase()) {
        if(yourCharacter === 'Seer') {
            console.log(`Gameover, ${answer}. You already know you're not the werewolf! Now you and other villagers are dead!`);
        } else console.log(`Congratulations, ${answer} was a ${Cung.role}`);
        rl.close();
    }
}
