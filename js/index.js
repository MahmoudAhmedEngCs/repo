let y=  document.querySelector('#button');
let rq
let r = parseInt(Math.random() * 5);
let z1=`<h2 class="text-center my-5"> "It's not what happens to you, but how you react to it that matters." </h2>
<h2 class="text-center "> --Epictetus </h2>`
let z2=`<h2 class="text-center my-5"> "Be yourself; everyone else is already taken.
" </h2>
<h2 class="text-center "> ― Oscar Wilde </h2>`
let z3=`<h2 class="text-center my-5"> "So many books, so little time." </h2>
<h2 class="text-center "> ― Frank Zappa
 </h2>`
let z4=`<h2 class="text-center my-5"> "A room without books is like a body without a soul.”
― William W. Purkey" </h2>
<h2 class="text-center "> -mahmoud ahmed </h2>`
let z5=`<h2 class="text-center my-5"> "You only live once, but if you do it right, once is enough." </h2>
<h2 class="text-center "> ― Mae West </h2>`
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
