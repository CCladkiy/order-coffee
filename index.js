let count = 1;

const createButton = (fieldSet) => {
    const box = document.createElement('div');
    const button = document.createElement('button');

    button.textContent = 'X';

    box.appendChild(button);

    button.addEventListener('click', () => {
        if (count > 1) {
            fieldSet.remove();
            count--;
        }
    });

    fieldSet.style.position = 'relative';
    box.style.position = 'absolute';
    box.style.top = '20px';
    box.style.right = '20px';
    button.type = 'button';
    button.style.color = 'red';

    fieldSet.appendChild(box);
}

const fieldSet = document.querySelector(".beverage")
createButton(fieldSet);

document.querySelector(".add-button").addEventListener("click", () => {
    count++;
    const fieldSets = document.querySelectorAll(".beverage");
    const newFieldSet = fieldSets[fieldSets.length - 1].cloneNode(true);
    newFieldSet.querySelector('input[type="radio"][value="usual"]').name = `milk${count}`;
    newFieldSet.querySelector("h4").innerHTML = `Напиток №${count}`;
    newFieldSet.querySelector('select').selectedIndex = 1;
    newFieldSet.querySelector('input[type="radio"][value="usual"]').checked = true;
    newFieldSet.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    createButton(newFieldSet);

    fieldSets[fieldSets.length - 1].after(newFieldSet);
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
