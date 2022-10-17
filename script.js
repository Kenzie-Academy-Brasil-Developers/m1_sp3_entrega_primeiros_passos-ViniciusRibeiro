/// ---> 1 <--- ///

let valor1 = parseFloat(prompt("Insira um valor inteiro"));
let valor2 = parseFloat(prompt("Insira um valor segundo inteiro"));
if (valor1 > valor2) {
  let valor1Maior = alert(
    `O maior numero é ${valor1} e a diferença é ${valor1 - valor2}`
  );
} else {
  valor1 < valor2;
  let valor1Maior2 = alert(
    `O maior numero é ${valor2} e a diferença é ${valor2 - valor1}`
  );
}

/// ---> 2 <--- ///

let numero1 = parseInt(prompt("digite um valor"));
let numero2 = parseInt(prompt("Insira um Segundo valor"));
if (numero1 > numero2) {
  let numero1Maior = alert(`O número ${numero1} é maior que ${numero2}`);
} else {
  if (numero1 < numero2) {
    let numero1Maior = alert(`O número ${numero2} é maior que ${numero1}`);
  } else {
    let numerosIguais = alert(`Números iguais`);
  }
}

/// ---> 3 <--- ///

let salario = prompt("Insira seu salário");
let prestacao_ = prompt("Insira a prestação");
let porcentagem30 = (salario * 30) / 100;
if (prestacao_ > porcentagem30) {
  let naoConsedido = alert(`Emprestimo não concedido`);
} else {
  let consedido = alert(`Emprestimo consedido`);
}

/// ---> 4 <--- ///

let valor3 = parseInt(prompt("Digite um valor divisível por 3 ou 5"));
let resto = valor3 % 2;
if ((valor3 = "3")) {
  let divisivel3 = alert(`O valor é divisível por 3`);
} else if ((valor3 = "5")) {
  let divisivel5 = alert(`O valor é divisível por 5`);
} else if (valor3 > 5) {
  let invalido = alert(`numero inválido`);
} else if ((resto = 0)) {
  let par = alert(`É par`);
} else {
  let impar = alert(`É impar`);
}

/// ---> 5 <--- ///

let diaDaSemana = prompt("informe um numero de 1 a 7");
if (diaDaSemana == 1) {
  let domingo = alert(`Domingo`);
} else if (diaDaSemana == 2) {
  let segunda = alert("Segunda-feira");
} else if (diaDaSemana == 3) {
  let terca = alert(`Terça-feira`);
} else if (diaDaSemana == 4) {
  let quarta = alert(`Quarta-feita`);
} else if (diaDaSemana == 5) {
  let quinta = alert(`Quinta-feira`);
} else if (diaDaSemana == 6) {
  let sexta = alert(`Sexta-feira`);
} else if (diaDaSemana == 7) {
  let sabado = alert(`Sábado`);
}

/// ---> 6 <--- ///

let salarioMensal = parseFloat(prompt("Digite seu salário mensal"));
let porcentualDOReajuste = parseFloat(
  prompt("Digite aqui o percentual do reajuste")
);
let formulaPorcentagem = (salarioMensal * porcentualDOReajuste) / 100;
let totalSalario = parseFloat(salarioMensal + formulaPorcentagem);
if (porcentualDOReajuste <= 5) {
  let saidoDoReajuste = alert(
    `O salário do funcionario corrigido é de: R$${totalSalario}`
  );
} else {
  let aviso = alert("O percentual do reajuste deve ser até 5%!");
}

/// ---> 7 <--- ///

let valoDolar = prompt("Insira o valor em dolar");
let cotacao = parseInt(5.4);
let valorReal = valoDolar * cotacao;
let resultado = alert(
  `$${valoDolar} é equivalente a R$${valorReal}, tendo ${cotacao} de cotação`
);

/// ---> 8 <--- ///

let praga = prompt(
  "Para qual praga? 1. Ervas daninhas, 2. gafanhotos, 3. broca ou 4. todas"
);
let acre = prompt("Quantidde de acre");
let valorParcial = 0;
if (praga == 1) {
  valorParcial = 50 * acre;
  alert(`Valor parcial de R$${valorParcial}`);
} else if (praga == 2) {
  valorParcial = 100 * acre;
  alert(`Valor parcial de R$${valorParcial}`);
} else if (praga == 3) {
  valorParcial = 150 * acre;
  alert(`Valor parcial de R$${valorParcial}`);
} else if (praga == 4) {
  valorParcial = 250 * acre;
  alert(`Valor parcial de R$${valorParcial}`);
} else {
  let nada = alert("Por favor, incira uma praga valida!");
}

if (praga == 1 && valorParcial > 750 && acre < 1000) {
  let desconto = (valorParcial - 750) * 0.1;
  alert(
    `Você recebeu um desconto de 10%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 2 && valorParcial > 750 && acre < 1000) {
  let desconto = (valorParcial - 750) * 0.1;
  alert(
    `Você recebeu um desconto de 10%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 3 && valorParcial > 750 && acre < 1000) {
  let desconto = (valorParcial - 750) * 0.1;
  alert(
    `Você recebeu um desconto de 10%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 4 && valorParcial > 750 && acre < 1000) {
  let desconto = (valorParcial - 750) * 0.1;

  alert(
    `Você recebeu um desconto de 10%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 1 && valorParcial > 750 && acre > 1000) {
  let desconto = valorParcial * 0.05;
  alert(
    `Você recebeu um desconto de 5%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 2 && valorParcial > 750 && acre > 1000) {
  let desconto = valorParcial * 0.05;
  alert(
    `Você recebeu um desconto de 5%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 3 && valorParcial > 750 && acre > 1000) {
  let desconto = valorParcial * 0.05;
  alert(
    `Você recebeu um desconto de 5%! Valor final R$${valorParcial - desconto}`
  );
} else if (praga == 4 && valorParcial > 750 && acre > 1000) {
  let desconto = valorParcial * 0.005;
  alert(
    `Você recebeu um desconto de 5%! Valor final R$${valorParcial - desconto}`
  );
} else {
  let noDescont = alert(`Desconto não aplicado`);
}

/// ---> 9 <--- ///

let tempo = parseInt(prompt("Insira o tempo da viagem"));
let velocidade = parseInt(prompt("Insira a velocidade"));
let quilometroPorLitro = 12;
let distancia = tempo * velocidade;
let litrosUsados = distancia / quilometroPorLitro;
let saida = alert(
  `Seu veículo percorreu ${distancia} a ${velocidade} em ${tempo} horas de viagem e consumiu ${litrosUsados.toFixed(
    2
  )} L de gasolina`
);

/// ---> 10 <--- ///

let valor = parseInt(prompt("Insira o valor"));
let taxa = parseInt(prompt("Insira a taxa"));
let tempo_ = parseInt(prompt("incira o tempo"));
let prestacao = valor + valor * (taxa / 100) * tempo_;
if (tempo_ == 0) {
  let tempoInvalido = alert(
    "Valor invalido! o tempo de atroso deve ser em dias"
  );
} else {
  if (tempo_ == parseFloat || "") {
    let tempoInvalido = alert(
      "Valor invalido! o tempo de atroso deve ser em dias"
    );
  } else {
    let saida_ = alert(`R$${prestacao}`);
  }
}
