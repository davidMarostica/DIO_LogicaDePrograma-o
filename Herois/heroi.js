const leia = require("readline-sync")
// Função para calcular o nível do herói com base nos pontos de XP

function calculaNivelHeroi(xpHeroi){
    if(xpHeroi <= 1000){
        return "Ferro";
    }else if(xpHeroi <= 2000){
        return "Bronze";
    }else if(xpHeroi <= 5000){
        return "Prata";   
    }else if(xpHeroi <= 6000){
        return "Ouro"; 
    }else if(xpHeroi <= 7000){
        return "Platina"; 
    }else if(xpHeroi <= 8000){
        return "Ascendente";   
    }else if(xpHeroi <= 10000){
        return "Imortal"; 
    }else{
        return "Radiante";
    }
}

// Exemplos de uso:
let heroi = "David"
let xp = 8500;
let nivel = calculaNivelHeroi(xp);

console.log(`O Herói ${heroi} tem ${xp} pontos de XP e está no nível: ${nivel}`)

// Testando outros níveis
console.log("\nTestando diferentes níveis:")
let pontosXP = [900, 1500, 3000, 5500, 6500, 7500, 9000, 10500];

pontosXP.forEach(xp => {
    console.log(`XP: ${xp} - Nível: ${calculaNivelHeroi(xp)}`);
});

// Nova função: calcularNivel baseada em vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// Exemplo de uso da nova função
console.log('\nExemplo calcularNivel:');
console.log(calcularNivel(85, 20)); // Exemplo: saldo 65 -> Diamante