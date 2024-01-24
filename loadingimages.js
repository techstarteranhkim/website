var jsonData = {
    profile: {
        name: "Black cat",
        style: "classy",
        age: 5
    },
    images: [
    'https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
    "https://t3.ftcdn.net/jpg/03/31/21/08/240_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg",
    'https://t4.ftcdn.net/jpg/01/02/62/81/240_F_102628155_ZPiAaNEDRSZU2S0LAkbcgvwLyMmr9c2Y.jpg'
      // Weitere URLs...
    ]
};

function simulateDatabaseQuery(callback) {
    setTimeout(callback, 5000);
}

function loadImages() {
    var imageGrid = document.querySelector('.grid-container');
    var loadingGif = document.createElement('img');
    loadingGif.src = 'https://media.tenor.com/Q8_ty0N3NxMAAAAM/loading-screen-loading.gif';
    loadingGif.id = 'loading';
    imageGrid.appendChild(loadingGif);

    // Zeige das Lade-GIF an
    loadingGif.style.display = 'block';

    // Simuliere die Datenbankabfrage
    simulateDatabaseQuery(function () {
      // Verstecke das Lade-GIF nach der Datenbankabfrage

      loadingGif.style.display = 'none';

      // Iteriere durch die Bild-URLs im JSON-Objekt
      jsonData.images.forEach(function (imageUrl) {
        var imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.className='grid-item img'

        imageGrid.appendChild(imageElement);
      });

      /* jsonData.profile.forEach(function (profile) {
        var imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.className='grid-item img'

        imageGrid.appendChild(imageElement);
      }); */
    });
}

function displayProfile() {
    
    var profile = jsonData.profile;
    var profileDiv = document.createElement('div');

    var nameElement = document.createElement('p');
    nameElement.textContent = "Name: " + profile.name;
    profileDiv.appendChild(nameElement);

    var styleElement = document.createElement('p');
    styleElement.textContent = "Style: " + profile.style;
    profileDiv.appendChild(styleElement);

    var ageElement = document.createElement('p');
    ageElement.textContent = "Age: " + profile.age;
    profileDiv.appendChild(ageElement);

    document.body.appendChild(profileDiv);
}

document.addEventListener('DOMContentLoaded', loadImages);
document.addEventListener('DOMContentLoaded', displayProfile);
