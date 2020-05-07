const route = (path, handle, res, reviewData) => {
    console.log('Route request received for '+path)
    if(typeof handle[path] === 'function') {
        handle[path](res, reviewData)
    }
    else {
        console.log("No such handler for this route request")
    }
}

module.exports.route = route