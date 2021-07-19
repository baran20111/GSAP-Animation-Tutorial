const navButton=document.querySelector('.nav-button')
const navOpen=document.querySelector('.nav-open')


const tl=new TimelineLite({paused:true,reversed:true});


tl.to('.cover',1,
{
    width:"60%",
    ease:Power2.easeOut
}
)
.to('nav',1,
{
height:"100%",
ease:Power2.easeOut
}
,'-=.5'
)


.fromTo('.nav-open',.5,
{
    opacity:0,
    x:50,
    ease:Power2.easeOut
},
{
opacity:1,
x:0,
onComplete:function(){
    navOpen.getElementsByClassName.pointerEvents="auto";
    console.log('done')
}
}
)
navButton.addEventListener('click',()=>{
  toggleTween(tl)
});

function toggleTween(tween){
    tween.reversed()?tween.play():tween.reverse();
}