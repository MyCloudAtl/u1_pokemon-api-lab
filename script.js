
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let pokemonStats = document.querySelector("#pokemonStats")
let pokemonDisplay = document.querySelector("#imageArray")
let button = document.querySelector("#searchButton")
//Axios call goes here


//reads our Input value and makes the interactive API call
button.addEventListener('click', async (e)=> {
    e.preventDefault()
    pokemonStats.innerHTML = ``
    let input = document.querySelector("#inputBar").value
    if (input!== ``) {
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${input}`
        )
        console.log(response.data)
        let pokemonPic = response.data.sprites.other.showdown.front_default
        //   //setting our DOM image
        pokemonImage.setAttribute ('src', pokemonPic)
        let pokemonType = response.data.species.name
        pokemonName.innerText = pokemonType
        let pokemonAbilities = response.data.abilities[0].ability.name
        for (let i = 0; i < response.data.abilities.length; i++) {
            let li = document.createElement("li");
            pokemonStats.append(response.data.abilities[i].ability.name, li);
        }
        // pokemonStats.innerText = pokemonAbilities
    } else {
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=25`
        )
        console.log(response.data.results)
        let pokemonList = response.data.results
        console.log(pokemonList)
        pokemonList.forEach(async function asdf(index) {
            pokemonDisplay.innerText = pokemonDisplay.innerText + " " + index.name
        })
    }
})
