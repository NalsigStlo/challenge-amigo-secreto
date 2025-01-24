//Lista con nombres de amigos
let listaDeAmigos = [];

//Función para agregar amigos
function agregarAmigo() {
    let amigo = (document.getElementById("amigo").value).trim();

    if (amigo.length === 0) {
        alert("Por favor, inserte un nombre");
        document.getElementById("amigo").value = '';

        return;
    }

    listaDeAmigos.push(amigo);
    document.getElementById("amigo").value = '';
    mostrarAmigos();

    return;
}

//Función para actualizar lista de amigos
function mostrarAmigos() {
    let listaMostrada = document.getElementById("listaAmigos");
    listaMostrada.innerHTML = ""

    for (amigo of listaDeAmigos) {
        let elementoDeLista = document.createElement("li");
        elementoDeLista.append(amigo);
        listaMostrada.append(elementoDeLista);
    }

    return;
}

//Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        return;
    }

    let indice = Math.floor(Math.random()*listaDeAmigos.length);
    let nombreSorteado = listaDeAmigos[indice];
    document.getElementById("resultado").innerHTML = nombreSorteado;

    return;
}