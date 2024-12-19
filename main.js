const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light"
]

let output = ""

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${coffee} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${coffee} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${coffee} and add cream and sugar`
    }
    output += "\n"
}

console.log(output)

let totalTopics = 0

const notes = [ 
{
    id: 1,
    text: "Hello",
    author: "Peter Reign",
    date: "Thursday, 4th",
    topics: ["Work progress", "reviewing array"]

}
]
notes.push({
    id: 2,
    text: "Review all of my old code",
    author: "Sarah Mass",
    date: "2024-1-1",
    topics: ["strategy", "Professional"]
})
notes.push({
    id: 3,
    text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
    author: "Ang Rod",
    date: "2021-01-8",
    topics: [ "thinking" ]
})

notes.push({
    id:4,
    text:"How to push an array",
    author: "Taylor P",
    date: "2023-3-2",
    topics: ["Figure out how to push an array"]
})

console.log("*** All Note Topics ***")
for (const note of notes) {
   for(const topic of note.topics) 
   console.log(topic)
}

console.log("*** Average Topics Per Note ***")

 for (const note of notes) {
    totalTopics += note.topics.length
}
 
 console.log(totalTopics / notes.length)

 console.log("*** Notes with the github topic ***")

const filteredNotes = []
const criteria = "thinking"

 for (const note of notes) {
    if (note.topics.includes(criteria)){
        filteredNotes.push(note)

    }

}
console.log(filteredNotes)