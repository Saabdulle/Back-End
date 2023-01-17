const herd = document.getElementById("herd")

function createGoatCard(goat){
    //create a card 
   const card = document.createElement("div")
    // Add a relevant class
    card.classList.add("goat")
    //Add some content
    // card.textContent = goat["name"]
    const header = document.createElement("h2")
    header.textContent = goat["name"];
    card.appendChild(header)

    //create an element to display favourite colour
    const colourBox = document.createElement("p")
    colourBox.textContent = `${goat["name"]}'s favourite colour is `;
    const colourName = document.createElement("span");
    colourName.textContent = goat["favouriteColour"]
    colourName.style.color = goat["favouriteColour"]
    colourBox.appendChild(colourName)
    card.appendChild(colourBox)

    card.classList.add(goat["age"] < 75 ? "young" : "old")
    //Attach it to the container
    herd.appendChild(card)
}


async function callTheHerd() {

    //Request all the goats from the api.
    const res = await fetch("http://localhost:3000/goats");
    //Extract the JSON data from the response
    const data = await res.json()
    //Log them
    console.log(data)

    // FOr each goat, create HTML element (or collect of elements) and add it to the herd container.

    data.forEach(g => createGoatCard(g))
}
callTheHerd()
