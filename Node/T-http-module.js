const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('WELCOME TO OUR HOME PAGE!!')
    }
    if(req.url==='/about'){
        res.end('Nothing About Me! But the browser History lol')
    }
    res.end(`
    <h1>OOPS!!</h1>
    <p>Cant Find the page</p>
    <a href="/">Back to Home Page</a>
    `)
})

server.listen(5000)