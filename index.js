
function superbowlWin(arrayArg){
    let result = arrayArg.find( search => search.result === "W")
    return !!result ? result.year : undefined
}