const { readFile, writeFile } = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 console.log(err);
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./T-demo-folder/first.txt')
//     .then((result)=>console.log((result))
//     .catch((err)=>console.log(err)))

const start = async () => {
    try {
        const first = await readFile('./T-demo-folder/first.txt', 'utf8')
        const second = await readFile('./T-demo-folder/second.txt', 'utf8')
        await writeFile(
            `./T-demo-folder/result-mind-grenade.txt`,
            `This is Awesome lesser version : ${first} ${second}`
        )
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}

start()