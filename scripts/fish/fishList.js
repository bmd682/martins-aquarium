/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
const fishList = () => {

    // "for of" loop is specifically used for iterating data structures like arrays, strings, nodelists, etc
    for (const currentFishObject of fishCollection) {

        // convert current fishObject to HTML, then store it in a variable
        const fishHTML = fishConverter(currentFishObject)
    
        // finds fishList class in html document, then stores that html tag in a variable
        const fishArticleElement = document.querySelector(".fishList")
    
        // innerHTML selects the html code inside of the element tag it is appended toString, then += continuously adds to previous iteration of loop
        fishArticleElement.innerHTML += fishHTML
    }

}