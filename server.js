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
#container {
    width:500px;
    height:300px;
    display:flex;
    background-color:rgb(255,255,255);
}
#container #myid {
    width:200px;
    height:100px;
    background-color:rgb(255,0,0);
}
#container .c1 {
    flex:1;
    background-color:rgb(0,255,0);
}
    </style>
</head>
<body>
    <div id="container">
        <div id="myid"></div>
        <div class="c1"></div>
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