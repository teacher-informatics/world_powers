/* Game 1 */

let active_inputs=document.querySelectorAll('.active_input');
    for(let i=0; i < active_inputs.length; i++){
        active_inputs[i].addEventListener('input', addResult);
    }

function addResult(event){
    let active_input=event.target;
    let active_input_parent=active_input.parentElement;
    let number=active_input_parent.children[1].value;
    if(number === active_input.placeholder){
         setTimeout(() => {
                active_input.style.color="black"; 
                active_input.readOnly=true;
                
         },2200);
         
        setTimeout(() => {
            movingBalloon();
            showMark(); 
         }, 3000);
         
       
    } 
    else{
        active_input.readOnly=false;
        setTimeout(() => {
                active_input.style.color="red"; 
                active_input.readOnly=true;

         },2200);
         
    
    }
}


function showMark(){
    let mark=document.querySelector('.mark');
    let pupil_mark=Number(mark.innerHTML);
    let suma = pupil_mark+1;
    mark.innerHTML = suma;
    console.log(mark);
}


function movingBalloon() {
  let id = null;
  const elem = document.getElementById("balloon");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    elem.style.display="block";
    if (pos == 650) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
    }

    setTimeout(() => {
    elem.style.display="none";
    elem.style.top="10%";
    }, 7000)
  }
}