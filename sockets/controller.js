const socketController = (socket_client) => {
    console.log(`Client connected ${socket_client.id}`)

    socket_client.on('disconnect', ()=>{
        console.log('client disconnected');
    });

    socket_client.on('client-message',(payload, callback)=>{
        console.log(`Message received : ${JSON.stringify(payload)}`);
        const id = 12312132312123
        callback(id);
        socket_client.broadcast.emit('server-message', JSON.stringify(payload));
    });

}

module.exports = {socketController}
