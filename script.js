fetch("source.json")
  .then((res) => res.json())
  .then((data) => {
    let body = document.querySelector("body");
    let container = document.createElement("div");
    container.setAttribute("class", "screen");
    body.appendChild(container);
    let subContainer = document.createElement("div");
    subContainer.setAttribute("class", "sub-container");

    let pokemonList = data;
    let visiblePokemons = pokemonList;

    let renderPokemon = (data) => {
      subContainer.innerHTML = "";

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
        details.style.display = "none";

        main.appendChild(details);

        let pokemonHPStats = document.createElement("div");
        pokemonHPStats.setAttribute("id", "stats");
        details.append(pokemonHPStats);

        let pokemonHP = document.createElement("p");
        pokemonHP.setAttribute("id", "hp");
        pokemonHPStats.append(pokemonHP);

        let pokemonHP_div = document.createElement("div");
        pokemonHP_div.setAttribute("id", "hp_div");
        pokemonHPStats.append(pokemonHP_div);

        let pokemonHPStatsFullWidth = document.createElement("p");
        pokemonHPStatsFullWidth.setAttribute("id", "pokemonStatsFullWidth");
        pokemonHP_div.append(pokemonHPStatsFullWidth);

        let pokemonATKStats = document.createElement("div");
        pokemonATKStats.setAttribute("id", "stats");
        details.append(pokemonATKStats);

        let pokemonATK = document.createElement("p");
        pokemonATK.setAttribute("id", "hp");
        pokemonATKStats.appendChild(pokemonATK);

        let pokemonATK_div = document.createElement("div");
        pokemonATK_div.setAttribute("id", "hp_div");
        pokemonATKStats.append(pokemonATK_div);

        let pokemonATKStatsFullWidth = document.createElement("p");
        pokemonATKStatsFullWidth.setAttribute("id", "pokemonStatsFullWidth");
        pokemonATK_div.append(pokemonATKStatsFullWidth);

        let pokemonDEFStats = document.createElement("div");
        pokemonDEFStats.setAttribute("id", "stats");
        details.append(pokemonDEFStats);

        let pokemonDEF = document.createElement("p");
        pokemonDEF.setAttribute("id", "hp");
        pokemonDEFStats.appendChild(pokemonDEF);

        let pokemonDEF_div = document.createElement("div");
        pokemonDEF_div.setAttribute("id", "hp_div");
        pokemonDEFStats.append(pokemonDEF_div);

        let pokemonDEFStatsFullWidth = document.createElement("p");
        pokemonDEFStatsFullWidth.setAttribute("id", "pokemonStatsFullWidth");
        pokemonDEF_div.append(pokemonDEFStatsFullWidth);

        let pokemonSPatkStats = document.createElement("div");
        pokemonSPatkStats.setAttribute("id", "stats");
        details.append(pokemonSPatkStats);

        let pokemonSPatk = document.createElement("p");
        pokemonSPatk.setAttribute("id", "hp");
        pokemonSPatkStats.appendChild(pokemonSPatk);

        let pokemonSPatk_div = document.createElement("div");
        pokemonSPatk_div.setAttribute("id", "hp_div");
        pokemonSPatkStats.append(pokemonSPatk_div);

        let pokemonSPatkStatsFullWidth = document.createElement("p");
        pokemonSPatkStatsFullWidth.setAttribute("id", "pokemonStatsFullWidth");
        pokemonSPatk_div.append(pokemonSPatkStatsFullWidth);

        let pokemonSPdefStats = document.createElement("div");
        pokemonSPdefStats.setAttribute("id", "stats");
        details.append(pokemonSPatkStats);

        let pokemonSPdef = document.createElement("p");
        pokemonSPdef.setAttribute("id", "hp");
        pokemonSPdefStats.appendChild(pokemonSPdef);

        let pokemonSPdef_div = document.createElement("div");
        pokemonSPdef_div.setAttribute("id", "hp_div");
        pokemonSPdefStats.append(pokemonSPdef_div);

        let pokemonSPdefStatsFullWidth = document.createElement("p");
        pokemonSPdefStatsFullWidth.setAttribute("id", "pokemonStatsFullWidth");
        pokemonSPdef_div.append(pokemonSPdefStatsFullWidth);

        let pokemonSpeedStats = document.createElement("div");
        pokemonSpeedStats.setAttribute("id", "stats");
        details.append(pokemonSpeedStats);

        let pokemonSpeed = document.createElement("p");
        pokemonSpeed.setAttribute("id", "hp");
        pokemonSpeedStats.appendChild(pokemonSpeed);

        let pokemonSpeed_div = document.createElement("div");
        pokemonSpeed_div.setAttribute("id", "hp_div");
        pokemonSpeedStats.append(pokemonSpeed_div);

        let pokemonSpeedStatsFullWidth = document.createElement("p");
        pokemonSpeedStatsFullWidth.setAttribute("id", "pokemonStatsFullWidth");
        pokemonSpeed_div.append(pokemonSpeedStatsFullWidth);

        // console.log(pokemon.name['english'])
        let fetchUrl = pokemon.name["english"].toLowerCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${fetchUrl}`)
          .then((response) => response.json())
          .then((data) => {
            console.log;
            // console.log(data.sprites['front_default'])
            let pokemonImage = document.createElement("img");
            pokemonImage.setAttribute("id", "imgPlaceHolder");
            pokemonImage.setAttribute("class", "imgPlaceHolder");
            pokemonImage.src = data.sprites.other.home["front_default"];

            introIMG.appendChild(pokemonImage);
          });

        // Fetching Source

        // Pokemon Name & Type
        // pokemonName.textContent = pokemon.name["english"];
        pokemonName.textContent = pokemon.name["english"];
        // console.log(pokemon.type[0], pokemon.type[1], pokemon.type[2])
        pokemonType.textContent = `
        ${pokemon.type[0]}\n${pokemon.type[1] ? " & " + pokemon.type[1] : ""}\n${
              pokemon.type[2] ? " & " + pokemon.type[2] : ""
            }`;

        // console.log(details.getElementsByTagName('p')[0])

        pokemonHP.textContent = "HP: " + pokemon.base["HP"];
        // pokemonHP_div.style.width = pokemon.base['HP'] > 119 ? "119%" : pokemon.base['HP'] + "%"
        pokemonHPStatsFullWidth.style.width =
          pokemon.base["HP"] > 100 ? "100%" : pokemon.base["HP"] + "%";

        pokemonATK.textContent = "Attack: " + pokemon.base["Attack"];
        // pokemonATK.style.width = pokemon.base['Attack'] > 119 ? "119%" :pokemon.base['Attack'] + "%"
        pokemonATKStatsFullWidth.style.width =
          pokemon.base["Attack"] > 100 ? "100%" : pokemon.base["Attack"] + "%";

        pokemonDEF.textContent = "Defense: " + pokemon.base["Defense"];
        // pokemonDEF.style.width = pokemon.base['Defense'] > 119 ? "119%" : pokemon.base['Defense'] + "%"
        pokemonDEFStatsFullWidth.style.width =
          pokemon.base["Defense"] > 100
            ? "100%"
            : pokemon.base["Defense"] + "%";

        pokemonSPatk.textContent = "Sp.Atk: " + pokemon.base["Sp. Attack"];
        // pokemonSPatk.style.width = pokemon.base['Sp. Attack'] > 119 ? "119" : pokemon.base['Sp. Attack'] + "%"
        pokemonSPatkStatsFullWidth.style.width =
          pokemon.base["Sp. Attack"] > 100
            ? "100%"
            : pokemon.base["Sp. Attack"] + "%";

        pokemonSPdef.textContent = "Sp.Def: " + pokemon.base["Sp. Defense"];
        // pokemonSPdef.style.width = pokemon.base['Sp. Defense'] > 119 ? "119%" : pokemon.base['Sp. Defense'] + "%"
        pokemonSPdefStatsFullWidth.style.width =
          pokemon.base["Sp. Defense"] > 100
            ? "100%"
            : pokemon.base["Sp. Defense"] + "%";

        pokemonSpeed.textContent = "Speed: " + pokemon.base["Speed"];
        // pokemonSpeed.style.width = pokemon.base['Speed'] > 119 ? "119%" : pokemon.base['Speed'] + "%"
        pokemonSpeedStatsFullWidth.style.width =
          pokemon.base["Speed"] > 100 ? "100%" : pokemon.base["Speed"] + "%";

        let slideIcon = document.createElement("img");
        slideIcon.src = "/assets/slide-right.png";
        slideIcon.setAttribute("class", "slideIcon");
        intro.appendChild(slideIcon);

        // Toggle
        slideIcon.addEventListener("click", () => {
          if (details.style.display === "none") {
            details.style.display = "flex";
            slideIcon.style.transform = "scaleX(1)";
          } else {
            details.style.display = "none";
            slideIcon.style.transform = "scaleX(-1)";

          }
        });
        // Toggle
        details.addEventListener("click", () => {
          console.log("Clicked");
          if (details.style.display === "none") {
            details.style.display = "flex";
            slideIcon.style.transform = "scaleX(1)";
          } else {
            details.style.display = "none";
            slideIcon.style.transform = "scaleX(-1)";
          }
        });




        let fightDiv = document.createElement('div')
        fightDiv.setAttribute('class', 'fightDiv')
        fightDiv.style.display = "none"
        subContainer.appendChild(fightDiv)

        let selectedPokemonText = document.createElement('p')
        selectedPokemonText.setAttribute('class','fight')
        selectedPokemonText.textContent = "You've selected: ";
        fightDiv.appendChild(selectedPokemonText)

        let selectedPokemonNameText = document.createElement('p')

        fightDiv.appendChild(selectedPokemonNameText)



        let selectPokemon = document.createElement('button')
        selectPokemon.setAttribute('class', 'selectPokemonBTN')
        selectPokemon.textContent = "Select"
        introBottom.appendChild(selectPokemon)



      let cancelFightIcon1 = document.createElement('img')
        cancelFightIcon1.src = '/assets/cancel-button.png'
        cancelFightIcon1.setAttribute('class', 'cancelFightIcon')

        fightDiv.appendChild(cancelFightIcon1)





        let yesNoDiv = document.createElement('div')
        yesNoDiv.setAttribute('class', 'yesNoDiv')
        fightDiv.appendChild(yesNoDiv)


        let yesFight = document.createElement('a')
        yesFight.textContent = 'Yes'
        // yesFight.href = "/fight.html"
        yesFight.setAttribute('class', 'yesFight')
        yesNoDiv.appendChild(yesFight)


        let noFight = document.createElement('p')
        noFight.textContent = 'No'
        noFight.setAttribute('class', 'yesFight')
        yesNoDiv.appendChild(noFight)

        selectPokemon.addEventListener('click', () => {
          let selectedPokemon = pokemonName.innerHTML
          selectedPokemonNameText.textContent = selectedPokemon;

          if (fightDiv.style.display == "none") {
            fightDiv.style.display = "flex"
          }

        })

        cancelFightIcon1.addEventListener('click', () => {
          fightDiv.style.display = "none"
        })
        noFight.addEventListener('click', () => {
          fightDiv.style.display = "none"
        })


        yesFight.addEventListener('click', () => {
          console.log(pokemonName.innerHTML)
          fightDiv.style.display = "none"


          let fightingContainer = document.createElement('div')
          fightingContainer.setAttribute('class','fighting-container')
          subContainer.append(fightingContainer)


          let fightingSubContainer = document.createElement('div')
          fightingSubContainer.setAttribute('class','fighting-sub-container')
          fightingContainer.appendChild(fightingSubContainer)

          let fighterOneDiv = document.createElement('div')
          fighterOneDiv.setAttribute('class','fighterOneDiv')
          fightingSubContainer.appendChild(fighterOneDiv)

          let fighterOne = document.createElement('p')
          fighterOne.setAttribute('class','fighterOne')
          fightingSubContainer.appendChild(fighterOne)


          let fighterTwoDiv = document.createElement('div')
          fighterTwoDiv.setAttribute('class','fighterTwoDiv')
          fighterOne.textContent = "Fighter One"
          fightingSubContainer.appendChild(fighterTwoDiv)

          let fighterTwo = document.createElement('p')
          fighterTwo.setAttribute('class','fighterTwo')
          fighterTwo.textContent = "Fighter Two"
          fightingSubContainer.appendChild(fighterTwo)


          // Display Fighters
          let newIntroIMG = introIMG
          fighterOneDiv.append(newIntroIMG)
          // name
          let pokemonFighter1Name = document.createElement('p')
          pokemonFighter1Name.textContent = pokemonName.textContent
          fighterOneDiv.append(pokemonFighter1Name)

          let pokemonFighter1Type = document.createElement('p')
          pokemonFighter1Type.textContent = pokemonType.textContent
          fighterOneDiv.append(pokemonFighter1Type)










          // Stats
          let pokemon1FightStats = [
            pokemonHP.textContent,
            pokemonATK.textContent,
            pokemonDEF.textContent,
            pokemonSPatk.textContent,
            pokemonSPdef.textContent,
            pokemonSpeed.textContent
          ];

          const sumPowerFighter1 = pokemon1FightStats.reduce((acc, element) => {
            const number = parseFloat(element.match(/\d+/)[0]);
            return acc + number;
          }, 0);

          console.log(sumPowerFighter1);

          let powerFighter1 = document.createElement('p')
          powerFighter1.textContent = "Power: " + sumPowerFighter1
          fighterOneDiv.append(powerFighter1)



          newIntroIMG.style.minHeight = "250px"
          newIntroIMG.style.minWidth = "250px"
          newIntroIMG.style.objectFit = "contain"
          let changeIMG = document.getElementById("imgPlaceHolder")
          changeIMG.removeAttribute('style')




          const pokemonPictureFighter2 = document.querySelectorAll('.introIMG'); // Selecting all 'main' elements
        const pokemonNameFighter2 = document.querySelectorAll('.intro-bottom #name')
        const pokemonTypeFighter2 = document.querySelectorAll('.intro-bottom #type')
        const pokemonStatsFighter2 = document.querySelectorAll('.details')

        if (pokemonPictureFighter2.length > 0) {
          const randomIndex = Math.floor(Math.random() * pokemonPictureFighter2.length);
          const randomMain = pokemonPictureFighter2[randomIndex];
          let newPokemonNameFighter2 = pokemonNameFighter2[randomIndex].textContent
          let newPokemonTypeFighter2 = pokemonTypeFighter2[randomIndex].textContent
          let newpokemonStatsFighter2 = pokemonStatsFighter2[randomIndex].textContent
          // console.log(newpokemonStatsFighter2)

          // console.log(newPokemonNameFighter2)
          const newRandomMain = randomMain

          newRandomMain.style.minHeight = "250px"
          newRandomMain.style.minWidth = "250px"
          newRandomMain.style.objectFit = "contain"
          let changeIMG = document.getElementById("imgPlaceHolder")
          changeIMG.removeAttribute('style')
// name
          let pokemonFighter2Name = document.createElement('p')
          pokemonFighter2Name.textContent = newPokemonNameFighter2
// Type
          let pokemonFighter2Type = document.createElement('p')
          pokemonFighter2Type.textContent = newPokemonTypeFighter2
// Details
          let pokemonFighter2Details = document.createElement('p')
          let powerFighter2 = newpokemonStatsFighter2.match(/\d+/g)?.reduce((acc, val) => acc + parseInt(val), 0) || 0;
          pokemonFighter2Details.textContent = "Power: " + powerFighter2


          fighterTwoDiv.appendChild(newRandomMain)
          fighterTwoDiv.appendChild(pokemonFighter2Name)
          fighterTwoDiv.appendChild(pokemonFighter2Type)
          fighterTwoDiv.appendChild(pokemonFighter2Details)

          let winnerDiv = document.createElement('div')

          let winnerP = document.createElement('p')

          fightingContainer.append(winnerDiv)

          let winner = sumPowerFighter1 > powerFighter2 ? `You WON !! by ${sumPowerFighter1 - powerFighter2} more power` : `You lost by ${powerFighter2 - sumPowerFighter1} less power`
          winnerP.textContent = winner

          winnerDiv.style.position = 'fixed;'
          winnerDiv.style.top = "0px;"
          winnerP.style.position = 'absolute;'
          winnerP.style.top = '0px;'
          winnerP.style.color = "white"
          winnerP.style.fontSize = "40px"

          winnerDiv.appendChild(winnerP)
          console.log(winner)




          // Use the 'newRandomMain' variable to work with the randomly selected 'main' element
          // console.log(newRandomMain);
        } else {
          console.log("No 'main' elements found on the page.");
        }
          // fighterTwoDiv.appendChild()



//         const elementsToChange = [main, intro, introBottom, details, introIMG, slideIcon];

//         const propertiesToChange = ['border', 'padding', 'boxShadow', 'borderRight', 'display', 'width', 'display'];

//         for (const element of elementsToChange) {
//         for (const property of propertiesToChange) {
//         element.style[property] = 'none';
//         }
// }





let cancelFightIcon2 = document.createElement('img')
cancelFightIcon2.src = '/assets/cancel-button.png'
cancelFightIcon2.setAttribute('class', 'cancelFightIcon')

          // Cancel Fighting Experience
          fightingContainer.appendChild(cancelFightIcon2)
          cancelFightIcon2.addEventListener('click' , () => {
            fightingContainer.style.display = "none";
            location.reload()
          })

        })
      });


      // FIGHT






    };
    renderPokemon(visiblePokemons);
  });

function search(event) {
  const searchValue = event.target.value.trim().toLowerCase();

  const pokemonCards = document.querySelectorAll("main");

  pokemonCards.forEach((card) => {
    const pokemonName = card.querySelector("#name").textContent.toLowerCase();

    if (pokemonName.includes(searchValue)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
