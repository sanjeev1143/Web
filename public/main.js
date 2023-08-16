//setup socket
let socket = io.connect("http://localhost:8000/")



const output = document.getElementById('output');
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const button = document.getElementById('button');


button.addEventListener('click',()=>{
    console.log("hello");
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})


socket.on('chat',(data)=>{
    output.innerHTML+='<p><strong>' + data.handle + ': </strong>'+data.message+'</p>'

})