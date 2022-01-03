console. clear();
const readlineSync = require("readline-sync");
let gameOver = false
let keyFound = false

const name = readlineSync.question("What is your name?   ");


if (readlineSync.keyInYNStrict("Hello, " + name + ", would you like to play a game?  ")){
        console.log("Ok, " + name + ", here we go.  You have been locked in a dark office by a killer. He has given you a chance to escape by hiding a key.")
        console.log("You must find the key to unlock the door and escape. But beware, he has also set a trap.")
        console.log("Now go find the key, good luck");
}
        else {
                console.log("Too bad, maybe another time, goodbye " + name);
                gameOver=true;
}


        
while(!gameOver && !keyFound){
        options = ["find the key", "unlock the door", "put hand in hole", ];
        index = readlineSync.keyInSelect(options, "What do you want to do?"); 
                console.log("Ok, " + name + ", you chose " + options[index]);
        
        
                if (index=== 0) {
                        gameOver=false;
                        keyFound=true;
                        console.log(name + ", you found the key, now unlock the door and escape. Good job!.");
                        console.log("GAME OVER");
                }        

                else if(index===1) {
                        gameOver=false;
                        keyFound=false;
                        console.log(name + ", you must find the key first");
                }
                else if(index===2){
                        gameOver=true;
                        keyFound=false;
                        console.log(name + ", you put your hand in the hole and touched the poison, you will die");
                        console.log("GAME OVER");
                }          
}     