const http = require('http')

const startServer = (route, handle) => {
    const onRequest = (req, res) => {
        const path = req.url
        let reviewData = ""
        req.on("data", (chunk) => {
            reviewData += chunk
        })
        req.on("end", () => {
            route(path, handle, res, reviewData)
        })
    }
    
    http.createServer(onRequest).listen(8888, () => console.log("Server Running..."))
}

module.exports.startServer = startServer