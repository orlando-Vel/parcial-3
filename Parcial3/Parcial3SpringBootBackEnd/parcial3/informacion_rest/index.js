let baseUrl = "http://localhost:8080";
let informations = [];

function ObtenerInformations() {
    fetch(baseUrl + '/informations/all').then(res => {
        res.json().then(json => {
            informations = json;
            ImprimirInformations();
        })
    });
}

function ImprimirInformations() {
    let contenedor = document.getElementById("cuerpoCards")
    contenedor.innerHTML = "";

    informations.forEach(informations => {
        contenedor.innerHTML += MappearInformation(informations);
    });
}

function MappearInformation(informations) {
    return `<div class="card">
    <div class="imgbx">
    <a href="#"><img src="${informations.foto}" alt="">
    </a>
    <h2>${informations.titulo}</h2>
    <p><br>
    ${informations.description}
    </p>
    </div>
</div>`;

}