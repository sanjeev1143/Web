const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const socket = require('socket.io')
const cors = require('cors')


var corsOptions = {
    origin: '',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors({
  origin: "http://127.0.0.1:5500/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })
)

app.use(express.static('public'))



const server = app.listen(8000,()=>{
    console.log("Listening to port number 8000.");
})
// console.log(server);

//socket setup


const io = socket(server, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });




io.on('connection',function(socket){
    console.log("connected");
    console.log(socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
    socket.on('typing',function(data){
      socket.broadcast.emit('typing',data);
    })
})

