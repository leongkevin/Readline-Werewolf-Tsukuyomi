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
setTimeout(instructions, 1000);

// 3
const chooseCharacter = () => {
    rl.question(`Choose a character: Kent, Mong, or Cung. `, firstAnswer);
}
setTimeout(chooseCharacter, 4000);

// 4
let yourCharacter;

const firstAnswer = (answer) => {

    yourCharacter = answer;

    console.log(`Your secret role is ${firstRole}.`);

    const yourRole = () => {

        const firstQuestion = `${answer}, do you accept this mission? (Y/N)`

        if(firstRole === 'Werewolf') {

            rl.question(`As ${answer}, ${firstRole} your mission is to kill the rest of the villagers before they find out who you are. ${firstQuestion} `, secondAnswerWerewolf)

        } else if(firstRole === 'Villager') {

            rl.question(`As ${answer}, ${firstRole} your missing is to identify the werewolf is before they kill you. ${firstQuestion} `, secondAnswerVillager);

        } else if(firstRole === 'Seer') {

            rl.question(`As ${answer}, ${firstRole} your mission is to alert the villagers about the identity of the werewolf without the werewolf finding out who you are. ${firstQuestion} `, secondAnswerSeer);

        }
    }

    setTimeout(yourRole, 1000);
}

// 5

const acceptMission = `There's no time to waste!`;
const declineMissionNotWerewolf = `That's too bad...after the full moon, the werewolf eats all the villagers including you...`
const declineMissionWerewolf = `The villagers gather their pitchforks against you...`

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
    if(answer.toLowerCase() === yourCharacter.toLowerCase()) {
        console.log(`Gameover, ${answer} commited senpuku!`);
        rl.close();
    } else if(answer.toLowerCase() === 'Mong'.toLowerCase()) {
        console.log(`Congrats ${answer}! You win!`);
        rl.close();
    } else if(answer.toLowerCase() === 'Cung'.toLowerCase()) {
        console.log(`Congrats ${answer}! You win!`);
        rl.close();
    }
}

const thirdAnswerVillager = (answer) => {
    if(answer.toLowerCase() === 'Kent'.toLowerCase()) {
        console.log(`Congrats ${answer}! You win!`);
        rl.close();
    } else if(answer.toLowerCase() === yourCharacter.toLowerCase()) {
        console.log(`You lose, ${answer}! You don't trust yourself, the villager!`);
        rl.close();
    } else if(answer.toLowerCase() === 'Cung'.toLowerCase()) {
        console.log(`You lose, ${answer}! ${answer} is the Seer!`);
        rl.close();
    }
}

const thirdAnswerSeer = (answer) => {
    if(answer.toLowerCase() === 'Kent'.toLowerCase()) {
        console.log(`Gameover, ${answer} kills you before you tell the other Villagers.`);
        rl.close();
    } else if(answer.toLowerCase() === 'Mong'.toLowerCase()) {
        console.log(`Congrats! ${answer} helps you kill Kent, the werewofl!`);
        rl.close();
    } else if(answer.toLowerCase() === yourCharacter.toLowerCase()) {
        console.log(`You already know you're not the werewolf! Now you and Mong are dead!`);
        rl.close();
    }
}


// Below is not so random roles

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let secondRole;
let thirdRole;

const randomizeRole = (max) => {
    const role = getRandomInt(max);
    if(role === 0) {
        secondRole = 'Seer'
        thirdRole = 'Villager'
        return 'Werewolf';
    }
    if(role === 1) {
        secondRole = 'Villager'
        thirdRole = 'Werewolf'
        return 'Seer';
    }
    if(role === 2) {
        secondRole = 'Werewolf'
        thirdRole = 'Seer'
        return 'Villager';
    }
}

const max = 3;
const firstRole = randomizeRole(max);

const kent = {};
const mong = {};
const cung = {};

if(yourCharacter === 'Kent') {
    yourCharacter['role'] = firstRole;
    mong['role'] = secondRole;
    cung['role'] = thirdRole;
} else if(yourCharacter === 'Mong') {
    yourCharacter['role'] = firstRole;
    kent['role'] = secondRole;
    cung['role'] = thirdRole;
} else if(yourCharacter === 'Cung') {
    yourCharacter['role'] = firstRole;
    kent['role'] = secondRole;
    mong['role'] = thirdRole;
}

console.log(mong)


// console.log(firstRole)
// console.log(secondRole)
// console.log(thirdRole)
// rl.close();

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
