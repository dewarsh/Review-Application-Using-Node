const http = require('http')

const startServer = (route) => {
    const onRequest = (req, res) => {
        const path = req.url
        route(path)
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.write("Hello from our application")
        res.end()
    }
    
    http.createServer(onRequest).listen(8888, () => console.log("Server Running..."))
}

module.exports.startServer = startServer