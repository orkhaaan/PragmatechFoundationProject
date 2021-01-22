// let section=document.createElement('section')
// section.setAttribute('id','blog')
// document.body.appendChild(section)

let container=document.createElement('div')
container.className='container'







document.querySelector('#blog').appendChild(container)


for(let rowCount=0;rowCount<10;rowCount++){
    let row=document.createElement('div')
    row.className='row'
    for(let colCount=0;colCount<3;colCount++){
        let col=document.createElement('div')
        col.className='col-4'

        let blogitem=document.createElement('div')
        blogitem.className='blog-item'

        col.appendChild(blogitem)
        row.appendChild(col)
    }
    container.appendChild(row)
}