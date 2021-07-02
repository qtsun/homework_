const http = require('http')

http.createServer((request, response) => {
    let body = []
    request.on('error', (err) => {
        console.error(err)
    }).on('data', (chunk) => {
        // let b = Buffer(chunk)
        // let u = new Uint8Array(b.length)
        // for(let i = 0; i < b.length; i++){
        //     u[i] = b[i]
        // }
        // body.push(u)
        body.push(chunk.toString())
    }).on('end', ()=>{
        body = body.join("")
        // body = Buffer.concat(body).toString()
        console.log('body:', body)
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(' Hello World\n')
    })
}).listen(8088)

console.log('server started')