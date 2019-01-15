export default function validationForm() {

    const formBack = document.querySelector('.card-back');
    const buttonLogin = document.querySelector('.btn-card--login');
    const inputBackLogin = formBack.querySelector('.card-back__login');
    const inputBackPassword = formBack.querySelector('.card-back__pass');
    const inputCheckbox = formBack.querySelector('.checkbox');
    const inputAllRadio = formBack.querySelectorAll('.radio');



    buttonLogin.addEventListener('click', () => {

        console.log(isEmptyInput(inputBackLogin));
        console.log(isEmptyCheckboxOrRadio(inputCheckbox));
        

    });

    
    function isEmptyInput(argElem) {

        return argElem.value.length !== 0;

    }

    function isEmptyCheckboxOrRadio(argElem) {

        return argElem.checked === true;

    }


}