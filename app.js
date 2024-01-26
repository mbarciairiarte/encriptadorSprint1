
function realizarAccion() {
    const textoInput = document.getElementById('textoInput').value;
    const opcion = document.getElementById('opcion').value;
    
    if ((opcion === 'encriptar'|| opcion === 'desencriptar') && contieneCaracteresEspeciales(textoInput) || contieneMayusculasOTildes(textoInput)) {
        alert("Please, use only lowercase letters");
        return;
    }
    let resultado = '';

    if (opcion === 'encriptar') {
        resultado = encriptarTexto(textoInput);
    } else if (opcion === 'desencriptar') {
        resultado = desencriptarTexto(textoInput);
    }

    document.getElementById('resultado').value = resultado;
}

function contieneMayusculasOTildes(texto) {
    return /[A-ZáéíóúÁÉÍÓÚ]/.test(texto);
}

function contieneCaracteresEspeciales(texto) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(texto);
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
        .then(() => alert('Text copied to clipboard'))
        .catch(error => console.error('Error copying to clipboard:', error));
}
