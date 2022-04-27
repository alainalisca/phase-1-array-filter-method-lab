function findMatching(origin, found){
    return origin.filter( 
        (matchingName) => matchingName.toLowerCase() === found.toLowerCase()
    )
}
function fuzzyMatch(origin, someString){
    return origin.filter(
        (matchingName) => matchingName.toLowerCase().indexOf(someString.toLowerCase()) === 0
    )
    }
function matchName(origin, foundName){
    return origin.filter((filed) => filed.name === foundName)
}


