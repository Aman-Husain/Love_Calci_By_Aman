var name1=document.getElementById("first");
var name2=document.getElementById("second");
var answer=document.getElementById("ans");
// var Button=document.getElementById("but");

if(name1 == ""  && name2 == "")
{
document.getElementById("but").addEventListener("click", function(event){
    event.preventDefault()
  });
}

function Submit(){
var number = Math.random()*100;
number = Math.floor(number) + 1;
answer.value=number + "%";

}