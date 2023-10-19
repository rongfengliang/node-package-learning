var log = require('npmlog')

log.enableColor()


const user = {
    name:"dalong",
    age:333,
    data:Date.now()
}

log.info('myapp', 'this is a test',user)