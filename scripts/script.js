const container = document.getElementById("main-container")

async function getCharacters() {
    // TODO: Obtener los objetos desde el api de rick and morty (enlace en el documento). Haga uso de la funcion fetch. Puede usar async/await y la funcion json
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    var characters = []
    for (let i = 0; i < data.results.length; i++) {
        const characterData = data.results[i];
        const character = parseJsonToCharacter(characterData);
        characters.push(character);
    }
    // TODO: Recorra la lista json obtenida y convierta cada elemento (mapa) en un objeto Character y agreguelo a la lista characters
    

    renderAllCharacters(characters)
}

function parseJsonToCharacter(element) {
    // TODO: Retorna un objeto de tipo "Character" a partir de un mapa (element) pasado como parametro
     return new Character(
        element.name,
        element.image,
        element.status,
        element.species,
        element.location.name
    );
}

function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml()
    })
}

getCharacters()