let count = 1;
const forms = document.querySelectorAll(".beverage");
const form = forms[forms.length - 1].cloneNode(true);

document.querySelector(".add-button").addEventListener("click", () => {
    count++;

    form.querySelector('input[type="radio"][value="usual"]').name = `milk${count}`;
    form.querySelector("h4").innerHTML = `Напиток №${count}`;
    form.querySelector('select').selectedIndex = 1;
    form.querySelector('input[type="radio"][value="usual"]').checked = true;
    form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });


    forms[forms.length - 1].after(form);
});

const submitButton = document.querySelector('.submit-button');
const modalOverlay = document.createElement('div');


document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const modalContent = `<div class="modal-content">
                            <p>Заказ принят!</p>
                            <span class="close-button">X</span>
                          </div>`;

    modalOverlay.classList.add('modal-overlay');
    modalOverlay.innerHTML = modalContent;
    document.body.appendChild(modalOverlay);

    const closeButton = modalOverlay.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        modalOverlay.remove();
    });
});
