/* Övning 1
Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.Anropa funktion och console.log svaret.Tips! Du kan skriva.length på en variabel som är en sträng för att få längden.
*/

function getStringLength() {

    let wordLength = stringLength(window.prompt('Kontrollera hur många tecken som en sträng har'))

    window.alert(wordLength)

    function stringLength(word) {
        return word.length
    }

}

/*
Övning 2
Skriv en funktion som plockar ut året från en sträng i datumformat.Använd substring(startIndex, endIndex) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring. Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.
*/

function getYear() {

    let dateInput = window.prompt('Skriv in ett datum med 10 tecken. (YYYY-MM-DD)')

    if (dateInput.length !== 10) {
        window.alert('Du måste skriva datumet med 10 tecken i format YYYY-MM-DD')
        getYear()
    } else {
        let year = parseInt(findYear(dateInput))
        window.alert(`Årtalet du skrev in är ${year}!`)
    }


}

function findYear(date) {
    return date.substring(0, 4)
}

/*
Övning 3
Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. Utför beräkningen och returnera summan och skriv ut. Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) och varje operation ska vara sin egen funktion. Tips! Här kan typeof vara bra att använda https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof Grunden till denna övninga, samt intruktioner finner du i mappen miniräknare.
*/


function calculator() {
    let nmberOne = parseInt(window.prompt('Skriv in första numret'))
    let nmberTwo = parseInt(window.prompt('Skriv in andra numret'))
    let operation = window.prompt('Vad vill du göra med numren ( +, -, /, *)')

    if (operation === '+') {
        addition(nmberOne, nmberTwo)
    } else if (operation === '-') {
        subtraction(nmberOne, nmberTwo)
    } else if (operation === '+') {
        division(nmberOne, nmberTwo)
    } else if (operation === '+') {
        multiplication(nmberOne, nmberTwo)
    } else {
        window.alert('Du måste skriva in en giltig operation ( +, -, /, *)')
        calculator()
    }
}

function addition(nmberOne, nmberTwo) {
    window.alert(nmberOne + nmberTwo)
}

function subtraction(nmberOne, nmberTwo) {
    window.alert(nmberOne - nmberTwo)
}

function division(nmberOne, nmberTwo) {
    window.alert(nmberOne / nmberTwo)
}

function multiplication(nmberOne, nmberTwo) {
    window.alert(nmberOne * nmberTwo)
}

/*
Övning 4
Gör om ditt sten, sax och påse - spel så du använder funktioner och försöker återanvända kod.
*/
function rockPaperScissor() {
    let scoreGoal = 3;
    let playerScore = 0;
    let computerScore = 0;
    let handSign = ['sten', 'sax', 'påse']

    while (playerScore < scoreGoal && computerScore < scoreGoal) {

        let playerHand = window.prompt(`
        Nuvarande poäng Spelare: ${playerScore}! Computer: ${computerScore}!
        Vad vill du välja Sten, Sax eller påse?`).toLowerCase()

        if (!handSign.includes(playerHand)) {
            window.alert('Du kan enbart spel Sten, Sax eller Påse')
        } else {
            let computerHand = handSign[Math.floor(Math.random() * handSign.length)]
            if (playerHand === computerHand) {
                messageDraw(playerHand)
            } else if ((playerHand === 'sten' && computerHand === 'sax') || (playerHand === 'sax' && computerHand === 'påse') || (playerHand === 'påse' && computerHand === 'sten')) {
                messageVictory(playerHand, computerHand)
                playerScore++
            } else {
                messageLoss(playerHand, computerHand)
                computerScore++
            }
        }
    }
    if (playerScore === scoreGoal) {
        gameChampionMessage('Spelare')
    } else if (computerScore === scoreGoal) {
        gameChampionMessage('Datorn')
    }
}
function messageDraw(player) {
    window.alert(`Ni båda valde ${player}, det blev inga poäng`)
}
function messageVictory(player, computer) {
    window.alert(`Grattis din ${player} besegrade din motståndares ${computer}!`)
}
function messageLoss(player, computer) {
    window.alert(`Åh nej din ${player} blev besegrad av din motståndares ${computer}!`)
}
function gameChampionMessage(winner) {
    window.alert(`Vinnaren är ${winner}! Grattis! `)
}