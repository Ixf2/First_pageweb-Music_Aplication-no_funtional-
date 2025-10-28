const boton = document.getElementById("headerButton");

boton.addEventListener("mouseover", () => {
    boton.style.background = "#B13BFF";
    boton.style.color = "#FFCC00"
});

boton.addEventListener("mouseout", () =>{
    boton.style.backgroundColor = "#333"
    boton.style.color = "white";
});

boton()