let tipCollection = []

const getTipData = () => {
    return fetch("http:localhost:8088/tips").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfTips) => {
            tipCollection = arrayOfTips
        }

    )
}