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
  var messageValue = inputMessage.value; //Manipulating DOM

  var printName = document.getElementById("pawName");
  printName.innerText = nameValue;
  var printCountryImg = document.getElementById("result__main--countryImg");
  var printCountryName = document.getElementById("pawCountry");

  switch (true) {
    case countryValue === "Argentina":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330487.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Chile":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330554.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Colombia":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330508.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Ecuador":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330581.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "El Salvador":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330670.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "España":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330557.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Estados Unidos":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330459.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Guatemala":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330587.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "México":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330433.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Perú":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330497.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;

    case countryValue === "Venezuela":
      printCountryImg.innerHTML = "<img id=\"countryImg\" src=\"https://image.flaticon.com/icons/png/512/330/330546.png\" alt=\"\">";
      printCountryName.innerText = "de ".concat(countryValue);
      break;
  }

  if (colorValue !== "#000000") {
    console.log("Hola");
  } //TODO Hacer un condicional con un  array con las respuestas y codigos a ejecutar
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