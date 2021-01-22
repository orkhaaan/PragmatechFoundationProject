let btn=document.querySelector('.btn')
let fun=document.querySelector('.fun')

leftPos=15
btn.addEventListener('click',function(){
    fun.style.left=leftPos+'px';
    leftPos+=20

})