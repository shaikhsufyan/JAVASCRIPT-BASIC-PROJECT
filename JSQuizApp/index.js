

let quizData=[
    {
        Q: "Q : Which built-in method sorts the elements of an array ?",
        a: "changeOrder(order)",
        b: "order()",
        c: "sort()",
        d: "None of the above"

    },
    {
        Q: "Q : Javascript is Which type Language ?",
        a: "Server Side Language",
        b: "Client Side Language",
        c: "Server Side & Client Side Language",
        d: "None of these"
    },
    {
        Q: "Q : Which of the following is the correct syntax to redirect a url using JavaScript?",
        a: "document.location='http://www.newlocation.com';",
        b: "browser.location='http://www.newlocation.com';",
        c: "navigator.location='http://www.newlocation.com';",
        d: "window.location='http://www.newlocation.com';"
    },
    {
        Q: "Q :  Which of the following type of variable takes precedence over other if names are same?",
        a: "global variable",
        b: "local variable",
        c: "Both of the above.",
        d: "None of the above."
    },
    {
        Q: "Q : Which of the following function of String object creates an HTML hypertext link that requests another URL ?",
        a: "link()",
        b: "sub()",
        c: "sup()",
        d: "small()"
    }

]


let question =document.getElementById("question");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");
let option4=document.getElementById("option4");
 
 
 


let quizNumber=0;
function load(){
    question.innerHTML=quizData[quizNumber].Q;
   let optionA=  option1.innerHTML=quizData[quizNumber].a;
   let optionB=  option2.innerHTML=quizData[quizNumber].b;
   let optionC=  option3.innerHTML=quizData[quizNumber].c;
   let optionD=  option4.innerHTML=quizData[quizNumber].d;

    
let answer1=document.querySelector(".answer1").onclick=function(){
    console.log(optionA);
     
} 
    
let answer2=document.querySelector(".answer2").onclick = function(){
    console.log(optionB);
    
}


let answer3=document.querySelector(".answer3").onclick = function(){
    console.log(optionC);
}

let answer4=document.querySelector(".answer4").onclick=function(){
    console.log(optionD);
}
  
}
  load();
  
 
  
    

 
 