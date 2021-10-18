const catalog = document.querySelector('.catalog'),
catalogModal = document.querySelector('.catalog_modal'),
menu = document.querySelector('.fa-bars'),
closeBtn = document.querySelector('.fa-times'),
inputBtn = document.querySelector('.input_btn'),
inputModal = document.querySelector('.input_btn_modals'),
body = document.querySelector('body'),
header = document.querySelector('header');

catalog.addEventListener('click' , ()=>{
if(catalogModal.style.display == "block"||menu.style.display == "none"||closeBtn.style.display == "block"){
    catalogModal.style.display = "none"
    menu.style.display = "block"
    closeBtn.style.display = "none"
    header.style.position = "relative"
}else{
    catalogModal.style.display = "block"
    menu.style.display = "none"
    closeBtn.style.display = "block"
} 

})
inputBtn.addEventListener('click', () =>{
if(inputModal.style.display == 'block'){
    inputModal.style.display = 'none'
    header.style.position = "relative"
}else{
    inputModal.style.display = 'block'
}

})
