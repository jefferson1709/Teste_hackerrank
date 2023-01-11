// link do Exercicio: https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    // Write your code here
    /*  n = total de de meias na pilha|ar[i] = cores de cada meia
        alinhamos os componentes    
        realizamos uma varedura nos componentes
        comparamos um componente com outro na sequencia
       
    */
    /* Aplicando as restriçoes 
        se  n=<1 e n=>100 -> retona 0
        se ar[1]< == 0 -> retona 0 
    */
    if (!ar || ar.length !== n  ) return 0;
    let par = 0;
    ar=ar.sort();
    for(i = 0; i < n; i++) {
        if(ar[i] == ar[i+1]){
            par++;
            i++;
        };

    };
    console.log(par);
    return par;
}


sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); //3
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 20, 20]); //3