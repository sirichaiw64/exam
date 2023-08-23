let express = require('express')
const app = express()

app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to Sarawut')
})

app.get('/hello/:name', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

let port = 8080
app.listen(port, function(){
    console.log('server runing on ' + port)
})