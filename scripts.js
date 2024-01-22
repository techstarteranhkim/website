// Funktion zur Berechnung des Alters
function berechneAlter(geburtsdatum) {
    var heute = new Date();
    var geburtsdatum = new Date(geburtsdatum);
    var alter = heute.getFullYear() - geburtsdatum.getFullYear();
    var m = heute.getMonth() - geburtsdatum.getMonth();
    if (m < 0 || (m === 0 && heute.getDate() < geburtsdatum.getDate())) {
        alter--;
    }
    return alter;
}

// Funktion zur Überprüfung der Volljährigkeit
function istVolljaehrig(geburtsdatum) {
    var alter = berechneAlter(geburtsdatum);
    if (alter >= 18) {
        return true;
    } else {
        return false;
    }
}

// Funktion zur Überprüfung des Alters
function checkAlter() {
    // Geburtsdatum abrufen
    var geburtsdatum = document.getElementById('geburtsdatum').value;

    // Alter berechnen und in der Konsole ausgeben
    var alter = berechneAlter(geburtsdatum);
    console.log("Sie sind " + alter + " Jahre alt.");

    // Überprüfen, ob die Person volljährig ist
    if (istVolljaehrig(geburtsdatum)) {
        console.log("Sie sind volljährig.");
    } else {
        console.log("Sie sind nicht volljährig.");
    }
}
