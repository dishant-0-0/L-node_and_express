const { readFile, writeFile } = require('fs')

readFile('./T-demo-folder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./T-demo-folder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './T-demo-folder/result-async.txt',
            `Here is the Result of Async : ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
})