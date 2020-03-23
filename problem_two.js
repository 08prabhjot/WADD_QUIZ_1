
function acronym(input) {
    let short = ''
    let string = input.split(' ')

    for ( let word of string) {
        short += word[0]
    }
    return short.toUpperCase()
}

console.log(acronym('laugh out loud'))
