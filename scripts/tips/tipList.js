/*
Responsible for generating a list of tip HTML
representations, and putting in the browser
*/
const tipList = () => {

    // "for of" loop is specifically used for iterating data structures like arrays, strings, nodelists, etc
    for (const currentTipObject of tipCollection) {
        const tipHTML = fishConverter(currentTipObject)
    
        // finds tipList class in html document, then stores that html tag in a variable
        const tipArticleElement = document.querySelector(".tipList")
    
        // innerHTML selects the html code inside of the element tag it is appended toString, then += continuously adds to previous iteration of loop
        tipArticleElement.innerHTML += tipHTML
    }

}