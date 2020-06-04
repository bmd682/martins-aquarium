
let fishCollection = []

const getFishData = () => {
    // this fetches the data from the server/url that is hosting it
    //then means do this function after the one its appended to finishes: it is always a function after ".then"
    return fetch("http://localhost:8088/fish").then(
        (response) => {                                         //take the response, the stuff you are fetching
            return response.json()                              //.json() converts the http response back to javascript
        }
    )

    .then(
        // set the array that you fethced to your global object fishCollection
        (arrayOfFish) => {
            //this is the only place you are 100 percent sure the data is back
            fishCollection = arrayOfFish
        }
    )
}





// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soliderFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soliderFishArray.push(fish)
        }
    }

    return soliderFishArray
}

// Any fish not a multiple of 3 or 5
const fishPlebs = () => {
    const plebs = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            plebs.push(fish)
        }
    }

    return plebs
}

