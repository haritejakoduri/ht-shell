#!/usr/bin/env node
const fs=require("fs")
const readline=require('readline-sync');
const CMD =require("./class/CMD")
let contents=fs.readFileSync(__dirname+"/.bin/command.json")
let json=JSON.parse(contents)
let loop=true;
console.log(__dirname);
function r(){
var term1 = readline.question(">");
typeof(term1)
let c=new CMD();
try {
   if(term1==='help'){
      console.log(json)
   }
   else if(term1==="exit") 
   {
      loop=false
   }
   else if(term1!=''&& term1.split(' ').length!=0 &&  json[`${term1.split(' ')[0]}`].hasArguments && json[`${term1.split(' ')[0]}`].exe!=undefined){
      term1=term1.split(' ')
      let cmd=term1[0];
      term1.shift()
      term1=term1.join(' ')
      c.command(`${json[`${cmd}`].exe} ${term1}`)
   }
   else if(term1!='' && json[`${term1}`].exe!=undefined){     
      c.command(`${json[`${term1}`].exe}`)
   }
} catch (error) {
   try{c.command(term1)}
   catch(error){
      console.log(term1+" command not found");
   }
}
return;
}
while(loop){
r()
}