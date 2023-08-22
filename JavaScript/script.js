const mario = document.querySelector('.mario')
const obstaculo = document.querySelector('.Img-Obstaculo')

const pular=()=>{
mario.classList.add('pular')

setTimeout( ()=>{
    mario.classList.remove('pular')
}, 500)

}

const lopp= setInterval(()=>{

    const Obsta = obstaculo.offsetLeft;
    const marioButton = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioButton)

    if(Obsta<= 65 && Obsta>0&& marioButton<80){
        obstaculo.style.animation='none';
        obstaculo.style.left=`${Obsta}px`;

         mario.style.animation='none';
        mario.style.bottom=`${marioButton}px`
    }
},10)

document.addEventListener('keydown', pular)