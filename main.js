
const tributeChest = []
const payTribute = () => {
    // Create a tribute object


    // Add the tribute object to the tribute chest
}

const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}



/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queen of queens) {
    const hailMessage = haitlTheQueen(queen.name)
    console.log(hailMessage)
}



const athena = hailTheQueen("Athena Perez")

console.log(athena)

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

const ramona = hailTheQueen()
console.log(ramona) //this comes out as undefined because this is a logical error meaning there was no parameter given so it stays undefined
//this will fix error
//const ramona = hailTheQueen("Ana Rodriguez")