export default function validationFormContact() {

    const formComments = document.querySelector('.comments__form');
    const buttonSend = formComments.querySelector('.form__submit');
    const inputName = formComments.querySelector('.form__input-name');
    const inputEmail = formComments.querySelector('.form__input-mail');
    const textareaMessage = formComments.querySelector('.form__textarea');


    buttonSend.addEventListener('click', (event) => {

        event.preventDefault();

        if(isEmptyInput(inputName) && 
          isEmptyInput(inputEmail) && 
        isEmptyInput(textareaMessage)) {

            console.log('form yes');
            
        } else {

            console.log('form no');

        }

        

    });

    
    function isEmptyInput(argElem) {

        return argElem.value.length !== 0;

    }

}


// Состоит из 6 символов
// Содержит хотя бы одну прописную букву
// Содержит хотя бы одну строчную букву
// Содержит хотя бы одну цифру
// Вы можете это сделать следующим образом:

// <input pattern=”(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}” type=”password” id=”password” name=”password” required placeholder=” “>