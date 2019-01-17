export default function validationFormBack() {

    const formBack = document.querySelector('.card-back');
    const buttonLogin = document.querySelector('.btn-card--login');
    const inputBackLogin = formBack.querySelector('.card-back__login');
    const inputBackPassword = formBack.querySelector('.card-back__pass');
    const inputCheckbox = formBack.querySelector('.checkbox');
    const inputAllRadio = formBack.querySelectorAll('.radio');



    buttonLogin.addEventListener('click', (event) => {

        event.preventDefault();

        // console.log(isEmptyInput(inputBackLogin));
        // console.log(isEmptyCheckboxOrRadio(inputCheckbox));

        if(isEmptyInput(inputBackLogin) && 
        isEmptyInput(inputBackPassword) &&
        isEmptyCheckboxOrRadio(inputCheckbox) && 
        isEmptyCheckboxOrRadio(inputAllRadio[0])) {

            console.log('form yes');
            
        } else {

            console.log('form no');

        }

        

    });

    
    function isEmptyInput(argElem) {

        return argElem.value.length !== 0;

    }

    function isEmptyCheckboxOrRadio(argElem) {

        return argElem.checked === true;

    }


}

