// var i=0;
// var images=['img/1.jpg','img/2.jpg']

// var duration= 2000;

// function slideImg(){
//     document.slide.src=images[i];

//     if(i<images.length -1){
//         i++
//     }
//     else{
//         i=0 ;
//     }
//     setTimeout(" slideImg()", duration);
// }
// window.onload=slideImg;

// var slider_img=document.querySelector('_slider-img');
// var images=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/4.jpg','images/5.jpg'];
// var i=0;


// var slider_img = document.querySelector('.slider-img');
// var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
// var i = 0;

// function prev(){
// 	if(i <= 0) i = images.length;	
// 	i--;
// 	return setImg();			 
// }

// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.setAttribute('src', "images/"+images[i]);

// } 


function AccordionFunc(elem){
	let nextElement=elem.nextElementSibling;
	nextElement.className='acc-item-body active'

}
bodyStatus=true;
function lampFunc(){
	
	if(bodyStatus){
		document.body.style.background='yellow'
		bodyStatus=false
	}
	else{
		document.body.style.background='white'
		bodyStatus=true
	}
}