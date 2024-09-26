function determinarNivel(nome, xpHeroi) {
    let nivel;

    if (xpHeroi < 1000) {
        nivel = 'Ferro';
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = 'Bronze';
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = 'Prata';
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivel = 'Ouro';
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = 'Platina';
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = 'Ascendente';
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = 'Imortal';
    } else if (xpHeroi >= 10001) {
        nivel = 'Radiante';
    }

    
    alert(`O Herói de nome ${nome} está no nível de ${nivel}`);
}


const nomeHeroi = prompt("Qual o nome do seu Herói?");
const xpHeroi = parseInt(prompt("Qual o nivel de experiência do seu Herói?"));

determinarNivel(nomeHeroi, xpHeroi)