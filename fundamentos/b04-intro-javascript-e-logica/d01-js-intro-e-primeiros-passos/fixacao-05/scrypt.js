let statusDaPessoa = "reprovado";

switch (statusDaPessoa) {
    case "aprovado":
        console.log("Parabéns, aprovado!");
        break;

    case "lista":
        console.log("Aguarde, você está na nossa lista de espera.");
        break;

    case "reprovado":
        console.log("Não foi dessa vez, você reprovou.");
        break;

    default:
        console.log("Não se aplica.")
}

