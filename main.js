
const database = {
    employees: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        hourlyRate: 11.50

    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        hourlyRate: 10.75

    }, {
        id: 3,
        name: "Ana Bowton",
        email: "abowton2@wisc.edu",
        hourlyRate: 12.30

    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        hourlyRate: 12.00

    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        hourlyRate: 12.30

    }, {
        id: 6,
        name: "Bernie Drew",
        email: "bdreger5@zimbio.com",
        hourlyRate: 11.50

    }, {
        id: 7,
        name: "Rolanda Gault",
        email: "rgault6@google.com",
        hourlyRate: 11.80

    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        hourlyRate: 11.80

    },
    {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        hourlyRate: 21.00
    
    },
    {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        hourlyRate: 12.10
    
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        hourlyRate: 13.00

        
    
        } , {
            id: 11,
            name: "Arv Biddle",
            email: "abiddle9@cafepress.com",
            hourlyRate: 13.00
    
            
        
            }, {
                id: 12,
                name: "Arv Biddle",
                email: "abiddle9@cafepress.com",
                hourlyRate: 13.00
        
                
            
                }, {
                    id: 10,
                    name: "Arv Biddle",
                    email: "abiddle9@cafepress.com",
                    hourlyRate: 13.00
            
                    
                
                    }, {
                        id: 10,
                        name: "Arv Biddle",
                        email: "abiddle9@cafepress.com",
                        hourlyRate: 13.00
                
                        
                    
                        }],
        products: [{
            id: 1, name: "Large Coffee", price: 6.00
        }, {
            id: 2, name: "Latte", price: 8.99
        }, {
            id: 3, name: "Blueberry Muffin", price: 9.49
        }, {
            id: 4, name: "Scone", price: 7.56
        }, {
            id: 5, name: "Bran Muffin", price: 9.10
        }, {
            id: 6, name: "Mocha Latte", price: 12.99
        }, {
            id: 7, name: "Espresso", price: 11.80
        }, {
            id: 8, name: "Americano", price: 11.00
        }, {
            id: 9, name: "Cubano", price: 14.99
        }, {
            id: 10, name: "Cappucino", price: 12.49
        }, {
            id: 11, name: "Chai", price: 11.49
        },{
            id: 12, name: "white mocha", price: 12.49
        }],
        orders: [{
            id: 1, productId: 10, employeeId: 5, timestamp: 1613538111396
        }, {
            id: 2, productId: 5, employeeId: 1, timestamp: 1613038102396
        }, {
            id: 3, productId: 2, employeeId: 7, timestamp: 1612837112396
        }, {
            id: 4, productId: 8, employeeId: 5, timestamp: 1612836112396
        }, {
            id: 5, productId: 9, employeeId: 7, timestamp: 1612735112396
        }, {
            id: 6, productId: 4, employeeId: 1, timestamp: 1614528112396
        }, {
            id: 7, productId: 5, employeeId: 8, timestamp: 1614598112396
        }, {
            id: 8, productId: 2, employeeId: 9, timestamp: 1614630112396
        }, {
            id: 9, productId: 3, employeeId: 2, timestamp: 1612538112396
        }, {
            id: 10, productId: 9, employeeId: 6, timestamp: 1612438112396
        }, {
            id: 11, productId: 4, employeeId: 1, timestamp: 1612338112396
        }, {
            id: 12, productId: 6, employeeId: 11, timestamp: 1612238112396
        }, {
            id: 13, productId: 10, employeeId: 8, timestamp: 1630538112396
        }, {
            id: 14, productId: 9, employeeId: 9, timestamp: 1612738112396
        }, {
            id: 15, productId: 3, employeeId: 3, timestamp: 1612938112396
        }, {
            id: 16, productId: 4, employeeId: 7, timestamp: 1612638112396
        }, {
            id: 17, productId: 4, employeeId: 10, timestamp: 1612638112396
        }, {
            id: 18, productId: 4, employeeId: 7, timestamp: 1612638112396
        }, {
            id: 19, productId: 4, employeeId: 7, timestamp: 1612638112396
        }, {
            id: 20, productId: 4, employeeId: 7, timestamp: 1612638112396
        }, {
            id: 16, productId: 4, employeeId: 7, timestamp: 1612638112396
        }, {
            id: 16, productId: 4, employeeId: 7, timestamp: 1612638112396
        },]
    }









const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light", "salvador robusto light", "salvador robusto light", "salvador robusto light", "salvador robusto light","salvador robusto light","salvador robusto light","salvador robusto light","salvador robusto light","salvador robusto light"
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

let totalTopic = 0

const notas = [ 
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

notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})

notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 5,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})

notes.push({
    id: 6,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})

notes.push({
    id: 7,
    text: "how to make an if/else statement",
    author: "Kev Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})

notes.push({
    id: 8,
    text: "how to make an if/else statement",
    author: "Bennito Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 9,
    text: "how to make an if/else statement",
    author: "Tay Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 10,
    text: "how to make an if/else statement",
    author: "Kok Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})
notes.push({
    id: 11,
    text: "how to make an if/else statement",
    author: "Key Tay",
    date: "2023-4-6",
    topics: ["figure out how to make statements"]
})

console.log("*** All Note Topics ***")
for (const note of notes) {
   for(const topic of note.topics) 
   console.log(topic)
}

console.log("*** All Topics Per Note ***")

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

console.log("***  Note Articles  ***")

let everyHTMl = " "
let topic = ""

for (const note of notes) {
    everyHTMl += `\n<article>\n   ${note.text}`
    for(const topic of note.topics) {
        everyHTMl += `\n   <section>${note.topics}</section>`
        everyHTMl += `\n</article>`
    }

}
console.log(everyHTMl)


//Functions 

/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const theQueen = (string) => {
    return `Hail Her Majesty, ${string}`
}

const thePerson = (Name) => {
    return `Hail Her Majesty, ${Name}`
}


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
    id:4,
    text:"How to push an array",
    author: "Taylor P",
    date: "2023-3-2",
    topics: ["Figure out how to push an array"]
})

notes.push({
    id:4,
    text:"How to push an array",
    author: "Taylor P",
    date: "2023-3-2",
    topics: ["Figure out how to push an array"]
})

notes.push({
    id:4,
    text:"How to push an array",
    author: "Taylor P",
    date: "2023-3-2",
    topics: ["Figure out how to push an array"]
})

notes.push({
    id:4,
    text:"How to push an array",
    author: "Taylor P",
    date: "2023-3-2",
    topics: ["Figure out how to push an array"]
})


const employees = getEmployees()

const employeeOrders = (id) => {
    const fulfilledOrders = 0


    for (const order of orders) {
        if (order.employeeId === id) {
            fulfilledOrders++
        }
    }
    return fulfilledOrders
}

document.addEventListener (
    "click",
    (clickEvt) => {
        const itemClicked = clickEvt.target
        if ( itemClicked.dataset.type === "employee") {
            const employeeId = itemClicked.dataset.id

            for( const employee of employees) {
                if (employee === parseInt(employeeId)) {
                    const orderCount = employeeOrders()

                    window.alert(`${employee.name} sold ${} products`)
                }
            }
        }
    }

)

import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employee= getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product.name
        }
    }

    return orderProduct
}


// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        html += `<li>${product} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

export const secondOrders  = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        html += `<li>${product} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

const findEmployeeDate = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return findEmployeeDate
}

//this is to get a date for an employee 
//returning date

const theProducts = getProducts()

document.addEventListener(
    "click", 
    (clickEvent) => {
        const whatWasClicked = clickEvent.target
        if (whatWasClicked.dataset.type === "product") {
            const coffeeName = whatWasClicked.dataset.name
            const price = whatWasClicked.dataset.price
            window.alert(`${coffeeName} costs $${price}`)
        }
        
    }
)

export const Products= () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-name="${product.name}"
                    data-price="${product.price}"
                    data-type="product"
                    >${product.name}
                </li>`
    }

    html += "</ul>"

    return html
}

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-productid="${product.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


//able to return the html