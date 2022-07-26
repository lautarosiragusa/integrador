document.addEventListener('keyup',e=>{



if(e.target.matches("#search")){

 if(e.key==="Escape")e.target.value=""

document.querySelectorAll(".articulo").forEach(producto=>{

producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
?producto.classList.remove("filtro")
:producto.classList.add("filtro")
})
}

})






let allContainerCart=document.querySelector('.cartas');
let buyThings=[];
let containerBuyCart=document.querySelector('.carrito')

loadEventListener();
function loadEventListener(){
    allContainerCart.addEventListener('click',addProduct);


};


function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('buy')){
    const selectProduct=e.target.parentElement;
    readTheContent(selectProduct);
}
}





function readTheContent(product){
    const infoProduct={
title:product.querySelector('.nombreProducto').textContent,
price:product.querySelector('.price').textContent,
id:product.querySelector('button').getAttribute('id'),
amount:1   }  

buyThings=[...buyThings,infoProduct]
loadHtml();
console.log(infoProduct);

}



function loadHtml(){
    clearHtml();
    buyThings.forEach(product=>{
        const {title,price,amount,id}=product;
        const row=document.createElement('div');
        row.classList.add('.contentBox');
        row.innerHTML=`
        <h3 >PRODUCTO:${title}</h3>
        <h2  >PRECIO:${price}</h2>
        <h4>STOCK:${amount}</h4>
        <span id="3">ID:${id}</span>
        `

containerBuyCart.appendChild(row);

    })
}



function clearHtml(){
containerBuyCart.innerHTML='';

}

