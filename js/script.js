
// =================================
// 1. MOBILE NAVIGATION
// =================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // Close navigation after clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}


// =================================
// 2. RESERVATION FORM
// =================================

const reservationForm = document.querySelector("#reservation-form");

if (reservationForm) {
    const dateInput = document.querySelector("#reservation-date");
    const message = document.querySelector("#form-message");

    // Prevent selecting a past date
    if (dateInput) {
        const today = new Date();
        const localDate = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        );

        dateInput.min = localDate.toISOString().split("T")[0];
    }

    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!reservationForm.reportValidity()) {
            return;
        }

        message.textContent =
            "Demo only: your details are valid, but no reservation was sent.";

        reservationForm.reset();

        // Restore the minimum reservation date
        if (dateInput) {
            const today = new Date();
            const localDate = new Date(
                today.getTime() - today.getTimezoneOffset() * 60000
            );

            dateInput.min = localDate.toISOString().split("T")[0];
        }
    });
}
