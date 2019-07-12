function somar(a, b){ // chamou a função, deu um nome de 'somar'| parâmetros (a, b)
    return a + b      // retorna um valor | retorna 'a' mais a soma de 'b'
}

console.log(somar(4, 6)) // define os valores direto de 'a' e 'b'

function escadinha (material, degraus){
    let escada = material;

    for(let i = 0; i < degraus; i++){
        console.log(escada);

        escada += material;
    }
}

function parOuImpar (a){
    if(a%2 == 0){
        return 'é par'
    }
    else{
         return'é impar' // se 
        }
}

const aleatorio = function(min, max){
    // Math.random() * 100) de 0 a 100
    return Math.floor(Math.random() * (max - min) + min);
}
