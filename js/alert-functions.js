/*selectores*/

const form = document.getElementById("form-container");
const firstName = document.getElementById("nombre");
const nameInputContainer = document.querySelector(".form__input-container--one");
const nameAlertContainer = document.getElementById("nombre-alert");
const lastName = document.getElementById("apellido");
const lastNameInputContainer = document.querySelector(".form__input-container--two");
const lastNameAlertContainer = document.getElementById("apellido-alert");
const email = document.getElementById("email");
const emailInputContainer = document.querySelector(".form__input-container--three");
const emailAlertContainer = document.getElementById("email-alert");
const identityCard = document.getElementById("ci");
const identityCardInputContainer = document.querySelector(".form__input-container--six");
const identityCardAlertContainer = document.getElementById("ci-alert");
const basesAndConditions = document.getElementById('bases');
const basesLabel = document.querySelector(".bases__label");
const departamento = document.getElementById('departamento');
const departamentoAlert = document.getElementById('departamento-alert');
const departamentoInputContainer = document.querySelector(".form__input-container--four");
const allInputs = document.querySelectorAll(".form__input");

//funciones crean mensajes de error

/*LA IDEA ERA CREAR SOLO 2 FUNCIONES, UNA PARA CREAR ALERTA Y LA OTRA PARA REMOVERLA
PERO NO PUDE RESOLVER COMO USAR LOS NODELIST  PASADOS COMO ARGUMENTO DENTRO LA FUNCION
CONCRETAMENTE LOS METODOS COMO CLASSLIST */

const errorNameAlert = () => {
  nameAlertContainer.textContent = "Su nombre debe tener al menos 2 caracteres";
  firstName.classList.add("error");
  nameAlertContainer.classList.add("error");
};
const errorLastNameAlert = () => {
    lastNameAlertContainer.textContent = "Su apellido debe tener al menos 2 caracteres";
    lastName.classList.add("error");
    lastNameAlertContainer.classList.add("error");
};

const errorEmailAlert = () => {
    emailAlertContainer.textContent = "Verifique su email";
    email.classList.add("error");
    emailAlertContainer.classList.add("error");
}

const errorIdentityCardAlert = () => {
    identityCardAlertContainer.textContent = "C.I. Incorrecta";
    identityCard.classList.add("error");
    identityCardAlertContainer.classList.add("error");

}
const errorDepartamentoAlert = () => {
    //departamentoAlert.textContent = "Elige un departamento";
    departamento.classList.add("error");
    departamentoInputContainer.classList.add('error');

}

/*funciones para resetear estilos de error*/


const removeNameAlert = () => {
  firstName.classList.remove("error");
  nameAlertContainer.classList.remove("error"),
    (nameAlertContainer.textContent = "");
};

const removeLastNameAlert = () => {
  lastName.classList.remove("error");
  lastNameInputContainer.classList.remove("error"),
    (lastNameAlertContainer.textContent = "");
};

const removeEmailAlert = () => {
    email.classList.remove("error");
    emailInputContainer.classList.remove("error"),
      (emailAlertContainer.textContent = "");
  };

const removeIdentityCardAlert = () => {
    identityCard.classList.remove("error");
        (identityCardAlertContainer.textContent = "");
}

