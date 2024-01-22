// Erstellt ein Array mit Hobbies
var hobbies = ["One", "Two", "Three", "Four", "Five"];

// Funktion, die ein Element zu dem Array hinzufügt
function hinzufuegenHobby(hobby) {
    // Falls mehr als 5 Elemente in dem Array sind, soll zunächst das erste Element gelöscht werden
    if (hobbies.length >= 5) {
        hobbies.shift();
    }

    // Das Element wird ans Ende angehängt
    hobbies.push(hobby);
}

// Fügt ein neues Hobby hinzu
hinzufuegenHobby("Six");
hinzufuegenHobby("Seven");

// Gibt die Hobbies über einen for-loop aus
for (var i = 0; i < hobbies.length; i++) {
    console.log("Mein " + (i + 1) + ". Hobby: " + hobbies[i]);
}

