const nameSpan = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);

const onInputPrinting = event => {
    nameSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameSpan.textContent = "Anonymous";
    }
    event.currentTarget.value.trim() === ''? nameSpan.textContent = "Anonymous":null; 
}

input.addEventListener('input', onInputPrinting);