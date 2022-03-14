
  let prodImg = document.getElementById('product-image')
  let classImg = document.getElementsByClassName('col-3')
  
  classImg[0].onclick = function(){
      prodImg.src = 'images/image-product-1.jpg'
  }
  
  classImg[1].onclick = function(){
      prodImg.src = 'images/image-product-2.jpg'
  }
  classImg[2].addEventListener('click', function(){
      prodImg.src = 'images/image-product-3.jpg'
  })
  classImg[3].addEventListener('click', function(){
    prodImg.src = 'images/image-product-4.jpg'
})

function check(){
    if(document.getElementById('myNum').innerText == "0"){
        document.getElementById('cart-row').innerText = "Your cart is empty";
    document.getElementById('cart-row').style.margin = "auto";
    // document.getElementById('check-btn').style.display = 'none';
    }
}

function increase() {
    let nu = document.getElementById('myNum').innerText;
    let num = parseInt(nu)
    let numString = (num + 1).toString();
    document.getElementById('myNum').innerHTML = numString;
    
}

function decrease() {
    let nu = document.getElementById('myNum').innerText;
    let num = parseInt(nu)
    if(num >0){
    let numString = (num - 1).toString();
    document.getElementById('myNum').innerHTML = numString;
    }
    
}
function addItem() {
    let nu = document.getElementById('myNum').innerText
    let vd = document.getElementById('item-num').innerText
    document.getElementById('cartNum').innerHTML = nu;
    document.getElementById('item-num').innerText = nu
    vd = nu
    document.getElementById('product-cost').innerText ="$" + eval(125*parseInt(vd)).toString()
    document.getElementById('product-cost').style.color = 'black'


}

function showInfo() {
    let su = document.getElementById('cart-info')
    su.classList.toggle('show')
    // check()
}

function menuToggle() {
    let x = document.getElementById('myTopnav')
    x.style.display = 'block'
}

function cancel(){
    let x = document.getElementById('myTopnav')
    x.style.display = 'none'
}

let myImageArray = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]
let index = 0
let currentIndex = 0
let upperLimit = 3
let lowerLimit = 0
function previous() {
    if(currentIndex == 0){
        prodImg.src = myImageArray[currentIndex]
    }
    else if(currentIndex > lowerLimit){
        prodImg.src = myImageArray[currentIndex]
        currentIndex--
    }
    
}
function next(){
    if(currentIndex == 0){
        prodImg.src = myImageArray[currentIndex]
    }
    else if(currentIndex <= upperLimit && currentIndex > 0){
        prodImg.src = myImageArray[currentIndex]
    }
    if(currentIndex != upperLimit){
    currentIndex++
    }
}

// function menu() {
//   let new_div = document.createElement('div')
//   let body = document.querySelector('body')
//   new_div.style.zIndex = "1"
//   body.appendChild(new_div)
//   let list_group = document.getElementById('list-group')
//   list_group.style.display = "block"
  
//   new_div.style.backgroundColor = "blue"

//   new_div.style.height = "100%"
//   new_div.style.height = "50%"
//   new_div.appendChild(list_group)
  

// }
// Open the Modal
// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }
  
//   // Close the Modal
//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   // Next/previous controls
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   // Thumbnail image controls
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }



