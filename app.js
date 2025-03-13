// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//nombreAmigo = document.getElementById("amigo");
var listaDeAmigos = [];
function agregarAmigo() {
    if (document.getElementById('amigo').value != '') {
        var nombreAmigo = document.getElementById('amigo').value;
        listaDeAmigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        document.getElementById('listaAmigos').innerHTML += `<li>${listaDeAmigos[listaDeAmigos.length-1]}</li>`;
        console.log(listaDeAmigos);
    } else {
        alert('Debe introducir un nombre correcto.');
        document.getElementById('amigo').focus();
    }
    
}

function sortearAmigo() {
    if (!listaDeAmigos.length) {
        alert('Debe agregar un amigo.')
        document.getElementById('amigo').focus();
    } else {
        let numeroSorteado = Math.random()*listaDeAmigos.length;
        document.getElementById('resultado').innerHTML = numeroSorteado;
        console.log(Math.round(Math.random()*listaDeAmigos.length));
    }
}
