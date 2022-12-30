import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const images = document.querySelectorAll('.drags img')

images.forEach((img) => {
img.addEventListener('dragstart'= (ev)=> {
    ev.dataTransfer.setData('text',ev.target.src); 
})
    
})

const mainImg = document.querySelectorAll('header img');

mainImg.addEventListener('drop',(ev)=>{
    ev.preventDefault();
    const targetImg = document.getElementById(ev.target.id);
    const targetImgSrc=targetImg.src ;
    
    const sourceImg = document.getElementById(ev.dataTransfer.getData('text'));
    const sourceImgSrc=targetImg.src ;

    targetImg.src=sourceImgSrc;
    sourceImg.src=targetImgSrc;
   
    


});
mainImg.addEventListener('dragover',(ev)=>{
    ev.preventDefault();

})

