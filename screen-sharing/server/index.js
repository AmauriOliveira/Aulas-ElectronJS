const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/view', (request, response) => {
  response.sendFile(path.join(__dirname, 'display.html'));
});

io.on('connection',(socket)=>{
  
})

app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
