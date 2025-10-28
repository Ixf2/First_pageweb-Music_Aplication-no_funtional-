const botones = document.querySelectorAll("#home-header button");

botones.forEach(boton => {
    boton.addEventListener("mouseover", () => {
        boton.style.backgroundColor = "#B13BFF";
        boton.style.color = "#FFCC00";
    });

    boton.addEventListener("mouseout", () => {
        boton.style.backgroundColor = "rgb(82, 1, 99)";
        boton.style.color = "white";
    });
});

// Form.
const form = document.querySelector("#upload-barrio form, #container-footer-social-red");

// Form add event.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Input's.
    const name_form = document.querySelector("#name_form").value.trim();
    const email_form = document.querySelector("#email_form").value.trim();
    const archive_form = document.querySelector("#file_form").value.trim();  // Cambiado a .value para textarea

    // Verify the element not null.
    if (!name_form || !email_form || !archive_form) {
        alert("Por favor, llena todos los campos antes de enviar.");
    } else {
        // Json text
        const formData = {
            nombre: name_form,
            email: email_form,
            description: archive_form,  // Para textarea
            date: new Date().toISOString()
        };

        // JSON
        const jsonDates = JSON.stringify(formData, null, 2);

        // Generate Json
        localStorage.setItem("ultimaSugerencia", jsonDates);

        // Blob Json (corregido)
        const blob = new Blob([jsonDates], { type: "application/json" });  // Blob mayúscula
        const url = URL.createObjectURL(blob);

        // Temporal Link
        const jsonLink = document.createElement('a');
        jsonLink.href = url;
        // Name file
        jsonLink.download = "sugerencia.json";
        document.body.appendChild(jsonLink);
        jsonLink.click();
        document.body.removeChild(jsonLink);
        // Clear Link
        URL.revokeObjectURL(url);

        alert("¡Gracias por tu sugerencia!");
        form.reset();
    }
});

