//setup socket
let socket = io.connect("http://localhost:8000/")



const output = document.getElementById('output');
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const button = document.getElementById('button');
const feedback = document.getElementById('feedback')

button.addEventListener('click',()=>{
    console.log("hello");
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})

message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})

socket.on('typing',(data)=>{
    feedback.innerHTML= '<p><em>' + data + 'is typing a message...</em></p>'
    
})

socket.on('chat',(data)=>{
    feedback.innerHTM="";
    message.value=""
    handle.value=""
    output.innerHTML+='<p><strong>' + data.handle + ': </strong>'+data.message+'</p>'

})