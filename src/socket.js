import { io } from 'socket.io-client';

const socket = io('https://backent-ws-chat.onrender.com', {
    recconection: true
});

export default socket;