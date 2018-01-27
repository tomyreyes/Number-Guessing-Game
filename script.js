function generateRandomNumber(max){
    return Math.floor(Math.random()* (max)) 
     
}


function Guess(value) {
//each guess will become an object which you can be stored in an array called guessCounter
//once the guessCounter array reaches a certain length, the game ends based on difficulty setting 
    this.value = value    
}


function getGuessFromUser(max, min) {
    let promptedGuess = prompt(`Pick a number from ${min} to ${max}`)
    while (isNaN(promptedGuess) || promptedGuess === '') {
        promptedGuess = prompt('Make sure you are guessing a number!')
    }
    return Number(promptedGuess)
}

function getMaxFromUser(){
    let max = prompt ('Please set the max range I can choose from. Enter 0 if you don\'t want to play.')
    while(isNaN(max)){
       max = prompt ('Please use numbers.')
    } return Number(max)
}


function isGuessCorrect(goal, guess){
    if (guess === goal) {
        alert('Congratulations, you have won')
        return true
    } else
    return false 
}


function getDifficulty() {

    let difficultySetting = prompt('Let\'s choose the difficulty. Pick easy, medium or hard')

    while (difficultySetting !== 'easy' && difficultySetting !== 'medium' && difficultySetting !== 'hard') {
        difficultySetting = prompt('Pick a difficulty.')
    }
    if (difficultySetting === 'easy') {
        difficultySetting = 15
        console.log(difficultySetting)
        return Number(difficultySetting)
    }
    else if (difficultySetting === 'medium') {
        difficultySetting = 10
        console.log(difficultySetting)
        return Number(difficultySetting)
    }
    else if (difficultySetting === 'hard') {
        difficultySetting = 5
        console.log(difficultySetting)
        return Number(difficultySetting)
    }

}

function startGame(){
    
    let endGame = false;

    let name = prompt('What is your name?')

    let guessCounter = [] 

    alert(`Welcome ${name} ,let\'s play a guessing game.` )
    
    let max = getMaxFromUser()
    
    if (max === 0) {
        alert('What? Is my game not good enough?!')
        endGame = true
    }
    else {
        let goal = generateRandomNumber(max)
        console.log(goal)
        let setDifficulty = getDifficulty()
        
        let min = 0
    while (!endGame) {
        let guess = new Guess()
        
        guess.value = getGuessFromUser(max, min)

        guessCounter.push(guess)

         if(isGuessCorrect(goal, guess.value)){
            endGame = true

        } else if (guessCounter.length >= setDifficulty) {
            alert('You have lost. Nice try!')
            endGame = true 

        } else if (guess.value > goal){
            alert('Your guess is too high')
            max = guess.value - 1
        }

        else{
            alert('Your guess is too low')
            min = guess.value + 1
        }
        }
        
    }
}

startGame()

