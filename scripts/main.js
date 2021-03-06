/*
fishList()
Actually call function that generates the fish cards from the data in fishData
data is stored in an array in the *Data.js file, then the *.js file is the converter function that changes the objects from the Data.js file to html when called,
then the *List.js file is the function that, when called, enters a loop that iterates for each piece of data in the *Data.js array,
this loop converts the object in the array to html, finds the html tag requested, then adds the html to the inside of that html element
*/
getFishData().then(
    () => {
        //must wait to run fishList until after the Data gets populated
        fishList()
    }
)

// fishList()
//if fishList is run here, it would run before the fishCollection array gets populated and would show zero fish on the webpage
getTipData().then(
    () => {
        tipList()
    }
)