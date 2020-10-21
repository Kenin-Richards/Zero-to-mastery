// bigint - new type which means big integer 
// written as a number + "n" for example 2n

// optional chaining operator ?

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}
if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight = will_pokemon.pikachu.weight
} else {
    let weight2 = undefined
}

let weight3 = andrei_pokemon?.pikachu?.weight

console.log(weight3)

// Nullish Coalescing Operator ?? can be used instead of || - checks if it is null or undefined

let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}

let power = andrei_pokemon?.pikachu?.power ?? 'no power'

console.log(power)


