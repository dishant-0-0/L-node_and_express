const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Request event');
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server is listening on Port 5000');
})