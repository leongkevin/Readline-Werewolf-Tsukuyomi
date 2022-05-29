const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const firstAnswer = (answer) => {
    console.log(`Welcome to Werewolf Tsukuyomi ${answer}`);
    console.log(`You are now bound to infinite Tsukuyomi until you complete your mission.`)

    const role = randomizeRole();

    console.log(`Your secret role is ${role}`);

    if(role === 'Werewolf') {
        console.log(`As ${answer}, ${role} your mission is to kill the rest of the villagers before they find out who you are.`);
        rl.question(`Do you accept this mission? (y/n) `, secondAnswerKent);
    } else if(role === 'Villager') {
        console.log(`As ${answer}, ${role} your missing is to find out the werewolf bebfore they hava );
        rl.question(`Do you accept this mission? (y/n) `, secondAnswerMong);
    } else if(role === 'Seer') {
        console.log(`As ${answer}, ${role} you are the Seer`);
        rl.question(`Do you accept this mission? (y/n) `, secondAnswerCung);
    }
}

const secondAnswerKent = (answer) => {
    if(answer === 'y') {
        console.log(`There's no time to waste!`);
        rl.question(`Who would you like to kill? `, thirdAnswerKent);
    } else if(answer === 'n') {
        console.log(`That is too bad...A week later....the villagers find out you're the werewolf and hang you.`);
        rl.close();
    }
}

const secondAnswerMong = (answer) => {
    if(answer === 'y') {
        console.log(`There's no time to waste!`);
        rl.question(`Who do you think is the werewolf? `, thirdAnswerMong);
    } else if(answer === 'n') {
        console.log(`That is too bad...A week later....the werewolf eats you.`);
        rl.close();
    }
}

const secondAnswerCung = (answer) => {
    if(answer === 'y') {
        console.log(`There's no time to waste!`);
        rl.question(`Who would you like to tell who the werewolf is?  `, thirdAnswerCung);
    } else if(answer === 'n') {
        console.log(`That is too bad...A week later....the werewolf eats you.`);
        rl.close();
    }
}

const thirdAnswerKent = (answer) => {
    if(answer === 'Kent') {
        console.log(`Gameover, ${answer} commited senpuku!`);
        rl.close();
    } else if(answer === 'Mong') {
        console.log(`Congrats ${answer}! You win!`);
        rl.close();
    } else if(answer === 'Cung') {
        console.log(`Congrats ${answer}! You win!`);
        rl.close();
    }

}

const thirdAnswerMong = (answer) => {
    if(answer === 'Kent') {
        console.log(`Congrats ${answer}! You win!`);
        rl.close();
    } else if(answer === 'Mong') {
        console.log(`You lose, ${answer}! You don't trust yourself, the villager!`);
        rl.close();
    } else if(answer === 'Cung') {
        console.log(`You lose, ${answer}! ${answer} is the Seer!`);
        rl.close();
    }
}

const thirdAnswerCung = (answer) => {
    if(answer === 'Kent') {
        console.log(`Gameover, ${answer} kills you before you tell the other Villagers.`);
        rl.close();
    } else if(answer === 'Mong') {
        console.log(`Congrats! ${answer} helps you kill Kent, the werewofl!`);
        rl.close();
    } else if(answer === 'Cung') {
        console.log(`You already know you're not the werewolf! Now you and Mong are dead!`);
        rl.close();
    }
}
// rl.question(`Choose a character: Kent, Mong, or Cung `, firstAnswer);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomizeRole = () => {
    const max = 3;
    const role = getRandomInt(max);
    if(role === 1) return 'Werewolf'
    if(role === 2) return 'Seer'
    if(role === 3) return 'Villager'
}

rl.question(`Choose a character: Kent, Mong, or Cung `, firstAnswer);
