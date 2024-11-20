
const tributeChest = []

const payTribute = () => {
    // Create a tribute object
    const payTribute = (tributeId, tributeDescription, queenId) => {
        const tribute = {
            id: tributeId,
            description: tributeDescription,
            queenId: queenId
        }
        tributeChest.push(tribute)
    }

    // Add the tribute object to the tribute chest
}


payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)

const queens = []


const createQueen = () => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

//iterating through the queens
for (const queen of queens) {

    const hailMessage = hailTheQueen()  // What should be passed as an argument?
    console.log(hailMessage)

}

const hailMessage = hailTheQueen(queen.name)

createQueen(1, "Trinity Terry")
/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const taylor = hailTheQueen("Taylor Sol")
console.log(taylor)

const Ava = hailTheQueen("Ava Tay")
console.log(Ava)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)
