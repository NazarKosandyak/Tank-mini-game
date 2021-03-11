const FIELD = document.querySelector('.field')
const GET_TANK = document.querySelector('.tank')
const GET_BULLET =  document.querySelector('.bullet')
const GET_HIDE =  document.querySelector('.hide')


window.addEventListener('keydown', function (e) {

    const top_field = FIELD.offsetTop
    const left_field = FIELD.offsetLeft
    const OFFSET_TOP = GET_TANK.offsetTop
    const OFFSET_LEFT = GET_TANK.offsetLeft
    if (e.code === 'ArrowUp') {
              
        GET_TANK.style.transform = "rotate(90deg)"

        if (OFFSET_TOP > top_field - 10) {
            GET_TANK.style.top = OFFSET_TOP - 10 + "px"
        }
    }
    if (e.code === 'ArrowDown') {
        const OFFSET_TOP = GET_TANK.offsetTop
        GET_TANK.style.transform = "rotate(270deg)"

        if (OFFSET_TOP < 450) {
            GET_TANK.style.top = OFFSET_TOP + 10 + "px"
        }
        
        if(OFFSET_TOP == 450 && OFFSET_LEFT > 1200){

        }
    }

    if (e.code === 'ArrowLeft') {
        const OFFSET_LEFT = GET_TANK.offsetLeft
        GET_TANK.style.transform = "rotate(0deg)"
        if(OFFSET_LEFT == 1200 && OFFSET_TOP < 430){
            
        }
       else if (OFFSET_LEFT > left_field - 40) {
            GET_TANK.style.left = OFFSET_LEFT - 10 + "px"
        }
        if(OFFSET_LEFT > 1200){
            GET_TANK.style.left = OFFSET_LEFT - 10 + "px"
        }
            
    }

    if (e.code === 'ArrowRight') {
        
        GET_TANK.style.transform = "rotate(180deg)"

        if(OFFSET_LEFT ==1140 && OFFSET_TOP <= 450){
            GET_TANK.style.left = OFFSET_LEFT + 10 + "px"
        }
        if(OFFSET_LEFT > 1150){
            GET_TANK.style.left = OFFSET_LEFT + 10 + "px"
            if(OFFSET_LEFT < window.innerWidth){
                GET_TANK.style.left = OFFSET_LEFT + 10 + "px"
            }
        }
        if(OFFSET_LEFT  > 1140 && OFFSET_TOP > 430){
            GET_TANK.style.left = OFFSET_LEFT + 10 + "px"
        }
        else if (OFFSET_LEFT < window.innerWidth - 400) {
            GET_TANK.style.left = OFFSET_LEFT + 10 + "px"

        }
        

    }
       
    

})
