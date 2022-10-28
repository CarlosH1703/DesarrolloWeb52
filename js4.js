function divisores(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* Forma 2: Sin Nombre */
const divisoresV2 = function(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* Forma 3: Simplificada */
const divisoresV3 = numero => {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

console.log(`Total de divisores: ${divisores(32)}`);
console.log(`Total de divisores: ${divisoresV2(32)}`);
console.log(`Total de divisores: ${divisoresV3(32)}`);


function calcular() {
    let numero = parseInt(document.getElementById("numero").value);    
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}


function cambiarimg() {
    let opcion = parseInt(document.getElementById("opcion").value);   
    let base = document.getElementById("imagen"); 
    let nombre = document.getElementById("nombre");
    nombre.textContent = ""; 
    switch (opcion) {
        case 1:
            base.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg";
            nombre.textContent = "";
            break;
        case 2:
            base.src = "https://occ-0-999-33.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTKNltbqj8mwGcjap_syLhMItvTAqvC0YWQB5FS3lb2QtjqW5rG3gXPFONGryHGMVN00Rxf5VWrNFhztgoEWMwjNyiuEhRPsVnZm.jpg?r=24c";
            nombre.textContent = "";
            break;
        case 3:
            base.src = "https://imagenes.elpais.com/resizer/nXpsc1lw5UDwaIzDjMBzgsQCQoY=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5LGZQ2HGIYHUC3PLDIJA4ATUH4.jpg";
            nombre.textContent = "";
            break;
        case 4:
            base.src = "https://bi.im-g.pl/im/42/68/12/z19302210V,-Peaky-Blinders-.jpg";
            nombre.textContent = "";
            break;
        default:
            base.src = ""
            break;

    }

}