// labels status
const lblOnline=document.querySelector('#lbl-online');
const lblOffline=document.querySelector('#lbl-offline');
//

const txtMessage = document.querySelector('#txt-message');
const btnPrimary = document.querySelector('#btn-primary');

// Documentation https://socket.io/docs/v4/index.html
// this method is loaded from ./socket.io/socket.io.js
const socket_client = io();
console.log(`Socket Client`);

// listen events or changes like a event listener
socket_client.on('connect', ()=>{
    lblOnline.style.display= '';
    lblOffline.style.display= 'none';
});

socket_client.on('server-message',(payload)=>{

    console.log(`received message from server: ${payload}`);
});

socket_client.on('disconnect', ()=>{
    lblOnline.style.display= 'none';
    lblOffline.style.display= '';
});

btnPrimary.addEventListener('click',()=>{

    const id_session = socket_client.id;
    const payload = {
        message: txtMessage.value,
        id: id_session,
        date: new Date().toDateString(),

    }
    socket_client.emit('client-message', payload,(id_server)=>{

        console.log(`Id from server ${id_server}`)
    });
})
