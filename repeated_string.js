// link do Exercicio: https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    // Write your code here
    /*  s = letras para repetir| n = total de caracteres a ser considerada 
        realizamos uma varedura das letras no componente s
        depois replicamos elas ate o limite de n
        depois consideramos quantas letras 'a' tem no componente
       
    */
    /* Aplicando as restriçoes 
        se s=<1 e s=>100 -> retona 0
        se n=<1 e n=>10¹² -> retona 0 
    */

    let res_a = 0
    let letras ="";
    let palavras ="";
    
    letras = s.repeat(n)
    letras= letras.split("");

    //console.log(letras)
    for(i = 0; i < n; i++) {
        if(letras[i] == "a"){
            res_a++;
        } 
    };

    /*
    for(i = 0; i < n; i++) {
        letras += s;
    };
    letras= letras.split("");
    for(i = 0; i < n; i++) {
        palavras += letras;
    };
    palavras.forEach(index => {
        if(index == "a"){
            res_a++;
        }        
    });
    */
    console.log(res_a);
}


repeatedString('aba', 10)//7
//repeatedString('a', 1000000000000)//1000000000000