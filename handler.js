const fs = require('fs')
const querystring = require('querystring')

const home = (res) => {
    console.log("Executing Home Handler")
    fs.readFile('index.html', (err, content) => {
        if(err) {
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end("404! Page not Found")
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content, 'utf8')
        }
    })
}
const review = (res, reviewData) => {
    console.log("Executing Review Handler")
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.write(querystring.parse(reviewData).text)
    res.end()
}

module.exports = {
    home: home,
    review: review
}