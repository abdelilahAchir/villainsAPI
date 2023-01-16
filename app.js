const { prototype } = require("events")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000


const villains = {
    allVillains: [
        { name: "Tri pack", city: "Chicago", punchline: "So long mother sucker" },
        { name: "Fire lord", city: "hell", punchLine: "Its getting hot in here" },
        { name: "Mr Freeze", city: "Gotham", punchLine: "Freeze, Im freeze" },
        { name: "Lokero", city: "Malaga", punchLine: "Come la tapa cabron" },
        { name: "Le magician", city: "Magic City", punchLine: "You are a array now" },
        { name: "Demon", city: "Demon city", punchLine: "you will get burned" },
        { name: "text", city: "test", punchLine: "you will get burned" }
    ]
}


const firstName = ["kent", "Pokoyo", "hello", "Pablo", "Joel", "jay", "omar", "maria", "Cobra", "Snake", "Scorpion", "Laptop", "Mouse", "Robin", "Pontus", "Mikael", "Omar", "Hanna", "Abel"]
const lastName = ["Panna", "Agent", "hola", "Torpedden", "Koko", "Moko", "Soco", "Swaelee", "Chacha chacha", "Salsa caliente",
    "Tomate fresco", "El cabron", "waw", "mola", "El mariachi", "El Bandolero", "La bomba", " El Suavecito", "El Matador", "El malo"]
const cities = ["Marbella", "Columbia", "Barcelona", "biskopsgården", "systembölaget", "Chicago", "New york", "LA", "Stockholm"]
const punchLines = ["you a gangster", "Such freaky freak", "You will die!", "Caramba Carambola", "madness", "wiki woooo", "Finish him", "Explode"]

function newEntry() {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)]
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)]
    const randomCityName = cities[Math.floor(Math.random() * cities.length)]
    const randomPunchLine = punchLines[Math.floor(Math.random() * punchLines.length)]
    const fullName = randomFirstName + " " + randomLastName
    console.log(randomFirstName + " " + randomLastName + " " + randomCityName)
    villains.allVillains.push({ name: fullName, city: randomCityName, punchLine: randomPunchLine })
    return villains
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/villains", (req, res) => {
    res.send(villains)
})

app.get("/newentry", (req, res) => {
    newEntry()
    res.send("Added new Data")
})


app.listen(PORT, () => {
    console.log("listening to port " + PORT)
    console.log(villains)
})

