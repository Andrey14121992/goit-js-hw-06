const input = document.querySelector(`#validation-input`);
const lenghtEl = Number(input.dataset.length);
input.addEventListener(`blur`, onOutBlur);

function onOutBlur() {
    if (input.value.length === lenghtEl) {
        input.classList.remove(`invalid`);
        return input.classList.add(`valis`);
    } else {
        input.classList.remove(`valid`);
        return input.classList.add(`invalid`);
    }
}