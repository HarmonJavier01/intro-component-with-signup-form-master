const inputFirstName = document.querySelector(".input-first-name");
const inputLastName = document.querySelector(".input-last-name");
const inputEmail = document.querySelector(".input-email");
const inputPass = document.querySelector(".input-password");

const labelFirstName = document.querySelector(".input-label-firstName");
const labelLastName = document.querySelector(".input-label-lastName");
const labelEmail = document.querySelector(".input-label-email");
const labelPass = document.querySelector(".input-label-pass");

const errorImgFirst = document.querySelector(".input-image-first");
const errorImgLast = document.querySelector(".input-image-last");
const errorImgEmail = document.querySelector(".input-image-email");
const errorImgPass = document.querySelector(".input-image-pass");

const btn = document.querySelector(".btn");

const inputs = [{
        input: inputFirstName,
        label: labelFirstName,
        labelText: "First Name cannot be empty",
        errorImg: errorImgFirst,
    },

    {
        input: inputLastName,
        label: labelLastName,
        labelText: "Last Name cannot be empty",
        errorImg: errorImgLast,
    },
    {
        input: inputEmail,
        label: labelEmail,
        labelText: "Email cannot be empty",
        errorImg: errorImgEmail,
    },
    {
        input: inputPass,
        label: labelPass,
        labelText: "Password cannot be empty",
        errorImg: errorImgPass,
    },
];

function checkEmptyFields(input, label, labelText, imgErr) {
    input.style.outline = "1px solid hsl(0, 100%, 74%) ";
    label.textContent = labelText;
    imgErr.classList.remove("close");
}

function clearError(input, label, imgErr) {
    input.style.outline = "";
    label.textContent = "";
    imgErr.classList.add("close");
}

function validateEmail(emailInput) {
    console.log(emailInput.value);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.match(mailformat)) {
        // document.form1.text1.focus();
        clearError(emailInput, labelEmail);
        return true;
    } else {
        checkEmptyFields(
            emailInput,
            labelEmail,
            "Looks like this is not an email",
            inputs[2].errorImg
        );
        // document.form1.text1.focus();
        return false;
    }
}

function checkInputFields(e) {
    e.preventDefault();

    inputs.forEach(function({ input, label, labelText, errorImg }) {
        if (input.value === "")
            checkEmptyFields(input, label, labelText, errorImg);
        else clearError(input, label, errorImg);
    });

    validateEmail(inputEmail);
    // if (inputFirstName.value == "")
    //     checkEmptyFields(
    //         inputFirstName,
    //         labelFirstName,
    //         "First Name cannot be empty"
    //     );

    // if (inputLastName.value == "")
    //     checkEmptyFields(
    //         inputLastName,
    //         labelLastName,
    //         "Last Name cannot be empty"
    //     );

    // if (inputEmail.value == "")
    //     checkEmptyFields(inputEmail, labelEmail, "Email cannot be empty");

    // if (inputPass.value == "")
    //     checkEmptyFields(inputPass, labelPass, "Password cannot be empty");
}

btn.addEventListener("click", checkInputFields);