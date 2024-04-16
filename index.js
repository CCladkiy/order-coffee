let count = 1;


document.querySelector(".add-button").addEventListener("click", () => {
    count++;
    let forms = document.querySelectorAll(".beverage");
    let form = forms[forms.length - 1].cloneNode(true);

    form.querySelector('input[type="radio"][value="usual"]').name = `milk${count}`;
    form.querySelector("h4").innerHTML = `Напиток №${count}`;
    form.querySelector('select').selectedIndex = 1;
    form.querySelector('input[type="radio"][value="usual"]').checked = true;
    form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });


    forms[forms.length - 1].after(form);
});

const modalOverlay = document.createElement('div');

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const modalContent = `<div class="modal-content">
                            <p>Заказ принят!</p>
                            <p>Вы заказали ${count} ${napitoktkatkov(count)}</p>
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

function napitoktkatkov(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return "напиток";
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        return "напитка";
    } else {
        return "напитков";
    }
}