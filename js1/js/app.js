let bgcolors=['red','black','brown','purple','yellow','blue']
let blogContent=[
    'xeber01',
    'xeber02',
    'xeber03',
    'xeber04',
    'xeber05',
    'xeber06'
]
// let blogItems=document.getElementsByClassName('blog-item')
let blogItems=document.querySelectorAll('.blog-item')

for(let i=0;i<blogItems.length;i++){
    blogItems[i].style.background=bgcolors[i]
    blogItems[i].innerHTML=blogContent[i]
    blogItems[i].setAttribute=('name,order')
}



