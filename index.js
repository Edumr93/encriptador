const areaUno = document.getElementById("areaUno");
const areaDos = document.getElementById("areaDos");

areaUno.focus();


function encriptar(){
    let textoAreaUno = "";
    textoAreaUno = areaUno.value;
    let vocales = [["e" , "enter"], ["i" , "imes"],["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
    let textoEncriptado = "";


    for(let i = 0; i < 5; i++){
        if(textoAreaUno.includes(vocales[i][0])){

            textoAreaUno = textoAreaUno.replaceAll(vocales[i][0], vocales[i][1]);

        }
    }

    alert(textoAreaUno);


}
