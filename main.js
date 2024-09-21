const btnSurprise = document.getElementsByClassName("buttonIndex")[0]; // Selecciona el primer elemento
const miCancion = document.getElementById("miCancion");


btnSurprise.addEventListener('click', () => {
    Swal.fire({
        title: "Aquí tienes tus flores amarillas",
        text: "¡Espero te gusten mucho amor!",
        imageUrl: "https://images.unsplash.com/photo-1590596970100-b515e4ba8734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
       
    });
    miCancion.play()
});
