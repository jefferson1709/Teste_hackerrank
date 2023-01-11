// link do Exercicio: https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    // Write your code here
    /*  n = total de de meias na pilha|ar[i] = cores de cada meia
        realizamos uma varedura nos componentes
       
    */
    /* Aplicando as restriçoes 
        se  n=<1 e n=>100 -> retona para erro
        se ar[1]< == 0 -> retona para n 
    */
    for(index in ar) {
        console.log(ar[index]);
    }


        



}


sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); //3
//sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); //3