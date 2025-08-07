const formInputs = Array.from(document.querySelectorAll(".form__input"));
const messageErrors = document.querySelector(".form__errors");

const button = document.querySelector('.form__submit')

const form = document.querySelector(".form");

const errors = {};

form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Datos guardados')
})

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

        const allTrue = formInputs.every((input) => {
            return input.validity.valid
        })
        
        if(allTrue){
            button.disabled = false;
        }else{
            button.disabled = true;
        }

    })
})
/*
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
*/