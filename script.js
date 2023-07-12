



// let bimbo = 'Bimbo'
// console.log(bimbo.toLowerCase())

fetch("./source.json")
.then((res) => res.json())
.then((data) => {
  data.forEach((pokemon) => {
    let body = document.querySelector("body");

    let container = document.createElement("div");
    container.setAttribute("class", "screen");
    body.appendChild(container);

    let subContainer = document.createElement("div");
    subContainer.setAttribute("class", "sub-container");
    container.appendChild(subContainer);

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




    // let pokemonImage = document.createElement("img");
    // pokemonImage.setAttribute("id", "imgPlaceHolder");
    // pokemonImage.setAttribute("class", "imgPlaceHolder");
    // pokemonImage.src = "./placeholder.png";

    // introIMG.appendChild(pokemonImage);

    // Left-Bottom part of the Card

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
    details.style.display = "none";

    intro.appendChild(details);

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
        // console.log(data.sprites['front_default'])
        let pokemonImage = document.createElement("img");
        pokemonImage.setAttribute("id", "imgPlaceHolder");
        pokemonImage.setAttribute("class", "imgPlaceHolder");
        pokemonImage.src = data.sprites['front_default'];

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
    pokemonATK.textContent = 'Sp.Atk: ' + pokemon.base['Sp. Attack']
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
//   console.log(data[0].name["english"]);
});

//   let main = document.querySelector("main");

//   main.addEventListener("click", () => {
//     let details = document.getElementById("details");
//     let of_on = false;
//     if (details.style.display === "none") {
//       details.style.display = "flex";
//     } else {
//       details.style.display = "none";
//     }
//   });

//   fetch("./source.json")
//     .then((res) => res.json())
//     .then((data) => {
//       source = data;
//       // document.getElementById('name').innerHTML = data[0].name['english']
//       // console.log(data[0])
//       // document.getElementById('type').innerHTML = data[0].type
//       // console.log(data[0].name['english'])
//       // console.log(data[0].base)
//       // console.log(data[0].base['HP'])
//       document.getElementById("hp").innerHTML += data[0].base["HP"];
//       // console.log(data[0].base['Attack'])
//       document.getElementById("atk").innerHTML += data[0].base["Attack"];
//       // console.log(data[0].base['Defense'])
//       document.getElementById("def").innerHTML += data[0].base["Defense"];
//       // console.log(data[0].base['Sp. Attack'])
//       document.getElementById("sp-atk").innerHTML +=
//         data[0].base["Sp. Attack"];
//       // console.log(data[0].base['Sp. Defense'])
//       document.getElementById("sp-def").innerHTML +=
//         data[0].base["Sp. Defense"];
//       // console.log(data[0].base['Speed'])
//       document.getElementById("speed").innerHTML += data[0].base["Speed"];
//       // console.log(data[0].type)
//       // console.log(source)
//       data.forEach((element) => {
//         // console.log(element.name['english'])
//         // console.log(element[0].name)
//       });
//     });

//   console.log(Object.keys(source));

//   const fetchBtn = document.getElementById("fetchBTN");
//   fetchBtn.addEventListener("click", () => {
//     // Make a request to the server
//   fetch("https://pokeapi.co/api/v2/pokemon")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.results);
//       console.log(data.results[0].name, 'heere')
//     })
    //   let pName = document.createElement('p')
    //   data.results.forEach(pokemon => {
    //       console.log(pokemon.name)
    //       pName = document.textContent = pokemon.name
    //       document.getElementById("name").innerHTML = name;

    //   });

//         // root.append(`<p>${data.results[0].name}</p>`)
//         // root.append(`<p>${data.results[0].url}</p>`)
//         // let namePok = (p.textContent = data.results[0].name);
//         // let name = data.results[0]["name"];
//         // document.getElementById("name").innerHTML = name;
//         // console.log("name⬇️");
//         // console.log(data.results[0]["name"]);
//         const link = data.results[0].url;
//         return fetch(link);
//       })
//       .then((response) => response.json())
//       .then((linkData) => {
//         console.log(linkData);
//         // root.append(`<p>${linkData.sprites.front_default}</p>`)
//         // root.append(`<img src="${linkData.sprites.front_default}">`)
//         // root.append(`<img src="${linkImages}">`)
//         let img = document.createElement("img");
//         img.src = linkData.sprites.front_default;
//         let introimg = document.getElementById("introIMG");
//         let imgToBe = (document.getElementById("imgPlaceHolder").src =
//           linkData.sprites.front_default);
//         // introimg.append(imgToBe)
//         // root.append(img)
//         console.log(linkData.types);
//         console.log(linkData.types["name"]);
//         console.log(linkData.types[0].type["name"]);
//         console.log(linkData.types[1].type["name"]);
//         let type1 = linkData.types[0].type["name"];
//         let type2 = linkData.types[1].type["name"];
//         let types = (document.getElementById(
//           "type"
//         ).innerHTML = `Type: ${type1} ${type2}`);
//       });
//   });