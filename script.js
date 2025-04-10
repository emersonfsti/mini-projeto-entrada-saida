// Importando as funções do outro arquivo
import { gets, print } from './entradaSaida.js';

const notas = gets();

let soma = 0;

// Estrutura de repetição para somar as notas
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

if (media < 5) {
    print('REP');
} else if (media >= 5 && media < 7) {
    print('REC');
} else {
    print('APR');
}
