const formInputs = Array.from(document.querySelectorAll(".form__input"));
const messageErrors = document.querySelector(".form__errors");

const form = document.querySelector(".form");

const errors = {};
/*
formInputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
        if(!inputElement.validity.valid){
            errors[inputElement.name] = inputElement.validationMessage;
            //messageErrors.textContent = inputElement.validationMessage;
        }else{
            errors[inputElement.name] = '';
            //messageErrors.textContent = ''
        }        

        messageErrors.textContent='';
        for(const error in errors){
            messageErrors.textContent += errors[error]            
        }
    })
})*/

form.addEventListener("input", (event) => {
  const inputElement = event.target;
  if (!inputElement.validity.valid) {
    errors[inputElement.name] = inputElement.validationMessage;
    //messageErrors.textContent = inputElement.validationMessage;
  } else {
    errors[inputElement.name] = "";
    //messageErrors.textContent = ''
  }

  messageErrors.textContent = "";
  for (const error in errors) {
    messageErrors.textContent += errors[error];
  }
});
