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
