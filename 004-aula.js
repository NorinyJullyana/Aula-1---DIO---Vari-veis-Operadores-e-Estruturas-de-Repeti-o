const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let peso;
let altura;

rl.question('Qual o seu peso? ', (pesoInput) => {
    peso = parseFloat(pesoInput);

    rl.question('Qual a sua altura? ', (alturaInput) => {
        altura = parseFloat(alturaInput);

        const imc = peso / (altura * altura)



        
        switch(true) {

            case (imc < 18.5):
                console.log("seu imc é:", imc.toFixed(2) , "Abaixo do peso");
                break;
            case (imc >= 18 && imc <25):
                console.log("seu imc é:", imc.toFixed(2) , "Peso normal");
                break;
            case (imc >= 25 && imc < 30):
                console.log("seu imc é:", imc.toFixed(2) , "Acima do peso");
                break;
            case (imc >= 30 && imc <= 40):
                console.log("seu imc é:", imc.toFixed(2) , "Obeso");
                break;
            case (imc > 40):
                console.log("seu imc é:", imc.toFixed(2) , "Obesidade Grave");
                break;
        };
            
         rl.close();
    });
});
