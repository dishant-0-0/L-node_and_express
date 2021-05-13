const {readFile}=require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                console.log(err);
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// getText('./T-demo-folder/first.txt')
//     .then((result)=>console.log((result))
//     .catch((err)=>console.log(err)))

const start = async()=>{
    try{
        const first = await getText('./T-demo-folder/first.txt')
        const second = await getText('./T-demo-folder/second.txt')
        console.log(first,second);
    }catch(err){
        console.log(err);
    }
}

start()