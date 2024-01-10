/* Övning 1
Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.Anropa funktion och console.log svaret.Tips! Du kan skriva.length på en variabel som är en sträng för att få längden.
*/

let wordLength = stringLength(window.prompt('Kontrollera hur många tecken som en sträng har'))

window.alert(wordLength)

function stringLength(word) {
    return word.length
}

