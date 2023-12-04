// Function to create div based on the number of Pokémon
function generate_div() {
    // GitHUb URL where all the pokemon data are
    const url = "https://raw.githubusercontent.com/Raghork/pokedex/main/assets/json/pokedex.json";
    // Taking the div with class 'body'
    const body = document.querySelector('.pokemon-div');
    const imgpath = "/Pokedex/assets/img/";
    const htmlPage = document.createElement('html');

    // Fetching the data
    fetch(url).then(response => response.json()).then(jsonData => {
        // Use the jsonData variable in your application.
        for(let i = 0; i < Object.keys(jsonData['pokemon']).length; i++) {
            let img = new Image();
            let div = document.createElement('div');
            div.classList.add('pokemon');
            div.textContent = jsonData['pokemon'][i]['name'];
            switch(jsonData['pokemon'][i]['types'][0]) {
                case 'Normal':
                    div.style.backgroundColor = "#A8A77A";
                    break;
                case 'Fire':
                    div.style.backgroundColor = "#EE8130";
                    break;
                case 'Water':
                    div.style.backgroundColor = "#6390F0";
                    break;
                case 'Grass':
                    div.style.backgroundColor = "#7AC74C";
                    break;
                case 'Electric':
                    div.style.backgroundColor = "#F7D02C";
                    break;
                case 'Ice':
                    div.style.backgroundColor = "#96D9D6";
                    break;
                case 'Fighting':
                    div.style.backgroundColor = "#C22E28";
                    break;
                case 'Poison':
                    div.style.backgroundColor = "#A33EA1";
                    break;
                case 'Ground':
                    div.style.backgroundColor = "#E2BF65";
                    break;
                case 'Flying':
                    div.style.backgroundColor = "#A98FF3";
                    break;
                case 'Psychic':
                    div.style.backgroundColor = "#F95587";
                    break;
                case 'Bug':
                    div.style.backgroundColor = "#A6B91A";
                    break;
                case 'Rock':
                    div.style.backgroundColor = "#B6A136";
                    break;
                case 'Ghost':
                    div.style.backgroundColor = "#735797";
                    break;
                case 'Dragon':
                    div.style.backgroundColor = "#6F35FC";
                    break;
                case 'Dark':
                    div.style.backgroundColor = "#705746";
                    break;
                case 'Steel':
                    div.style.backgroundColor = "#B7B7CE";
                    break;
                case 'Fairy':
                    div.style.backgroundColor = "#D685AD";
                    break;
            }
            // Add image to the pokemon div
            img.src = imgpath + "" + jsonData['pokemon'][i]['img'];
            console.log(imgpath + " " + jsonData['pokemon'][i]['img']);
            div.appendChild(img);
            // Now we will add the click event listener to the pokemon div
            div.addEventListener('click', function() {
                modifyPokemonDetailsPage(jsonData['pokemon'][i]);
            });
            body.appendChild(div);
        }

    }).catch(error => {
        // Handle the error.
        console.log(error);
    });
}

function modifyPokemonDetailsPage(pokemon) {
    // Open the HTML page with the id as a parameter
    window.location.href = "pages/pokemon_details.html?" + pokemon['id'];
}