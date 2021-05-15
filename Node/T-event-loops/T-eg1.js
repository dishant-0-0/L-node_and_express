const { readFile } = require('fs')

console.log('Started the first task');
// CHECK FILE PATH!
readFile('../T-demo-folder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed the first task!');
})
console.log('Starting the next task!');