// Crear los grupos
interface Grupo {
    nombre: string; 
    añoFundacion: number;
    activo: boolean;
    genero: string;
}

const grupo1 : Grupo = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
};

const grupo2 : Grupo = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: "🎸 Rock",
};

const grupo3 : Grupo = {
    nombre: "AC DC",
    añoFundacion: 1973,
    activo: true,
    genero: "🤘 Hard Rock",
};

const grupo4 : Grupo = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: "🎼 Clásica",
};

const grupo5 : Grupo = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: "🎸 Rock",
};

// mostrar por consola
const tituloGrupo = "font-weight: bold; font-size: 18px; background-color: green; "
//grupo1
console.log(`%c${grupo1.nombre}`, tituloGrupo)
console.log(`Fundado en: ${grupo1.añoFundacion}, activo: ${grupo1.activo}, genero musical: ${grupo1.genero}`)
//grupo2
console.log(`%c${grupo2.nombre}`, tituloGrupo)
console.log(`Fundado en: ${grupo2.añoFundacion}, activo: ${grupo2.activo}, genero musical: ${grupo2.genero}`)
//grupo3
console.log(`%c${grupo3.nombre}`, tituloGrupo)
console.log(`Fundado en: ${grupo3.añoFundacion}, activo: ${grupo3.activo}, genero musical: ${grupo3.genero}`)
//grupo4
console.log(`%c${grupo4.nombre}`, tituloGrupo)
console.log(`Fundado en: ${grupo4.añoFundacion}, activo: ${grupo4.activo}, genero musical: ${grupo4.genero}`)
//grupo5
console.log(`%c${grupo5.nombre}`, tituloGrupo)
console.log(`Fundado en: ${grupo5.añoFundacion}, activo: ${grupo5.activo}, genero musical: ${grupo5.genero}`)