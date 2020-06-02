/*
This function will convert a single tip object to an HTML representation and return it
*/

const tipConverter = (tipObject) => {
    const tipHTMLRepresentation = `<section class="tip">${tipObject.tipText}</section>`

    // This returns the string that is created from the tipObject in this function
    return tipHTMLRepresentation
}