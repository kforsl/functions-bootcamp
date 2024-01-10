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
