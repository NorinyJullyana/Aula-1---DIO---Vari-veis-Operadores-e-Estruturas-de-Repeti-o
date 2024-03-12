
const combustivel = 5.79;

const kmConsumo = 10

const distanciaKmViagem = 100;

let resultado = distanciaKmViagem/kmConsumo*combustivel;

//let gastoCombustivel = distanciaKmViagem/ combustivel;

//NUMERO.toFixed(VALOR DE CASAS APOIS O PONTO) .toFixed()
//Opcional. O número de dígitos que aparecem depois do ponto decimal; este pode ser um valor entre 0 e 20, inclusive, e algumas implementacões podem suportar uma variação de números maiores. Se este argumento for omitido, será tratado como 0.

//Retorno
//Uma string representando o número usando notação em ponto fixo.



console.log("Teste de valor", resultado.toFixed(2) )