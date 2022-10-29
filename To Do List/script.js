let input=document.getElementById("inputs");
var AddBtn= document.getElementById("add") ;
// let Task=document.getElementById("task");
 
AddBtn.addEventListener("click" ,getTask);
function getTask(){
    
    if(input.value==" "){
         alert("Please Enter Task");

    }else{
        document.querySelector(".task").innerHTML 
        +=`<div class="todo">
         <span>
          
         <input type="text" id="tk" value="${input.value}">
         
         </span>
         <button class="delete" value=" " >Remove</button>
        </div>`;

                                      
    }
      
    var Remove =document.querySelector(".delete");
     
      
     for(var i=0; i<Remove.length; i++){
    Remove[i].onclick = function(){
     this.remove();
        }
}
 

// let element=document.createElement("p");
//     element.textContent=.value;
//     element.addEventListener("click" , function Remove(){
//        element.value=""
//     })
//     document.querySelector('div.task').appendChild(element);
//     document.getElementById("inputs").value=" "
//     console.log(element);

    // button creatin
    
    // let button=document.createElement("button");
    // button.textContent="Remove";
    // document.querySelector('div.task').appendChild(button);

    // console.log(button);
    
    
}


