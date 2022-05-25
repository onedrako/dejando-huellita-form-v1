"use strict";

var generateImgfromform = function generateImgfromform() {
  //Extracting  Values
  var inputName = document.getElementById("inputName");
  var nameValue = inputName.value;
  var inputCountry = document.getElementById("inputCountry");
  var countryValue = inputCountry.value;
  var inputColor = document.getElementById("inputColor");
  var colorValue = inputColor.value;
  var inputDescription = document.getElementById("inputDescription");
  var descriptionValue = inputDescription.value;
  var inputDreams = document.getElementById("inputDreams");
  var dreamsValue = inputDreams.value;
  var inputGames = document.getElementById("inputNuevo");
  var gamesValue = inputGames.value;
  var inputArrived = document.getElementById("inputArrived");
  var arrivedValue = inputArrived.value;
  var inputMessage = document.getElementById("inputMessage");
  var messageValue = inputMessage.value;
  var resultThatContainsFlag = document.getElementById("resultOfFormNameAndFlag"); //Manipulating DOM

  var printName = document.getElementById("pawName");
  printName.innerText = nameValue;
  var printCountryImg = document.getElementById("result__main--countryImg");
  var printCountryName = document.getElementById("pawCountry");

  switch (true) {
    case countryValue === "Argentina":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/JWqPPUH.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Chile":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/i2J0U9O.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Colombia":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/S2lg1G5.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Ecuador":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/f17iGbR.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "El Salvador":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/2a52wwN.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "España":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/zZgUXwJ.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Estados Unidos":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/8XL6UNE.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Guatemala":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/wcecY8i.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "México":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/bKtXJmQ.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Perú":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/x7FWfaK.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Venezuela":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://i.imgur.com/4FThef7.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;
  } //PARA USAR EL COLOR DE FONDO Y CAMBIO DE LETRAS


  var convertHexaToRGB = function convertHexaToRGB(colorInHexa) {
    return {
      red: colorInHexa >> 16,
      green: colorInHexa >> 8 & 255,
      blue: colorInHexa & 255
    };
  };

  var colorValueToConvert = "0x".concat(colorValue.substring(1));
  console.log(colorValueToConvert);
  var colorInRGB = convertHexaToRGB(colorValueToConvert);
  console.log(colorInRGB); //haciendo la condicional el COLOR
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

  if (colorInRGB.red && colorInRGB.green > 150 || colorInRGB.green && colorInRGB.blue > 150 || colorInRGB.red && colorInRGB.blue > 150) {
    document.getElementById("resultOfFormPaw").style.background = colorValue;
    document.getElementById("resultOfFormPaw").style.color = "#000000";

    if (resultThatContainsFlag.classList.contains("result__main--country")) {
      resultThatContainsFlag.classList.remove("result__main--country");
      resultThatContainsFlag.classList.add("result__main--country-for-white");
    } // document.getElementsById("resultOfFormNameAndFlag").style.border-bottom  = "1.5px solid letter-color-secondary"

  } else if (colorValue !== "#000000") {
    document.getElementById("resultOfFormPaw").style.background = colorValue;
    document.getElementById("resultOfFormPaw").style.color = "#ffffff";

    if (resultThatContainsFlag.classList.contains("result__main--country-for-white")) {
      resultThatContainsFlag.classList.remove("result__main--country-for-white");
      resultThatContainsFlag.classList.add("result__main--country");
    }
  } //TODO Para mejorar el codigo de switch a un ciclo for Hacer un condicional con un  array con las respuestas y codigos a ejecutar
  // switch(true){
  //     case descriptionValue !== '':
  //         console.log("Hola")
  //         break
  //     case dreamsValue !== '':
  //         console.log("Value")
  // }
  //TILES


  var titleDecription = document.getElementById("titleFormDescription");
  var titleDreams = document.getElementById("titleFormDreams");
  var titleGames = document.getElementById("titleFormGames");
  var titleArrived = document.getElementById("titleFormArrived");
  var titleMessage = document.getElementById("titleFormMessage");

  if (descriptionValue !== '') {
    titleDecription.innerText = "Sobre mí";
  }

  if (dreamsValue !== '') {
    titleDreams.innerText = "Espero:";
  }

  if (gamesValue !== '') {
    titleGames.innerText = "Juegazos: ";
  }

  if (arrivedValue !== '') {
    titleArrived.innerText = "Llegue al Canal:";
  }

  if (messageValue !== '') {
    titleMessage.innerText = "Mensaje para la muchachada";
  } //inner.HTML agrega una etiqueta dentro de otra, aqui usando un div le colocamos por dentro una imagén


  var printDescription = document.getElementById("pawDescription");
  printDescription.innerText = descriptionValue;
  var printDreams = document.getElementById("pawDreams");
  printDreams.innerText = dreamsValue;
  var printGames = document.getElementById("pawGames");
  printGames.innerText = gamesValue;
  var printArrived = document.getElementById("pawArrived");
  printArrived.innerText = arrivedValue;
  var printMessage = document.getElementById("pawMessage");
  printMessage.innerText = messageValue;
};