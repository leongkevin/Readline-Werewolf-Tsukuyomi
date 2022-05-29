const { AsyncResource } = require('async_hooks');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let yourCharacter;

const firstAnswer = (answer) => {

    yourCharacter = answer;

    console.log(`Your secret role is ${firstRole}`);

    if(firstRole === 'Werewolf') {
        console.log(`As ${answer}, ${firstRole} your mission is to kill the rest of the villagers before they find out who you are.`);
        rl.question(`Do you accept this mission? (Y/N) `, secondAnswerWerewolf);
    } else if(firstRole === 'Villager') {
        console.log(`As ${answer}, ${firstRole} your missing is to identify the werewolf is before they kill you. `);
        rl.question(`Do you accept this mission? (Y/N) `, secondAnswerVillager);
    } else if(firstRole === 'Seer') {
        console.log(`As ${answer}, ${firstRole} your mission is to alert the villagers about the identity of the werewolf without the werewolf finding out who you are.`);
        rl.question(`Do you accept this mission? (Y/N) `, secondAnswerSeer);
    }
}

const secondAnswerWerewolf = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        console.log(`There's no time to waste!`);
        rl.question(`Who would you like to kill? `, thirdAnswerWerewolf);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`That is too bad...A week later....the villagers find out you're the werewolf and hang you.`);
        rl.close();
    }
}

const secondAnswerVillager = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        console.log(`There's no time to waste!`);
        rl.question(`Who do you think is the werewolf? `, thirdAnswerVillager);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`That is too bad...A week later....the werewolf eats you.`);
        rl.close();
    }
}

const secondAnswerSeer = (answer) => {
    if(answer.toLowerCase() === 'Y'.toLowerCase()) {
        console.log(`There's no time to waste!`);
        rl.question(`Who would you like to tell who the werewolf is?  `, thirdAnswerSeer);
    } else if(answer.toLowerCase() === 'N'.toLowerCase()) {
        console.log(`That is too bad...A week later....the werewolf eats you.`);
        rl.close();
    }
}

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

console.log(`Welcome to Werewolf Tsukuyomi.`)



const instructions = () => { console.log(`You are now bound to infinite Tsukuyomi until you complete your mission.`) }

setTimeout(instructions, 2000);



const firstQuestion = () => { rl.question(`Choose a character: Kent, Mong, or Cung. `, firstAnswer)}

setTimeout(firstQuestion, 4000);


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
