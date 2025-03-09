document.addEventListener("DOMContentLoaded", function () {
    const elementsToHover = document.querySelectorAll(".pricing-table tbody tr, .curriculum-item, .contact-container");

    elementsToHover.forEach(element => {
        element.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.03)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        element.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        const formData = new FormData(form);

        try {
            const response = await fetch("send_email.php", {
                method: "POST",
                body: formData
            });

            const result = await response.text();
            formStatus.innerText = result;
            formStatus.style.color = "green";

            form.reset(); // Clear form after submission
        } catch (error) {
            formStatus.innerText = "Error sending message. Try again.";
            formStatus.style.color = "red";
        }
    });
});
