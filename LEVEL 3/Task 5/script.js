document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const passInput = document.getElementById("pass");

  const nameError = document.getElementById("nameError");
  const passError = document.getElementById("passError");

  const rangeInput = document.getElementById("percentageRange");
  const rangeValue = document.getElementById("rangeValue");

  if (rangeInput && rangeValue) {
    rangeInput.addEventListener("input", (e) => {
      rangeValue.textContent = e.target.value;
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    let firstInvalidInput = null;

    nameError.textContent = "";
    passError.textContent = "";
    nameInput.style.borderColor = "#cbd5e0";
    passInput.style.borderColor = "#cbd5e0";

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      nameError.style.color = "#e53e3e";
      nameError.style.fontSize = "12px";
      nameInput.style.borderColor = "#e53e3e";
      isValid = false;

      if (!firstInvalidInput) {
        firstInvalidInput = nameInput;
      }
    }

    const passwordPattern = /^[A-Za-z0-9@#]{3,10}$/;
    const passValue = passInput.value.trim();

    if (passValue === "") {
      passError.textContent = "Password is required.";
      passError.style.color = "#e53e3e";
      passError.style.fontSize = "12px";
      passInput.style.borderColor = "#e53e3e";
      isValid = false;

      if (!firstInvalidInput) {
        firstInvalidInput = passInput;
      }
    } else if (!passwordPattern.test(passValue)) {
      passError.textContent =
        "Password must be 3 to 10 characters (letters, numbers, @, # only).";
      passError.style.color = "#e53e3e";
      passError.style.fontSize = "12px";
      passInput.style.borderColor = "#e53e3e";
      isValid = false;

      if (!firstInvalidInput) {
        firstInvalidInput = passInput;
      }
    }

    if (dojInput.value.trim() === "") {
      dojError.textContent = "Date of Joining is required.";
      dojError.style.color = "#e53e3e";
      dojError.style.fontSize = "12px";
      dojInput.style.borderColor = "#e53e3e";
      isValid = false;

      if (!firstInvalidInput) firstInvalidInput = dojInput;
    }

    if (!isValid) {
      firstInvalidInput.focus();
    } else {
      alert("Form validated and submitted successfully!");
      form.reset();
      rangeValue.textContent = "10";
    }
  });
});
