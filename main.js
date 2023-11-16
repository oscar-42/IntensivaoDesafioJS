// 1.Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!');

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas
var numeroA = 1;
var numeroB = 2;
alert (numeroA+numeroB);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

var numeroC = 2;

if(typeof(numeroC)== "number"){
    alert("É um número");
}
else{
    alert("Não é um número");
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
var stringA = "Isso é uma string";

if(typeof(stringA)=="string"){
    alert("É uma string");
} 
else{
    alert("Não é uma string");
}
// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
var booleanA = true;

if(typeof(booleanA)=="boolean"){
    alert("É um booleano");
} 
else{
    alert("Não é um booleano");
}
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

var numeroD = 4;
var numeroE = 5;
alert(numeroD-numeroE);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
var numeroF = 6;
var numeroG = 7;
alert(numeroD*numeroE);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
var numeroH = 10;
var numeroI = 20;
alert(numeroH/numeroI);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
numeroPar = 4;
if(numeroPar%2==0){
    alert("É um número par");
}
else{
    alert("Não é um número par");
}
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
numeroImpar = 5;
if(numeroImpar%2!=0){
    alert("É um número ímpar");
}
else{
    alert("Não é um número ímpar");
}
