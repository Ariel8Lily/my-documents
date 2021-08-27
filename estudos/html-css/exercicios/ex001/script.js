var minhaIdade = 16;
var amgIdade = 15;

if(minhaIdade > amgIdade) {
  console.log('É maior');
} else if(minhaIdade === amgIdade) {
  console.log('É Igual');
} else {
  console.log('É menor');
}


var expressao = (5- 2) && (5 - ' ') && (5 - 2);

var nome = 'Ariel',
    idade = 16,
    possuiDoutorado = false,
    empregoFuturo,
    dinheiroNaConta = 0;

    console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


var brasil = 207,
    china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('China possui maior numero de habitantes');
}

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso')
}

if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}