



boton.addEventListener('click', ()=>{
let  nombre=document.getElementById('nombre').value;
let  mail=document.getElementById('mail').value;
let  telefono=document.getElementById('telefono').value;
let boton=document.getElementById('boton');

localStorage.setItem('usuario',nombre);
localStorage.setItem('mail',mail);
localStorage.setItem('telefono',telefono);

Swal.fire({
    title:"TU REGISTRO FUE EXITOSO"})


})


