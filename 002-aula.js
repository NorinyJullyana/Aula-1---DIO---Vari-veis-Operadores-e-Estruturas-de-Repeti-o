
const etanol = 3.42;

const gasolina = 5.40;

const combustivelCarro = "etanol";

const combustivelGastoMedio = 10

const distanciaKmViagem = 100;

if(combustivelCarro === "etanol"){

    let resultado = distanciaKmViagem/combustivelGastoMedio*etanol;

    console.log("Teste de valor etanol", resultado.toFixed(2) )
} else{
    let resultado = distanciaKmViagem/combustivelGastoMedio*gasolina;

    console.log("Teste de valor etanol", resultado.toFixed(2) )
}




