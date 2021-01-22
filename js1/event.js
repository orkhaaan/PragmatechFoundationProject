let btn=document.querySelector('.btn')
let row=document.querySelector('.row')
a=1;
btn.addEventListener('click',function(){
    let col=document.createElement('div')
        col.className='col-4'

        let blogitem=document.createElement('div')
        blogitem.className='blog-item'
        blogitem.innerHTML=++a

        col.appendChild(blogitem)
        row.appendChild(col)

})