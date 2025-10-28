const botones = document.querySelectorAll("#home-header button");

botones.forEach(boton =>{
    boton.addEventListener("mouseover", () => {
        boton.style.backgroundColor = "#B13BFF";
        boton.style.color = "#FFCC00";
    });

    boton.addEventListener("mouseout", () =>{
        boton.style.backgroundColor = "rgb(82, 1, 99)";
        boton.style.color = "white";
    });
});

// Form.
const form = document.querySelector ("#upload-barrio form");

// Form add event.
form.addEventListener("submit", (e) =>{
    // Input's
    const name_form = document.querySelector("#name_form").value;
    const email_form = document.querySelector("#email_form").value;
    const archive_form = document.querySelector("#file_form").files[0];

    // Verify the element not null.
    if (!name_form || !email_form || !archive_form){
        alert("Por favor, llena todos los campos antes de enviar.");
        // Cancel the send
        e.preventDefault();
    } else {
        alert("¡Gracias por tu sugerencia!");
    }
});


