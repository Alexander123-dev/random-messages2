// se declara un arreglo
const messages = [
    "Yojan",
    "Ana",
    "Caroline",
    "Paulina",
    "Yessica",
    "Diana",
    "Laura"
];

// Crear fncion para enviar aleatoriamenete los nomvres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

//Exportar como Modulo
module.exports = { randomMsg };
