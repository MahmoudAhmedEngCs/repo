let y=  document.querySelector('#button');
let rq
let r = parseInt(Math.random() * 5);
let z1=`<h2 class="text-center my-5"> بحبك </h2>
<h2 class="text-center ">  </h2>`
let z2=`<h2 class="text-center my-5"> اغلي ما ليا </h2>
<h2 class="text-center ">  </h2>`
let z3=`<h2 class="text-center my-5"> نور عيني </h2>
<h2 class="text-center "> 
 </h2>`
let z4=`<h2 class="text-center my-5"> بحبك اوي
" </h2>
<h2 class="text-center ">  </h2>`
let z5=`<h2 class="text-center my-5"> تتجوزيني </h2>
<h2 class="text-center ">  </h2>`
y.addEventListener('click',function(){
 
    
    rand()
    console.log(rq)
if (r==0&& r!=rq){
    document.querySelector('#x').innerHTML=z1;
     rq=r
}
else if (r==1&& r!=rq){
    document.querySelector('#x').innerHTML=z2;
     rq=r
}
else if (r==2&& r!=rq){
    document.querySelector('#x').innerHTML=z3;
     rq=r
}
else if (r==3&& r!=rq){
    document.querySelector('#x').innerHTML=z4;
     rq=r
}
else if (r==4&& r!=rq){
    document.querySelector('#x').innerHTML=z5;
     rq=r
}

})
function rand() {
    r = parseInt(Math.random() * 5);
    if (r==rq){
        rand()
    }
}
