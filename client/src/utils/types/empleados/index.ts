
export type TEmpleado = {
    _id?: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    fechaIngreso: string;
    edad?: number;
    sexo: string;
    estrato: string;
    letras?: Array<TLetra>;
}

type TLetra = {
    letras: string;
    cantidad: number;
}

export const defaultValue = {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    sexo: '',
    fechaIngreso: '',
    estrato: ''
};