// Adiciona e tira o produto
// Adiciona e tira o produto
function incrementValue(id)
{
    console.log(id)
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<100){
        value++;
            document.getElementById(id).value = value;
    }
}
function decrementValue(id)
{ console.log("qualquer coisa")
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById(id).value = value;
    }

}