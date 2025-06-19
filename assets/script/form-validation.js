// below code is for the form validation functionality
document
  .querySelector(".contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    // console.log(form);
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const checkbox = document.getElementById("checkbox").checked;
    const generalRad = document.querySelector("#general").checked;
    const supportRad = document.querySelector("#support").checked;

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
      // Send form data to Formspree using fetch
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });
        // console.log("response: ", response.status);
        if (response.ok) {
          // Show your custom message and reset the form
          document.querySelector(".message-container").style.display = "flex";
          form.reset();
        } else {
          const data = await response.json();
          alert(
            "Error: " +
              (data.error ||
                "There was an error submitting the form. Please try again laters.")
          );
        }
      } catch (err) {
        alert(
          "There was an error submitting the form. Please try again later."
        );
        console.log(err);
      }
    }
  });

const radioButtons = document.querySelectorAll('input[name="query-type"]');
const radioContainer = document.querySelectorAll(".radio");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioContainer.forEach((container) => {
      container.classList.remove("selected");
    });
    const selectedRadio = radio.closest(".radio");
    if (selectedRadio) {
      selectedRadio.classList.add("selected");
    }
  });
});

function closePopup() {
  document.querySelector(".message-container").style.display = "none";
}

//   below code is for the radio button functionality
