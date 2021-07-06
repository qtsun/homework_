const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request received')
    console.log(req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('X-Foo', 'bar')
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(
`<html maaa=a >
<head>
    <style>
body div #myid{
    width:100px;
    background-color: #ff5000;
}
body div img{
    width:30px;
    background-color: #ff1111
}
    </style>
</head>
<body>
    <div>
        <img id="myid" />
        <img />
    </div>
</body>
</html>`)
})
server.listen(8088)
// http.createServer((request, response) => {
//     let body = []
//     request.on('error', (err) => {
//         console.error(err)
//     }).on('data', (chunk) => {
//         // let b = Buffer(chunk)
//         // let u = new Uint8Array(b.length)
//         // for(let i = 0; i < b.length; i++){
//         //     u[i] = b[i]
//         // }
//         // body.push(u)
//         body.push(chunk.toString())
//     }).on('end', ()=>{
//         body = body.join("")
//         // body = Buffer.concat(body).toString()
//         console.log('body:', body)
//         response.writeHead(200, {'Content-Type': 'text/html'})
//         response.end(' Hello World\n')
//     })
// }).listen(8088)

// console.log('server started')