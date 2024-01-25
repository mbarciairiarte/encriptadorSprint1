
function realizarAccion() {
    const textoInput = document.getElementById('textoInput').value;
    const opcion = document.getElementById('opcion').value;
    let resultado = '';

    if (opcion === 'encriptar') {
        resultado = encriptarTexto(textoInput);
    } else if (opcion === 'desencriptar') {
        resultado = desencriptarTexto(textoInput);
    }

    document.getElementById('resultado').value = resultado;
}

function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function copiarAlPortapapeles() {
    const resultadoTexto = document.getElementById('resultado').value;

    // Utilizando navigator.clipboard.writeText() para copiar al portapapeles
    navigator.clipboard.writeText(resultadoTexto)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(error => console.error('Error al copiar al portapapeles:', error));
}
