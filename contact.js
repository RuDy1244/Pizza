const form = document.forms[0];

form.addEventListener("submit", function (e) {
    alert("Your message has been sent");
    e.preventDefault();
    refreshInputs();
});

form.addEventListener("chanhe", evemtHandler);
form.addEventListener("invalid", evemtHandler, true);


function evemtHandler(e) {
    if (e.target.tagName != "INPUT" && e.target.tagName != "TEXTAREA") {
        return;
    }

    checkErrorAndSetMessage(e.target);
}

function checkErrorAndSetMessage(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("This field is required!");
        console.log(input);
        input.classList.add("invalid");
    } else {
        input.setCustomValidity("");
        input.classList.remove("invalid");
    }
}


function refreshInputs() {
    for (const iterator of form) {
        if (iterator.type != "submit") {
            iterator.value = "";
            iterator.classList.remove("invalid");
        }
    }
}