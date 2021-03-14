/* Import de datos de datos.js*/

//SELECTORES//

const selectDepartamento = document.getElementById("departamento");
const selectLocalidad = document.getElementById("localidad");

//  FUNCION PARA AGREGAR DATOS.JS (SE EJECUTA ON LOAD DESDE DATOS.JS)

const addToSelect = (dptosLocs) => {
  //crea un select option para departamentos por cada key dentro del objeto dptosLocs

  for (const dpto in dptosLocs) {
    let option = document.createElement("option");
    option.classList.add("departamento__option");
    option.textContent = `${dpto}`;
    selectDepartamento.appendChild(option);
  }
};

/**************************************************************************************************************************/
/********************** VALIDACION DADA PARA SER UTILIZADA ***************************************************************/
/*************************************************************************************************************************/

function validarCedula(ci) {
  //Inicializo los coefcientes en el orden correcto
  let arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  let suma = 0;
  //Para el caso en el que la CI tiene menos de 8 digitos
  //calculo cuantos coeficientes no voy a usar
  let difCoef = parseInt(arrCoefs.length - ci.length);
  //recorro cada digito empezando por el de más a la derecha
  //o sea, el digito verificador, el que tiene indice mayor en el array
  for (let i = ci.length - 1; i > -1; i--) {
    //Obtengo el digito correspondiente de la ci recibida
    let dig = ci.substring(i, i + 1);
    //Lo tenía como caracter, lo transformo a int para poder operar
    let digInt = parseInt(dig);
    //Obtengo el coeficiente correspondiente al ésta posición del digito
    let coef = arrCoefs[i + difCoef];
    //Multiplico dígito por coeficiente y lo acumulo a la suma total
    suma = suma + digInt * coef;
  }
  let result = false;
  // si la suma es múltiplo de 10 es una ci válida
  if (suma % 10 === 0) {
    result = true;
  }
  return result;
}

/*--------------- VALIDACION DE FORMULARIO-------*/

/* funcion central validadora */

const formValidation = (event) => {
  event.preventDefault();
  let minimumCharacters = 2;
  let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let allValidated = true;

  // valida que el nombre tenga mas de 2 caracteres

  if (firstName.value.length < minimumCharacters) {
    errorNameAlert();
    nameInputContainer.addEventListener("click", removeNameAlert);
    allValidated = false;

    // valida que el apellido tenga mas de 2 caracteres
  } else if (lastName.value.length < minimumCharacters) {
    errorLastNameAlert();
    lastNameInputContainer.addEventListener("click", removeLastNameAlert);
    allValidated = false;

    //valida el email
  } else if (!emailRegEx.test(email.value)) {
    errorEmailAlert();
    emailInputContainer.addEventListener("click", removeEmailAlert);
    allValidated = false;
  }

  /* validacion departamento */

  if (selectDepartamento.value === "Departamento") {
    errorDepartamentoAlert();
    allValidated = false;
  }

  /*---------validacion de bases y condiciones---------*/

  if (!basesAndConditions.checked) {
    basesLabel.style.color = "red";
    allValidated = false;
  }

  /*------VALIDACION DE CEDULA -------*/

  if (identityCard.value == "") {
    errorIdentityCardAlert();
    allValidated = false;
    identityCardAlertContainer.addEventListener('click', removeIdentityCardAlert());
  }else if (validarCedula(identityCard.value) === false){
    errorIdentityCardAlert();
    allValidated = false;
    identityCardAlertContainer.addEventListener('click', removeIdentityCardAlert());
}

  

  //si todos los campos estan correctos, se envia el formulario

  if (allValidated === false) {
    allInputs.forEach((input) => {
      input.classList.add("error");
      input.addEventListener("click", () => {
        input.classList.remove("error");
      });
    });
  } else {
    allInputs.forEach((input) => {
      input.classList.add("validated");
      basesLabel.style.color = "green";
    });
    setTimeout(function () {
      alert("Formulario enviado");
    }, 1000);
  }
};

//esta funcion empieza todo
form.addEventListener("submit", formValidation);
