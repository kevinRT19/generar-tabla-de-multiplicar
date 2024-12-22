
let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let tabla = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');
    for(let i = 1; i <= 10 ;i++){
        resultado.innerHTML += `${tabla} x ${i} = ${tabla * i} <br>`;
    }
    //funcion para limpiar el input
    
})
function limpiar(){
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}