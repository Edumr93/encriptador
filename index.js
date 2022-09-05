const areaUno = document.getElementById("areaUno");
const areaDos = document.getElementById("areaDos");
const copiado = document.getElementById("copiado");
const vocales = [["e" , "enter"], ["i" , "imes"],["a" , "ai"], ["o", "ober"], ["u", "ufat"]];

copiado.classList.add("ocultar");
areaUno.focus();


function encriptar(){
    areaDos.value = "";
    let texto = "";
    texto = areaUno.value;

    for(let i = 0; i < 5; i++){
        if(texto.includes(vocales[i][0])){

            texto = texto.replaceAll(vocales[i][0], vocales[i][1]);

        }
    }

    areaDos.value = texto;
    alert(textoAreaUno);
}

function desEncriptar(){
    areaDos.value = "";
    let texto = areaUno.value;

    for(let i = 0; i < 5; i++){
        if(texto.includes(vocales[i][1])){
            texto = texto.replaceAll(vocales[i][1], vocales[i][0]);
        }
    }

    areaDos.value = texto;
}

function copiar(){
    copiado.classList.remove("ocultar");
    navigator.clipboard.writeText(areaDos.value);
    
}