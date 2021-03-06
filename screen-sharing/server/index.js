const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/view', (request, response) => {
  response.sendFile(path.join(__dirname, 'display.html'));
});

io.on('connection', socket => {
  socket.on('join-message', roomId => {
    socket.join(roomId);
    console.log(`User join in a room : ${roomId}`);
  });

  socket.on('screen-data', data => {
    const { room, image } = JSON.parse(data);
    socket.broadcast.to(room).emit('screen-data', image);
  });
});

http.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
