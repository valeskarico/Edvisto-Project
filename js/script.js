var descripcion = document.getElementById("descripcion");
var resultado = document.getElementById("resultado");
var limit = 250;
resultado.textContent = 0 + "/" + limit;

descripcion.addEventListener("input", function(){
    var textLength = descripcion.value.length;

    resultado.textContent = textLength + "/" + limit;

    if(textLength > limit){
        descripcion.style.borderColor = "#FF2851";
        resultado.style.color = "FF2851";
    }
});
