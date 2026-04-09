const fs = require('fs');
const path = require('path');

function reemplazarCaracteres(nombre) {
    return nombre
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")   // Quita tildes y ñ
        .replace(/\s+/g, '-')                               // Espacios por guiones
        .replace(/[()]/g, '')                               // Quita paréntesis
        .replace(/[^a-z0-9\.\-]/g, '')                      // Quita símbolos raros
        .replace(/-+/g, '-')                                // Evita guiones dobles --
        .replace(/^-+|-+$/g, '');                           // Quita guiones al inicio o final
}

function renombrarDirectorio(directorio) {
    const elementos = fs.readdirSync(directorio);

    elementos.forEach(objeto => {
        const rutaArchivo = path.join(directorio, objeto);
        const estado = fs.statSync(rutaArchivo);

        const nombreLimpio = reemplazarCaracteres(objeto);
        const rutaArchivoLimpio = path.join(directorio, nombreLimpio);

        // Renombrar si el nombre cambia
        if (objeto !== nombreLimpio) {
            console.log(`Renombrando: ${objeto} -> ${nombreLimpio}`);
            fs.renameSync(rutaArchivo, rutaArchivoLimpio);
        }

        // Si es carpeta, entrar recursivamente
        if (estado.isDirectory()) {
            renombrarDirectorio(rutaArchivoLimpio);
        }
    });
}

// EJECUCIÓN
console.log("Iniciando limpieza.");
const carpetasALimpiar = ['./assets', './projects', './docs'];

carpetasALimpiar.forEach(directorio => {
    if (fs.existsSync(directorio)) {
        renombrarDirectorio(directorio);
    }
});

console.log("Limpieza finalizada.");