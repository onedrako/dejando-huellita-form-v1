const generateImgfromform = () =>{

    //Extracting  Values
    const inputName = document.getElementById("inputName")
    const nameValue = inputName.value

    const inputCountry = document.getElementById("inputCountry")
    const countryValue = inputCountry.value

    const inputColor = document.getElementById("inputColor")
    const colorValue = inputColor.value

    const inputDescription = document.getElementById("inputDescription")
    const descriptionValue = inputDescription.value

    const inputDreams = document.getElementById("inputDreams")
    const dreamsValue = inputDreams.value

    const inputGames = document.getElementById("inputNuevo")
    const gamesValue = inputGames.value

    const inputArrived = document.getElementById("inputArrived")
    const arrivedValue = inputArrived.value

    const inputMessage = document.getElementById("inputMessage")
    const messageValue = inputMessage.value

    const resultThatContainsFlag = document.getElementById("resultOfFormNameAndFlag")

    //Manipulating DOM
    const printName = document.getElementById("pawName")
    printName.innerText = nameValue

    const printCountryImg = document.getElementById("result__main--countryImg") 
    const printCountryName = document.getElementById("pawCountry")

    switch(true){
        case countryValue === "Argentina":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330487.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Chile":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330554.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Colombia":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330508.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Ecuador":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330581.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "El Salvador":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330670.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "España":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330557.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Estados Unidos":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330459.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Guatemala":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330587.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "México":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330433.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Perú":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330497.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
        case countryValue === "Venezuela":
            printCountryImg.innerHTML=`<img id="countryImg" src="https://image.flaticon.com/icons/png/512/330/330546.png" alt="">`
            printCountryName.innerText = `de ${countryValue}`
        break;
    }


    //PARA USAR EL COLOR DE FONDO Y CAMBIO DE LETRAS

    const convertHexaToRGB = (colorInHexa) =>{
        return{
            red: colorInHexa >> 16,
            green: colorInHexa >> 8 & 255,
            blue: colorInHexa & 255
        }
    } 

    const colorValueToConvert = `0x${colorValue.substring(1)}`
    console.log(colorValueToConvert)
    const colorInRGB = convertHexaToRGB(colorValueToConvert)
    console.log(colorInRGB)

    //haciendo la condicional el COLOR

    // console.log(colorInRGB.red)
    // console.log(colorInRGB.green)
    // console.log(colorInRGB.blue)

    // switch(true){
    //     case colorInRGB.red && colorInRGB.green > 150:
    //         console.log("rojo y verde son mas altos de 150")
    //         break 
    //     case colorInRGB.green && colorInRGB.blue > 150:
    //         console.log("azul y verde son mas altos de 150")
    //         break
    //     case colorInRGB.red && colorInRGB.blue > 150:
    //         console.log("rojo y azul son mas altos de 150")
    //         break
    // }
    // if(colorInRGB.red && colorInRGB.green > 150 || colorInRGB.green && colorInRGB.blue > 150 || colorInRGB.red && colorInRGB.blue > 150 ){
    //     console.log("Hay 2 colores mayores a 150")
    // }

    if(colorInRGB.red && colorInRGB.green > 150 || colorInRGB.green && colorInRGB.blue > 150 || colorInRGB.red && colorInRGB.blue > 150 ){
        document.getElementById("resultOfFormPaw").style.background = colorValue
        document.getElementById("resultOfFormPaw").style.color = "#000000"
        if(resultThatContainsFlag.classList.contains("result__main--country")){
            resultThatContainsFlag.classList.remove("result__main--country")
            resultThatContainsFlag.classList.add("result__main--country-for-white")
        }
        // document.getElementsById("resultOfFormNameAndFlag").style.border-bottom  = "1.5px solid letter-color-secondary"
    } else if(colorValue !== "#000000"){
        document.getElementById("resultOfFormPaw").style.background = colorValue
        document.getElementById("resultOfFormPaw").style.color = "#ffffff"
        if(resultThatContainsFlag.classList.contains("result__main--country-for-white")){
            resultThatContainsFlag.classList.remove("result__main--country-for-white")
            resultThatContainsFlag.classList.add("result__main--country")
        } 
    }


//TODO Para mejorar el codigo de switch a un ciclo for Hacer un condicional con un  array con las respuestas y codigos a ejecutar
// switch(true){
//     case descriptionValue !== '':
//         console.log("Hola")
//         break
//     case dreamsValue !== '':
//         console.log("Value")
// }

//TILES

    const titleDecription = document.getElementById("titleFormDescription")
    const titleDreams = document.getElementById("titleFormDreams")  
    const titleGames = document.getElementById("titleFormGames")
    const titleArrived = document.getElementById("titleFormArrived")
    const titleMessage = document.getElementById("titleFormMessage")  

    if(descriptionValue !== ''){
        titleDecription.innerText = "Sobre mí"
    }

    if(dreamsValue !== ''){
        titleDreams.innerText = "Espero:"
    }

    if(gamesValue !== ''){
        titleGames.innerText = "Juegazos: "
    }

    if(arrivedValue !== ''){
        titleArrived.innerText = "Llegue al Canal:"
    }

    if(messageValue !== ''){
        titleMessage.innerText = "Mensaje para la muchachada"
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