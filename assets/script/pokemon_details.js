function pokemonInformation() {
    // GitHUb URL where all the pokemon data are
    const url = "https://raw.githubusercontent.com/Raghork/pokedex/main/assets/json/pokedex.json";
    const urlParams = window.location.href.split('?')[1].split('&');
    const imgpath = "../assets/img/";
    fetch(url).then(response => response.json()).then(jsonData => {
        for(let i = 0; i < Object.keys(jsonData['pokemon']).length; i++) {
            if(jsonData['pokemon'][i]['id'] == urlParams) {
                // Changing the name
                const pokemonHeader = document.querySelector('.pokemon-header');
                // Changing the type
                document.querySelector('.pokemon-name').textContent = jsonData['pokemon'][i]['name'];
                for(let y = 0; y <= jsonData['pokemon'][i]['types'].length; y++) {
                    let div = document.createElement('div');
                    div.textContent = jsonData['pokemon'][i]['types'][y];
                    div.classList.add('pokemon-type');
                    pokemonHeader.appendChild(div);
                }
                // Changing the image
                let img = new Image();
                img.src = imgpath + "" + jsonData['pokemon'][i]['img'];
                document.querySelector('.pokemon-image').appendChild(img);
                // Changing the name in the About
                document.querySelector('#name').textContent = "Name: " + jsonData['pokemon'][i]['name'];
                // Changing the height in the About
                document.querySelector('#height').textContent = "Height: " + jsonData['pokemon'][i]['height'];
                // Changing the weight in the About
                document.querySelector('#weight').textContent = "Weight: " + jsonData['pokemon'][i]['weight'];
                // Changing the region in the About
                document.querySelector('#region').textContent = "Region: " + jsonData['pokemon'][i]['region'];
                // Changing the weakness in the About
                let weakness = document.querySelector('#weakness');
                weakness.textContent = "Weakness: ";
                for(let y = 0; y < jsonData['pokemon'][i]['weaknesses'].length; y++) {
                    weakness.textContent += jsonData['pokemon'][i]['weaknesses'][y] + " ";
                }
                // Changing the strenghts in the About
                let strengths = document.querySelector('#strengths');
                strengths.textContent = "Strenghts: ";
                for(let y = 0; y < jsonData['pokemon'][i]['strengths'].length; y++) {
                    strengths.textContent += jsonData['pokemon'][i]['strengths'][y] + " ";
                }
                // Changing the description in the About
                document.querySelector('#description').textContent = jsonData['pokemon'][i]['description'];
                // Changing the HP in the Base Stats
                document.querySelector('#hp').textContent = "HP: " + jsonData['pokemon'][i]['base_stats']['hp'];
                // Changing the attack in the Base Stats
                document.querySelector('#attack').textContent = "Attack: " + jsonData['pokemon'][i]['base_stats']['attack'];
                // Changing the defense in the Base Stats
                document.querySelector('#defense').textContent = "Defense: " + jsonData['pokemon'][i]['base_stats']['defense'];
                // Changing the special attack in the Base Stats
                document.querySelector('#specialAttack').textContent = "Sp. Attack: " + jsonData['pokemon'][i]['base_stats']['special_attack'];
                // Changing the special defense in the Base Stats
                document.querySelector('#specialDefense').textContent = "Sp. Defense: " + jsonData['pokemon'][i]['base_stats']['special_defense'];
                // Changing the speed in the Base Stats
                document.querySelector('#speed').textContent = "Speed: " + jsonData['pokemon'][i]['base_stats']['speed'];
                // Changing the previous evolution in the Evolution
                if(jsonData['pokemon'][i]['previous_evolution'] != null) {
                    let p = document.querySelector('#previousEvolution');
                    p.textContent = "Previous Evolution: "
                    for(let y = 0; y < Object.keys(jsonData['pokemon'][i]['previous_evolution']).length; y++) {
                        p.textContent += jsonData['pokemon'][i]['previous_evolution'][y]['name'] + " ";
                    }
                } else {
                    document.querySelector('#previousEvolution').textContent = "Previous Evolution: Just Hatched";
                }
                // Changing the next evolution in the Evolution
                if(jsonData['pokemon'][i]['next_evolution'] != null) {
                    let p = document.querySelector('#nextEvolution');
                    p.textContent = "Next Evolution: "
                    for(let y = 0; y < Object.keys(jsonData['pokemon'][i]['next_evolution']).length; y++) {
                        p.textContent += jsonData['pokemon'][i]['next_evolution'][y]['name'] + " ";
                    }
                } else {
                    document.querySelector('#nextEvolution').textContent = "Next Evolution: Maxed out";
                }
                const pokemonTopDiv = document.querySelector('.pokemon-top');
                // Changing the background color
                switch(jsonData['pokemon'][i]['types'][0]) {
                    case 'Normal':
                        pokemonTopDiv.style.backgroundColor = "#A8A77A";
                        break;
                    case 'Fire':
                        pokemonTopDiv.style.backgroundColor = "#EE8130";
                        break;
                    case 'Water':
                        pokemonTopDiv.style.backgroundColor = "#6390F0";
                        break;
                    case 'Grass':
                        pokemonTopDiv.style.backgroundColor = "#7AC74C";
                        break;
                    case 'Electric':
                        pokemonTopDiv.style.backgroundColor = "#F7D02C";
                        break;
                    case 'Ice':
                        pokemonTopDiv.style.backgroundColor = "#96D9D6";
                        break;
                    case 'Fighting':
                        pokemonTopDiv.style.backgroundColor = "#C22E28";
                        break;
                    case 'Poison':
                        pokemonTopDiv.style.backgroundColor = "#A33EA1";
                        break;
                    case 'Ground':
                        pokemonTopDiv.style.backgroundColor = "#E2BF65";
                        break;
                    case 'Flying':
                        pokemonTopDiv.style.backgroundColor = "#A98FF3";
                        break;
                    case 'Psychic':
                        pokemonTopDiv.style.backgroundColor = "#F95587";
                        break;
                    case 'Bug':
                        pokemonTopDiv.style.backgroundColor = "#A6B91A";
                        break;
                    case 'Rock':
                        pokemonTopDiv.style.backgroundColor = "#B6A136";
                        break;
                    case 'Ghost':
                        pokemonTopDiv.style.backgroundColor = "#735797";
                        break;
                    case 'Dragon':
                        pokemonTopDiv.style.backgroundColor = "#6F35FC";
                        break;
                    case 'Dark':
                        pokemonTopDiv.style.backgroundColor = "#705746";
                        break;
                    case 'Steel':
                        pokemonTopDiv.style.backgroundColor = "#B7B7CE";
                        break;
                    case 'Fairy':
                        pokemonTopDiv.style.backgroundColor = "#D685AD";
                        break;
                }
            }
        }
    }).catch(error => {
        // Handle the error.
        console.log(error);
    });
}

function change(id) {
    let div = document.getElementById(id);
    if(id == 'pokemon-about') {
        document.getElementById('pokemon-base-stats').style.display = 'none';
        document.getElementById('pokemon-evolutions').style.display = 'none';
        div.style.display = 'block';
    }
    if(id == 'pokemon-base-stats') {
        document.getElementById('pokemon-about').style.display = 'none';
        document.getElementById('pokemon-evolutions').style.display = 'none';
        div.style.display = 'block';
    }
    if(id == 'pokemon-evolutions') {
        document.getElementById('pokemon-about').style.display = 'none';
        document.getElementById('pokemon-base-stats').style.display = 'none';
        div.style.display = 'block';
    }
}