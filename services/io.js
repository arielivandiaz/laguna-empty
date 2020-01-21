let api = require('./api');


var SERVERS = 10;

module.exports = (server) => {

    var io = require('socket.io')(server, {

        pingTimeout: 50,
        cookie: true
    });

    var socketApi = {};

    socketApi.io = io;

    io.on('connection', function (socket) {

        console.log('%s sockets is connected', Object.keys(io.sockets.sockets).length);
        console.log('A user connected id: ', socket.id);
   

        socket.on('hi', (message) => {
            console.log('Message is received :', message);
            io.to(socket.id).emit('message', { message: message });
        });

        /***************************************************** */
        socket.on('check', (message) => {
            console.log('Message is received :', message);
            console.log('Message from  :', socket.id);
            for (i = 0; i < SERVERS; i++) {
                api.checkService(i).then((item) => {
                    if(item== 4)
                    io.to(socket.id).emit('message', { message: 'fail' });
                    else
                    io.to(socket.id).emit('message', { message: 'ok' });
                }).catch((err) => {
                    console.log(err);
                });
            }
        });

        socket.on('disconnect', (reason) => {
            console.log("user disconnect");
        });
    });

    socketApi.sendNotification = function () {
        io.to(socket.id).emit('hello', { msg: 'Hello World!' });
        console.log("sended");
    }

    return socketApi;

}; 