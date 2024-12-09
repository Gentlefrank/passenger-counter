const welcomeEl= document.getElementById('welcome-el');
const name="Franklin Nmaju" 
const greeting= "Welcome to the month of Christmas"

 

let peopleCount= document.getElementById('counting');
let count= 0;
let saveCount=0;
 let saveEntries= "";
let previousEntries= document.getElementById('entries');

function increment(){
 
   count+=1;
   peopleCount.innerText=count;
}

function save(){
  saveCount++
   peopleCount.innerText=0;
  if (saveCount===1){
     saveEntries= `Previous entries: ${count}`
       previousEntries.innerText= saveEntries
    count=0;
  }
  else{
    saveEntries+= ` - ${count}`
     previousEntries.innerText= saveEntries
     count=0;
  }
 
}
function reset(){
    saveCount=0;
    saveEntries= "Previous entries:";
    previousEntries.innerText= saveEntries;
    count=0;
}