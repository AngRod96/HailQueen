
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


function fizzBuzz(n) {
    //a plasce to store the results (list, array )
    const results = []
     //iteraate from 1 up to and including n
    //if the value is a multiple of 3
    //push the value "Fizz" into the result
    for (let i = 1; <= n; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push('FizzBuzz')
        
        } else if (i % 3 === 0) {
            results.push('Fizz')
        } else if (i % 5 === 0) {
            results.push('Buzz') 
        } else {
            results.push(i)
        }
    }
    return results


    //if the value is a multiple of 5 use the value push value "buzz" into the result
    //if the value is a multiple of 3 & 5 push the value fizz buzz into the result else push the value itself 
    //return the results 
}

console.log(fizzBuzz(3))