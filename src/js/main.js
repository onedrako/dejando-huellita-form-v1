const generateImgfromform = () =>{

    //Extracting  Values
    const inputName = document.getElementById("inputName")
    const nameValue = inputName.value

    const inputCountry = document.getElementById("inputCountry")
    const countryValue = inputCountry.value

    const inputDescription = document.getElementById("inputDescription")
    const descriptionValue = inputDescription.value

    const inputDreams = document.getElementById("inputDreams")
    const dreamsValue = inputDreams.value

    const inputGames = document.getElementById("inputDescription")
    const gamesValue = inputGames.value

    const inputArrived = document.getElementById("inputDescription")
    const arrivedValue = inputArrived.value

    const inputMessage = document.getElementById("inputDescription")
    const messageValue = inputMessage.value

    //Manipulating DOM
    const printName = document.getElementById("pawName")
    printName.innerText = nameValue

    const printCountryImg = document.getElementById("countryImg") 
    const printCountryName = document.getElementById("pawCountry")

    switch(true){
        case countryValue === "Argentina":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330487.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Chile":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330554.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Colombia":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330508.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Ecuador":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330581.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "El Salvador":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330670.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "España":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330557.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Estados Unidos":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330459.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Guatemala":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330587.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "México":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330433.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Perú":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330497.png" alt="">`
            printCountryName.innerText = countryValue
        break;
        case countryValue === "Venezuela":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330546.png" alt="">`
            printCountryName.innerText = countryValue
        break;
    }
 //inner.HTML agrega una etiqueta dentro de otra, aqui usando un div le colocamos por dentro una imagén
    
const printDescription = document.getElementById("pawDescription")
printDescription.innerText = descriptionValue

const printDreams = document.getElementById("pawDreams")
printDreams.innerText = dreamsValue

const printGames = document.getElementById("pawGames")
printGames.innerText = gamesValue

const printArrived = document.getElementById("pawArrived")
printArrived.innerText = arrivedValue

const printMessage = document.getElementById("pawMessage")
printMessage.innerText = messageValue


}