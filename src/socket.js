import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
    recconection: true
});

export default socket