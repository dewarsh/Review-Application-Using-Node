const http = require('http')

const startServer = () => {
    const onRequest = (req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain"})
        res.write("Hello from our application")
        res.end()
    }
    
    http.createServer(onRequest).listen(8888, () => console.log("Server Running..."))
}

module.exports.startServer = startServer