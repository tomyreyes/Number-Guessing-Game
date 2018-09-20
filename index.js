const readlineSync = require('readline-sync');


function generateRandomNumber(max) {

    return Math.floor(Math.random() * max + 1)

}

function Guess(value) {
    //each guess will become an object which you can be stored in an array called guessCounter
    //once the guessCounter array reaches a certain length, the game ends based on difficulty setting 
    this.value = value
}

function getGuessFromUser(max, min) {

    let promptedGuess = readlineSync.question(`Pick a number from ${min} to ${max} `)
    while (isNaN(promptedGuess) || promptedGuess === '') {
        promptedGuess = readlineSync.question('Make sure you are guessing a number! ')
    }
    return Number(promptedGuess)
}

function getMaxFromUser() {

    let max = readlineSync.question('Please set the max range I can choose from. Enter 0 if you don\'t want to play. ')
    while (isNaN(max)) {
        max = readlineSync.question('Please use numbers. ')
    }
    return Number(max)
}

function isGuessCorrect(winningNumber, guess) {

    if (guess === winningNumber) {

        console.log('Congratulations, you have won')
        return true
    } else {

        return false
    }
}

function getDifficulty() {

    let decision = false

    while (!decision) {

        let difficultySetting = readlineSync.question('Let\'s choose the difficulty. Pick easy, medium or hard ').toLowerCase()

        if (difficultySetting === 'easy') {

            decision = true
            difficultySetting = 15
            return Number(difficultySetting)
        }
        else if (difficultySetting === 'medium') {

            decision = true
            difficultySetting = 10
            return Number(difficultySetting)
        }
        else if (difficultySetting === 'hard') {

            decision = true
            difficultySetting = 5
            return Number(difficultySetting)
        }
    }

}

function restartGame() {

    let decision = false

    while (!decision) {
        let answer = readlineSync.question('Would you like to play again? ').toLowerCase()

        if (answer === 'yes' || answer === 'y') {
            decision = true
            startGame()
        }
        if (answer === 'no' || answer === 'n') {
            decision = true
            console.log('Have a great day')
        }
    }

}

function startGame() {

    //set initial variables for start of game
    let endGame = false
    let guessCounter = []
    let userName = readlineSync.question('What is your name? ')

    console.log(`Welcome ${userName}, let\'s play a guessing game. `)

    let max = getMaxFromUser()

    if (max === 0) {

        console.log('What? Is my game not good enough?! ')
        endGame = true
    }
    else {

        let winningNumber = generateRandomNumber(max)
        console.log(winningNumber)
        let setDifficulty = getDifficulty()
        let min = 1

        while (!endGame) {

            let guess = new Guess()
            guess.value = getGuessFromUser(max, min)

            if (guess.value === 0) {

                console.log('See ya!')
                endGame = true
            } else {

                guessCounter.push(guess)

                if (isGuessCorrect(winningNumber, guess.value)) {

                    endGame = true
                    console.log('You won')
                    restartGame()

                } else if (guessCounter.length >= setDifficulty) {

                    endGame = true
                    console.log('You have lost. Nice try!')
                    restartGame()

                } else if (guess.value > winningNumber) {

                    console.log('Your guess is too high')
                    max = guess.value - 1
                }

                else {

                    console.log('Your guess is too low')
                    min = guess.value + 1
                }

            }

        }
    }
}

startGame()