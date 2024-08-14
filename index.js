// Armazena o nome do herói e a quantidade de experiência (XP)
let nomeHeroi = "Arthas";
let xpHeroi = 6500; // Aqui você pode mudar o valor do XP para testar outros casos

// Variável que vai guardar o nível do herói
let nivelHeroi;

// Verifica o nível do herói com base no XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibe a mensagem final no console
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
