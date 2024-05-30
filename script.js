// punto 4
const form = document.querySelector('.container__form');
const formName = document.getElementById('name');
const formLastName = document.getElementById('lastname');
const formDocument = document.getElementsByName('document');
const formNumberDocument = document.getElementById('numberdocument');
const formAddres = document.getElementById('addres');

form.addEventListener('input', (e) => {
    e.preventDefault();
    validateForm()
});

const validateForm = ()=>{
    const valor = formName.value
    const longitud = valor.length
    const errorName = document.getElementById('errorName');
    if (valor.trim() !== '') {
        if (!/^[A-Za-z][a-zñáéíóú]*$/.test(valor)) {
            errorName.textContent = 'Solo letras, sin espacios y minusculas despues de la primera letra'
        }else if (longitud < 3 || longitud > 10 ) {
            errorName.textContent = 'Debe tener de 3 a 10 caracteres en total'
        
        }else{
            errorName.textContent = ' '
        }
    }else{
        errorName.textContent = 'Es obligatorio este campo'
    }

    const lastNameValor = formLastName.value;
    const errorLastName = document.getElementById('errorLastName')
    if (lastNameValor.trim() !== '') {
        if (!/^([A-ZÁÉÍÓÚáéíóúñÑ']{2,20})$/.test(lastNameValor)) {
            errorLastName.textContent = 'Solo  letras, apóstrofes o comillas simples, y debe tener entre 2 y 20 caracteres todas en mayúscula.'
        }else{
            errorLastName.textContent = ' '
        }
    } else {
        errorLastName.textContent = 'Es obligatorio este campo'
    }

    const errorDocument = document.getElementById('errorDocument')
    let documentSelect = false;
    formDocument.forEach(radio => {
        if (radio.checked) {
            documentSelect = true;
        }
    });
    if (!documentSelect) {
        errorDocument.textContent = 'Debe seleccionar un tipo de documento';
        formNumberDocument.disabled = true
    }else{
        errorDocument.textContent = ' '
        formNumberDocument.disabled = false
    }

    const errorNumberDocument = document.getElementById('errorNumberDocument')
    if (documentSelect) {
        if (formDocument[0].checked) { // DNI seleccionado
            if (!/^(\d{1,3}(?:\.\d{3})*|\d{7,8})$/.test(formNumberDocument.value)) {
                errorNumberDocument.textContent = 'El número de DNI debe tener entre 7 y 8 dígitos, y puede contener separadores de miles.'
            }else{
                errorNumberDocument.textContent = ' '
            }
        } else { // CUIL seleccionado
            if (!/^(\d{2}-?\d{7,8}-?\d{1})$/.test(formNumberDocument.value)) {
                errorNumberDocument.textContent = 'El CUIL debe tener 11 dígitos y puede contener dos guiones medios.'
            }else{
                errorNumberDocument.textContent = ' '

            }
        }
    }

    const errorAddres = document.getElementById('errorAddres')
    if (formAddres.value.trim() !== '') {
        if (!/^[\w\s\d.,'"/°]+$/i.test(formAddres.value)) {
            errorAddres.textContent = 'La dirección solo puede contener letras, números, espacios y caracteres especiales.'
        }else{
            errorAddres.textContent = ' '

        }
    }
}