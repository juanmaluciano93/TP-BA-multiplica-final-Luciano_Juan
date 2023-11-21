//Agrego mediante JS el header y footer de las páginas "juegos", "peliculas" y "registrarse"
document.getElementById("header").innerHTML = `
<div id="logos">
<div class="emblema">
    <img src="../IMG/logo2_silenthill.jpg" alt="logo2_silenthill">
</div>
<div class="emblema">
    <img src="../IMG/logo2_silenthill.jpg" alt="logo2_silenthill">
</div>
<div class="emblema">
    <img src="../IMG/logo2_silenthill.jpg" alt="logo2_silenthill">
</div>
<div id="logo">
    <img src="../IMG/logo_silenthill.jpg" alt="logo_silenthill">
</div>
<div class="emblema">
    <img src="../IMG/logo2_silenthill.jpg" alt="logo2_silenthill">
</div>
<div class="emblema">
    <img src="../IMG/logo2_silenthill.jpg" alt="logo2_silenthill">
</div>
<div class="emblema">
    <img src="../IMG/logo2_silenthill.jpg" alt="logo2_silenthill">
</div>
</div>
<nav>
<a class="estilo" href="../index.html" target="_blank" rel="home">Home</a>
<a class="estilo" href="juegos.html" target="_blank" rel="juegos">Juegos</a>
<a class="estilo" href="peliculas.html" target="_blank" rel="peliculas">Películas</a>
<a class="estilo" href="registrarse.html" target="_blank" rel="registrarse">Registrarse</a>
</nav>
`;

document.getElementById("footer").innerHTML = `
<p>Redes Sociales</p>
<a href="https://twitter.com/silenthill?lang=es" target="_blank"><img class="icono" src="../IMG/icono_twitter.png"
        alt="twitter"></a>
<a href="https://www.facebook.com/WelcomeToSilentHillOriginal/" target="_blank"><img class="icono"
        src="../IMG/icono_facebook.png" alt="facebook"></a>
<a href="https://www.instagram.com/silent.hill.official/?hl=es" target="_blank"><img class="icono"
        src="../IMG/icono_instagram.png" alt="instagram"></a><br><br>
<p>Copyright 2023 © Mundo Silent Hill todos los derechos reservados</p>
<p>Diseñado por Juan Manuel Luciano comision 52</p>
`;

//Agrego accion a los botones del trailer
function ocultarMostrar(button) {
    const videoContainer = button.parentElement.querySelector(".video");
    if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
        videoContainer.style.display = "block";
        button.innerHTML = "Ocultar trailer"
        button.style.background = "orange"
        button.style.color = "darkred"
    } else {
        videoContainer.style.display = "none";
        button.innerHTML = "Mostrar trailer"
        button.style.background = "darkred"
        button.style.color = "yellow"
    }
}

//Validacion de formulario
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userCity = document.getElementById("userCity");
const userStreet = document.getElementById("userStreet");
const userNumStreet = document.getElementById("userNumStreet");
const userZipCode = document.getElementById("userZipCode");
const userTel = document.getElementById("userTel");
const userDob = document.getElementById("userDob");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");

formulario.addEventListener("submit", event => {
    event.preventDefault();    //Anulo la accion por defecto del navegador de enviar el formulario 

    // Obtengo los valores del género y conocimientos del usuario sobre SH
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const knowledge = document.querySelector('select[name="knowledge"]').value;

    // Obtengo los valores seleccionados de los checkbox de gustos sobre SH
    const likesArray = Array.from(document.querySelectorAll('input[name="likes"]:checked')).map(like => like.value);
    const likes = likesArray.join(", ");

    // Obtengo los valores de la caja de texto
    const comments = document.querySelector('textarea[name="text"]').value;

    //Uso de expresiones regulares
    const expRegLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const expRegNum = /^\d+$/;
    const expRegEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Condicionales para cuando no se cumple con la exp. reg
    if (!expRegLetras.test(userName.value) || !expRegLetras.test(userSurname.value)) {
        alert("Formato inválido. Solo letras en el nombre y apellido");
        return;
    }

    if (!expRegNum.test(userTel.value)) {
        alert("Formato inválido. Solo números en el teléfono");
        return;
    }

    if (!expRegEmail.test(userEmail.value)) {
        alert("Formato email no válido");
        return;
    }

    // Calcular la edad a partir de la fecha de nacimiento
    const dob = new Date(userDob.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--; // Restar un año si aún no ha pasado el cumpleaños este año
    }

    if (age < 18) {
        alert("Debes ser mayor de 18 años para completar el formulario.");
        return;
    }

    alert("Formulario enviado con éxito");

    // Creo una nueva ventana para mostrar los datos ingresados
    const nuevaVentana = window.open("", "_blank");

    // Creo una titulo para la tabla
    const title = document.createElement("h2");
    title.innerHTML = "DATOS INGRESADOS"

    title.style.textAlign = "center";

    // Creo una tabla para mostrar los datos ingresados
    const tabla = document.createElement("table");
    tabla.style = "border: solid; margin: auto; border-collapse: collapse;";

    // Configuro los estilos de las celdas de la tabla    
    const addRow = (titulo1, titulo2) => {
        const row = tabla.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
    
        cell1.textContent = titulo1;
        cell1.style = `text-align: center; border: solid; background: yellow; font-weight: bold;`;
    
        cell2.textContent = titulo2;
        cell2.style = `text-align: center; border: solid; background: yellow; font-weight: bold;`;
    };

    const addRow2 = (titulo1, titulo2) => {
        const row = tabla.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
    
        cell1.textContent = titulo1;
        cell1.style = `text-align: center; border: solid; font-weight: bold;`;
    
        cell2.textContent = titulo2;
        cell2.style = `text-align: center; border: solid;`;
    };
    
    // Completo las celdas con los datos del formulario
    addRow("CAMPO", "VALOR");
    addRow2("Nombre", userName.value);
    addRow2("Apellido", userSurname.value);
    addRow2("Calle", userStreet.value);
    addRow2("Número", userNumStreet.value);
    addRow2("Ciudad", userCity.value);
    addRow2("Código postal", userZipCode.value);
    addRow2("Teléfono", userTel.value);
    addRow2("Fecha de nacimiento", userDob.value);
    addRow2("Mail", userEmail.value);
    addRow2("Clave", userPassword.value);
    addRow2("Género", gender);
    addRow2("Conocimientos sobre SH", knowledge);
    addRow2("Gustos sobre SH", likes);
    addRow2("Comentarios", comments);

    // Agrego el titulo y la tabla al cuerpo de la nueva ventana
    nuevaVentana.document.body.appendChild(title);
    nuevaVentana.document.body.appendChild(tabla);

    formulario.reset();
});

