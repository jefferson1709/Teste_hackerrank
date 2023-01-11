// link do Exercicio: https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
    // Write your code here
    /* n = total de prisioneiros|m = total de doces|s = assento que se inicia a entrega dos doces 
        m/n: ciclos de entrega total de doces por tanto queremos o resto -> m%n
        m%n+s: somamos o resto com o numero da cadeira que iniciou a contagem porem ja tiramos o doce que 
        entregamos a primeira cadeira -> (m%n+s)-1
    */
    res = ((m%n+s)-1 || n);
    console.log(res)
    return

}
saveThePrisoner(7,19,3); // 7
saveThePrisoner(5,2,1); // 2
saveThePrisoner(5,2,2); // 3
saveThePrisoner(7,19,2); // 6
saveThePrisoner(3,7,3); // 3

//restrições
saveThePrisoner(0,2,1); 
saveThePrisoner(5,0,1); 
saveThePrisoner(5,2,0);
saveThePrisoner(5,2,1); // 2
saveThePrisoner(1,2,5); // 2
