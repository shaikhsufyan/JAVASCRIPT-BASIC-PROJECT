 
// button.addEventListener("click" ,AddTodo );
 
function AddTodo(){ 
    let button= document.getElementById("btn");
var AddTask=document.querySelector(" .add"); 
let input= document.querySelector("#inputs");

if(input.value==" "){
    alert("Please Enter Task")
}else{
   let li= document.createElement("li");
   li.textContent= input.value;
   AddTask.appendChild(li);
   console.log(li);

//    create button

   let clear=document.createElement("a");
   clear.textContent="clear";
   clear.class="rm"
    li.appendChild(clear);
    console.log(clear);
 

    let box=document.querySelector(".task");
    let pos=box.firstElementChild;

//     let task=document.querySelector("ul");
// let arr=[task];
// console.log(arr[0]);
// console.log(arr[1]);


//  Input Empty

   input.value=" ";


}
     

}

let clear=document.querySelector("ul ") ;

clear.addEventListener("click", function(e){
  

    
    let box= document.querySelector(".task");
     
    console.log(e.target);
    let li=e.target.parentNode;
     box.remove(li);

   

   
})