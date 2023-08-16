const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const socket = require('socket.io')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })
)

app.use(express.static('public'))



const server = app.listen(8000,()=>{
    console.log("Listening to port number 8000.");
})
// console.log(server);

//socket setup

let io = socket(server);


io.on('connection',function(socket){
    console.log("connected");
    console.log(socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
})

