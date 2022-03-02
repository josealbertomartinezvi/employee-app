
export const contarLetras = (empleado) => {
    const { nombre, apellido } = empleado;
    const nombreCompleto = `${nombre} ${apellido}`.replace(/ /g, "").toUpperCase();

    generarArray(nombreCompleto, empleado, []);
}

const generarArray = (nombre, empleado, letras) => {

    if(nombre.length === 0){
        empleado.letras = letras;
        return;
    } 

    const letra = nombre.charAt(0);
    const longitudInicial = nombre.length;
    const nombreFinal = nombre.replace(new RegExp(letra, 'g'), "");
    const longitudFinal = nombreFinal.length;

    letras = [ ...letras, { letra, cantidad: (longitudInicial - longitudFinal) } ];

    generarArray(nombreFinal, empleado, letras);

}