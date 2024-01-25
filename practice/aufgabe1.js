
//Aufgabe1
function aufgabe1(str) {
    var umgekehrterStr = str.split('').reverse().join('');
    console.log(`Der umgedrehte String lautet: ${umgekehrterStr}`);
}

//Aufgabe2
function aufgabe2(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    console.log(`Die Temperatur in Fahrenheit beträgt: ${fahrenheit}`);
};

//Aufgabe3
function aufgabe3(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random()%characters.length));
    }
    console.log(`Ihr zufällig generiertes Passwort ist: ${password}`);
}
