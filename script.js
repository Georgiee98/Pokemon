

fetch("source.json")
.then((res) => res.json())
.then((data) => {
  let body = document.querySelector("body");
  let container = document.createElement("div");
  container.setAttribute("class", "screen");
  body.appendChild(container);
  let subContainer = document.createElement("div");
  subContainer.setAttribute("class", "sub-container");


  container.appendChild(subContainer);
  data.forEach((pokemon) => {



    // Card Body
    let main = document.createElement("main");
    subContainer.appendChild(main);

    // Left-Upper part of the Card

    let intro = document.createElement("div");
    intro.setAttribute("class", "intro");
    main.append(intro);


    let introIMG = document.createElement("div");
    introIMG.setAttribute("class", "introIMG");
    intro.appendChild(introIMG);



    let introBottom = document.createElement("div");
    introBottom.setAttribute("class", "intro-bottom");

    intro.appendChild(introBottom);

    let pokemonName = document.createElement("h2");
    pokemonName.setAttribute("id", "name");



    introBottom.appendChild(pokemonName);

    let pokemonType = document.createElement("h3");
    pokemonType.setAttribute("id", "type");

    introBottom.appendChild(pokemonType);

    // Right Side of Card

    let details = document.createElement("div");
    details.setAttribute("class", "details");
    details.style.display = "flex";

    main.appendChild(details);

    let pokemonHPStats = document.createElement('div');
    pokemonHPStats.setAttribute('id', 'stats')
    details.append(pokemonHPStats)
    let pokemonHP = document.createElement("p");
    pokemonHP.setAttribute("id", "hp");
    pokemonHPStats.append(pokemonHP);
    let pokemonHP_div = document.createElement("div");
    pokemonHP_div.setAttribute("id", "hp_div");
    pokemonHPStats.append(pokemonHP_div);
    let pokemonHPStatsFullWidth = document.createElement('p')
    pokemonHPStatsFullWidth.setAttribute('id', 'pokemonStatsFullWidth')
    pokemonHP_div.append(pokemonHPStatsFullWidth)



    let pokemonATK_div = document.createElement("div");
    pokemonATK_div.setAttribute("id", "hp_div");
    details.append(pokemonATK_div);
    let pokemonATK = document.createElement("p");
    pokemonATK.setAttribute("id", "hp");
    pokemonATK_div.appendChild(pokemonATK);

    let pokemonDEF_div = document.createElement("div");
    pokemonDEF_div.setAttribute("id", "hp_div");
    details.append(pokemonDEF_div);
    let pokemonDEF = document.createElement("p");
    pokemonDEF.setAttribute("id", "hp");
    pokemonDEF_div.appendChild(pokemonDEF);

    let pokemonSPatk_div = document.createElement("div");
    pokemonSPatk_div.setAttribute("id", "hp_div");
    details.append(pokemonSPatk_div);
    let pokemonSPatk = document.createElement("p");
    pokemonSPatk.setAttribute("id", "hp");
    pokemonSPatk_div.appendChild(pokemonSPatk);

    let pokemonSPdef_div = document.createElement("div");
    pokemonSPdef_div.setAttribute("id", "hp_div");
    details.append(pokemonSPdef_div);
    let pokemonSPdef = document.createElement("p");
    pokemonSPdef.setAttribute("id", "hp");
    pokemonSPdef_div.appendChild(pokemonSPdef);

    let pokemonSpeed_div = document.createElement("div");
    pokemonSpeed_div.setAttribute("id", "hp_div");
    let pokemonSpeed = document.createElement("p");
    details.append(pokemonSpeed_div);
    pokemonSpeed.setAttribute("id", "hp");
    pokemonSpeed_div.appendChild(pokemonSpeed);


    // console.log(pokemon.name['english'])
    let fetchUrl = pokemon.name['english'].toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${fetchUrl}`)
    .then((response) => response.json())
    .then((data) => {
        console.log
        // console.log(data.sprites['front_default'])
        let pokemonImage = document.createElement("img");
        pokemonImage.setAttribute("id", "imgPlaceHolder");
        pokemonImage.setAttribute("class", "imgPlaceHolder");
        pokemonImage.src = data.sprites.other.home['front_default'];

        introIMG.appendChild(pokemonImage);
    })

    // Fetching Source


    // Pokemon Name & Type
    // pokemonName.textContent = pokemon.name["english"];
    pokemonName.textContent = pokemon.name["english"];
    // console.log(pokemon.type[0], pokemon.type[1], pokemon.type[2])
    pokemonType.textContent = `
    ${pokemon.type[0]}  ${pokemon.type[1] ? '& ' + pokemon.type[1] : ''} ${pokemon.type[2] ? ' ' + pokemon.type[2] : ''}`

    // console.log(details.getElementsByTagName('p')[0])

    pokemonHP.textContent = 'HP: ' + pokemon.base['HP']
    // pokemonHP_div.style.width = pokemon.base['HP'] > 119 ? "119%" : pokemon.base['HP'] + "%"
    pokemonHPStatsFullWidth.style.width = pokemon.base['HP'] > 119 ? "119%" : pokemon.base['HP'] + "%"

    pokemonATK.textContent = 'Attack: ' + pokemon.base['Attack']
    pokemonATK.style.width = pokemon.base['Attack'] > 119 ? "119%" :pokemon.base['Attack'] + "%"

    pokemonDEF.textContent = 'Defense: ' + pokemon.base['Defense']
    pokemonDEF.style.width = pokemon.base['Defense'] > 119 ? "119%" : pokemon.base['Defense'] + "%"

    pokemonSPatk.textContent = 'Sp.Atk: ' + pokemon.base['Sp. Attack']
    pokemonSPatk.style.width = pokemon.base['Sp. Attack'] > 119 ? "119" : pokemon.base['Sp. Attack'] + "%"

    pokemonSPdef.textContent = 'Sp.Def: ' + pokemon.base['Sp. Defense']
    pokemonSPdef.style.width = pokemon.base['Sp. Defense'] > 119 ? "119%" : pokemon.base['Sp. Defense'] + "%"

    pokemonSpeed.textContent = 'Speed: ' + pokemon.base['Speed']
    pokemonSpeed.style.width = pokemon.base['Speed'] > 119 ? "119%" : pokemon.base['Speed'] + "%"



                                                        // Toggle
                                                        main.addEventListener("click", () => {
                                                        let of_on = false;
                                                        if (details.style.display === "none") {
                                                        details.style.display = "flex";
                                                        } else {
                                                        details.style.display = "none";
                                                        }
                                                        });
  });


});

