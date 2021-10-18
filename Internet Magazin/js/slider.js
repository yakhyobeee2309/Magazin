const slides = document.querySelectorAll('.mySlides'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    slideWrapper = document.querySelector('.slideshow-container'),
    width = window.getComputedStyle(slideWrapper).width,
    slidesField = document.querySelector('.offer__slider-inner'),
    dots = document.querySelectorAll('.dot');

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'
    slideWrapper.style.overflow = 'hidden'

    let slideIndex = 1,
        offset = 0;

    slides.forEach(slide =>{
        slide.style.width = width;
    })
    next.addEventListener('click', ()=>{
        if(offset == (+width.slice(0, width.length - 2) * (slides.length - 1))){
            offset = 0
        }else{
            offset +=  +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    })
    prev.addEventListener('click', ()=>{
        if(offset == 0){
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        }else{
            offset -=  +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    })

let product = document.querySelectorAll('.product'),
    left__Next = document.querySelector('.fa-chevron-left'),
    right__prev = document.querySelector('.fa-chevron-right'),
    product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25;
let maxMove = 28;


let mobile_view = window.matchMedia('(max-width:786px)');
if(mobile_view.matches){
    movePer = 50;
    maxMove = 200;
}
let right_mover = () =>{
    l = l + movePer;
    if(product == 1){
        l = 0
    }
    for(const i of product){
        if(l > maxMove){
            l = l - movePer;
        }
        i.style.left = '-'  + l + '%';
    }
}
let left_mover = ()=>{
    l = l -movePer;
    if(l <= 0){ l = 0;}
    for(const i of product){
        if(product_page > 1){
            i.style.left = '-'  + l + '%';
        } 
    }
}
right__prev.onclick = ()=>{right_mover();}
left__Next.onclick = ()=>{left_mover();}

