/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
/* const fishList = () => {

//     // "for of" loop is specifically used for iterating data structures like arrays, strings, nodelists, etc
//     for (const currentFishObject of fishCollection) {

//         // convert current fishObject to HTML, then store it in a variable
//         const fishHTML = fishConverter(currentFishObject)
    
//         // finds fishList class in html document, then stores that html tag in a variable
//         const fishArticleElement = document.querySelector(".fishList")
    
//         // innerHTML selects the html code inside of the element tag it is appended toString, then += continuously adds to previous iteration of loop
//         fishArticleElement.innerHTML += fishHTML
//     }

 }
*/

//refactored into a more concise method
const fishList = () => {
    displayTheHolyOnes()
    displaySoldier()
    displayPlebs()
}



const displayTheHolyOnes = () => {
    // Get holy fish array
    const holyFish = mostHolyFish()

    // Iterate the array of holy fish
    for (const holyFishObject of holyFish) {
        const holyFishHTMLRepresentation = fishConverter(holyFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += holyFishHTMLRepresentation
    }
}

const displaySoldier = () => {
    // Get soldier fish array
    const soldierFishArray = soldierFish()

    // Iterate the array of soldier fish
    for (const soldierFishObject of soldierFishArray) {
        const soldierFishHTMLRepresentation = fishConverter(soldierFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += soldierFishHTMLRepresentation
    }
}


const displayPlebs = () => {
    // Get plebs fish array
    const plebsFishArray = fishPlebs()

    // Iterate the array of plebs fish
    for (const plebsFishObject of plebsFishArray) {
        const plebsFishHTMLRepresentation = fishConverter(plebsFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += plebsFishHTMLRepresentation
    }
}

