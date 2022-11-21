let cursor=document.querySelector('.cursor');
const holes=[...document.querySelectorAll('.hole')];
let scoreEl=document.querySelector('.score span');
let score=0;

function run(){
    let imgsrc=['mole.png','mole-r.png'];
    const i=Math.floor(Math.random()*holes.length);
    const j=Math.floor(Math.random()* imgsrc.length);
    let timer=null;
    const hole=holes[i];
    const img=document.createElement('img');
    img.classList.add('mole');
    img.src=imgsrc[j];
    hole.appendChild(img);
    img.addEventListener('click',()=>{
        if(j==0){
            score +=10;
            scoreEl.textContent=score;
            img.src='mole-w.png';
            clearTimeout(timer);
            setTimeout(()=>{
               hole.removeChild(img);
               run();
            },500)
        }
        else{
            img.src='mole-rw.png';
           
           
            clearTimeout(timer);
            setTimeout(()=>{
               hole.removeChild(img);
               alert('Game over your score is '+ score +' click ok to play again');
               location.reload();
               run();
            },500)
            

        }

    })
    timer=setTimeout(()=>{
        hole.removeChild(img);
        run();
    },1500)

}
  
run();
window.addEventListener('mousemove',e=> {
    cursor.style.top=e.pageY+'px';
    cursor.style.left=e.pageX+'px'
})
window.addEventListener('mousedown',()=>{
    cursor.classList.add('active');
})
window.addEventListener('mouseup',()=>{
    cursor.classList.remove('active');
})