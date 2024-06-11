import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';
import cors from 'cors';
import { userJoin } from './utils/users';

const app = express();
const server = createServer(app);
const PORT = 3001 || process.env.PORT;

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
    socket.on('joinRoom', (payload) => {
        const user = userJoin({...payload, id: socket.id});
        socket.join(user.room);
        console.log('User joined room: ', user.room);
        //Broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', `${user.username} has joined the chat`); 
        //Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });
    // socket.on('disconnect', () => {
    //     console.log('User disconnected');
    // });

    // socket.on('chat message', (msg) => {
    //     console.log('message: ' + msg); // log the message
    //     io.emit('chat message', msg); // emit the message to all clients
    // }
});
