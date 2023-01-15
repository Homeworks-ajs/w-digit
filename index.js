const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

(async () => {
    const rnm = Math.round(Math.random() * 100);
    let answer = "";
    console.log('Я загадал число, отгадай его:');
    let flag = true;

    while(flag) {

        answer = await rl.question('Введи число:\n');

        if(!answer) {
            console.log("Нужно обязательно что-то ввести(");
            continue;
        }
        const d = parseInt(answer)
        if(!d) {
            console.log("Это должно быть число");
            continue;
        }

        if(d < rnm) {
            console.log("Моё число больше");
        } else {
            console.log("Моё число меньше");
        }
        console.log(rnm, d)

        if(d === rnm) {
            console.log("Отгадал!");
            flag = false;
            rl.close();
            break;
        }
    }
})()

