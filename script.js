// Variáveis
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let nomeHeroi = "Vinicius"
let xp = 20000
let nivelDeXp;

// Estruturas de decisões

if (xp < 1000) {
    nivelDeXp = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelDeXp = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelDeXp = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
    nivelDeXp = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelDeXp = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelDeXp = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelDeXp = "Imortal";
} else {
    nivelDeXp = "Radiante";
} 

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelDeXp);
