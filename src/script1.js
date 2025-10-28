/* Game 1 */

let active_inputs=document.querySelectorAll('.active_input');
    for(let i=0; i < active_inputs.length; i++){
        active_inputs[i].addEventListener('input', addResult);
    }

function addResult(event){
    let active_input=event.target;
    let active_input_parent=active_input.parentElement;
    let number=active_input_parent.children[4].value;
    if(number === active_input.placeholder){
         setTimeout(() => {
                active_input.style.color="black"; 
                active_input.readOnly=true;
                alert("Corect");

         },1200);
         
    } 
    else{
        active_input.readOnly=false;
        setTimeout(() => {
                active_input.style.color="red"; 
                active_input.readOnly=true;
         },1200);
         

    }
}