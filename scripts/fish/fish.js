/*
This function will convert a single fish object to an HTML representation and return it
fishObject is the parameter, and is what an argument will be named as as it is passed to fishConverter
*/

const fishConverter = (fishObject) => {
    const fishHTMLRepresentation = `<section class="fish">
        <div class="fish__card">
            <img class="fish__picture" src="${fishObject.picture}"     
                alt="${fishObject.name} the ${fishObject.species}" />
            <div class="fish__details">
                <ul>
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}</li>
                    <li>Name: ${fishObject.name}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </div>
        </section>`

    // This returns the string that is created from the fishObject in this function
    return fishHTMLRepresentation
}