//teste de arrays
let numeros = [1, 2, 3, 4, 5]
console.log(numeros);

let carros = ["fusca", "Gol", "Palio"];
console.log(carros[0]);
console.log(carros[1]);

let cores = ["vermelho", "verde", "azul"];
cores[1] = "amarelo";
console.log(cores);

let animal = ["cachorro", "gato", "coelho", "hamter", "papagaio", "peixe", "tartaeuga", "cobra", "leão", "tigre"]
console.log(animais.length);
let paises = ["Brasil", "Argentina", "Chile"];
paises.push("Uruguai")
console.log(paises)

let coresPrimarias = ["vermelho", "verde"];
coresPrimarias.unshift("azul");
console.log(coresPrimarias);

let frutasCitrica = ["limão", "laranja", "tangerina"];
frutasCitrica.shift();
console.log(frutasCitrica);

let animaisDomesticos = ["cachorro", "gato", "hamster"];
for (let i = 0; i < animaisDomesticos.length; i++) {
    console.log(animaisDomesticos[i]);
}
