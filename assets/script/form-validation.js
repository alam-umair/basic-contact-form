// below code is for the form validation functionality
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const checkbox = document.getElementById("checkbox").checked;
    const generalRad = document.querySelector("#general").checked;
    const supportRad = document.querySelector("#support").checked;

    // console.log("first name:",firstName,"lastName:",lastName,"email:",email,"message:",message,"checkbox:",checkbox);
    function toggleError(element, condition) {
      document.querySelector(element).style.display = condition
        ? "block"
        : "none";
    }
    toggleError(".errFname", firstName.trim() === "");
    toggleError(".errLname", lastName.trim() === "");
    toggleError(".errEmail", email.trim() === "");
    toggleError(".errMessage", message.trim() === "");
    toggleError(".errConsent", !checkbox);
    toggleError(".errQuery", !generalRad && !supportRad);

    const isFormValid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      message.trim() &&
      checkbox &&
      (generalRad || supportRad);

    if (isFormValid) {
      document.querySelector(".message-container").style.display = "flex";
      document.querySelector(".contact-form").reset(); // optional reset
    }
  });

function closePopup() {
  document.querySelector(".message-container").style.display = "none";
}

//   below code is for the radio button functionality
