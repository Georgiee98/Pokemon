

fetch("./source.json")
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

    let pokemonName = document.createElement("p");
    pokemonName.setAttribute("id", "name");



    introBottom.appendChild(pokemonName);

    let pokemonType = document.createElement("p");
    pokemonType.setAttribute("id", "type");

    introBottom.appendChild(pokemonType);

    // Right Side of Card

    let details = document.createElement("div");
    details.setAttribute("id", "details");
    details.style.display = "flex";

    main.appendChild(details);

    let pokemonHP = document.createElement("p");
    pokemonHP.setAttribute("id", "hp");
    details.appendChild(pokemonHP);

    let pokemonATK = document.createElement("p");
    pokemonATK.setAttribute("id", "atk");
    details.appendChild(pokemonATK);

    let pokemonDEF = document.createElement("p");
    pokemonDEF.setAttribute("id", "def");
    details.appendChild(pokemonDEF);

    let pokemonSPatk = document.createElement("p");
    pokemonSPatk.setAttribute("id", "sp-atk");
    details.appendChild(pokemonSPatk);

    let pokemonSPdef = document.createElement("p");
    pokemonSPdef.setAttribute("id", "sp-def");
    details.appendChild(pokemonSPdef);

    let pokemonSpeed = document.createElement("p");
    pokemonSpeed.setAttribute("id", "speed");
    details.appendChild(pokemonSpeed);

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


    pokemonHP.textContent = 'HP: ' + pokemon.base['HP']
    pokemonATK.textContent = 'Attack:' + pokemon.base['Attack']
    pokemonDEF.textContent = 'Defense: ' + pokemon.base['Defense']
    pokemonSPatk.textContent = 'Sp.Atk: ' + pokemon.base['Sp. Attack']
    pokemonSPdef.textContent = 'Sp.Def: ' + pokemon.base['Sp. Defense']
    pokemonSpeed.textContent = 'Speed: ' + pokemon.base['Speed']




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

