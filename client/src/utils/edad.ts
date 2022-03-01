
const obtenerEdad = ( fechaNacimiento: Date ): number => {

    const dia = fechaNacimiento.getDate();
    const mes = fechaNacimiento.getMonth() + 1;
    const ano = fechaNacimiento.getFullYear();

    // cogemos los valores actuales
    const fecha_hoy = new Date();
    const ahora_ano = fecha_hoy.getFullYear();
    const ahora_mes = fecha_hoy.getMonth() + 1;
    const ahora_dia = fecha_hoy.getDate();

    // realizamos el calculo
    let edad = (ahora_ano + 1900) - ano;
    if (ahora_mes < mes) edad--;
    if ((mes === ahora_mes) && (ahora_dia < dia)) edad--;
    if (edad > 1900) edad -= 1900;

    return edad;
};

export default obtenerEdad;