const route = (path, handle) => {
    console.log('Route request received for '+path)
    if(typeof handle[path] === 'function') {
        handle[path]()
    }
    else {
        console.log("No such handler for this route request")
    }
}

module.exports.route = route