var vwins =0;
    var vlosses =0;
    var vgussesleft = 10;
    var vyuorGusses = [];

    var userWins = document.getElementById("wins");
    var userLosses = document.getElementById("losses");
    var userGuessesLeft = document.getElementById("guessesLeft");
    var yourGuesses = document.getElementById("yourGuesses");

    function getRandomChar(){
	        var cCode = Math.floor(Math.random() * (123 - 97) ) + 97;
	        console.log(String.fromCharCode(cCode));
	        return String.fromCharCode(cCode);
    }
    
    document.onkeyup = function(event){
        console.log("Key up called" + event.keyCode + event.key);                
        var usersLetter = event.key;
        if (event.key.charCodeAt(0) < 97 || event.key.charCodeAt(0) > 122){
            return ;
        }
        var randomLetter = getRandomChar();

        if(usersLetter === randomLetter){
            vwins ++;
            vyuorGusses = [];
            vgussesleft = 10;
        }
        else{
            vgussesleft --;
            vyuorGusses.push(usersLetter);
            if(vgussesleft == 0){
                vlosses++;
                vyuorGusses = [];
                vgussesleft = 10;
            }
        }
        printvar();
    }
    function printvar(){
        userWins.innerText = "Wins: " + vwins;
        userLosses.innerText = "Losses: " + vlosses;
        userGuessesLeft.innerText = "Guesses Left: " + vgussesleft;
        yourGuesses.innerText="Your gusses so far: " + vyuorGusses;
    }
    printvar();    
    