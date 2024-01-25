document.getElementById('changeSizeButton').onclick = function() {
    let radius = document.getElementById('radiusInput').value;
    let diameter = getDiameter(radius);
    changeCircleSize(diameter);
    document.getElementById('diameterOutput').textContent = 'Der Durchmesser des Kreises beträgt: ' + diameter + 'px';
}

function getDiameter(radius) {
    return radius * 2;
}

function changeCircleSize(diameter) {
    let circle = document.getElementById('circle');
    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";
}
