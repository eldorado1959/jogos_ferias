import * as readlineSync from 'readline-sync';  

function converterMinusculoParaMaiusculo(textoOriginal: string): string {  
    let textoMaiusculo: string = '';  

    for (let i = 0; i < textoOriginal.length; i++) {  
        const letra = textoOriginal[i];  

        // Conversão de letra minúscula para maiúscula  
        switch (letra) {  
            case 'a': textoMaiusculo += 'A'; break;  
            case 'b': textoMaiusculo += 'B'; break;  
            case 'c': textoMaiusculo += 'C'; break;  
            case 'd': textoMaiusculo += 'D'; break;  
            case 'e': textoMaiusculo += 'E'; break;  
            case 'f': textoMaiusculo += 'F'; break;  
            case 'g': textoMaiusculo += 'G'; break;  
            case 'h': textoMaiusculo += 'H'; break;  
            case 'i': textoMaiusculo += 'I'; break;  
            case 'j': textoMaiusculo += 'J'; break;  
            case 'k': textoMaiusculo += 'K'; break;  
            case 'l': textoMaiusculo += 'L'; break;  
            case 'm': textoMaiusculo += 'M'; break;  
            case 'n': textoMaiusculo += 'N'; break;  
            case 'o': textoMaiusculo += 'O'; break;  
            case 'p': textoMaiusculo += 'P'; break;  
            case 'q': textoMaiusculo += 'Q'; break;  
            case 'r': textoMaiusculo += 'R'; break;  
            case 's': textoMaiusculo += 'S'; break;  
            case 't': textoMaiusculo += 'T'; break;  
            case 'u': textoMaiusculo += 'U'; break;  
            case 'v': textoMaiusculo += 'V'; break;  
            case 'w': textoMaiusculo += 'W'; break;  
            case 'x': textoMaiusculo += 'X'; break;  
            case 'y': textoMaiusculo += 'Y'; break;  
            case 'z': textoMaiusculo += 'Z'; break;  
            default: textoMaiusculo += letra; // mantém o caractere original  
        }  
    }  

    return textoMaiusculo;  
}  

// Recebendo texto do usuário  
const textoExemplo = readlineSync.question('Digite um texto : ');  
const resultado = converterMinusculoParaMaiusculo(textoExemplo);  
console.log('Texto em letras maiúsculas:', resultado);
