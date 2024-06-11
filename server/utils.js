import moment from 'moment';

export const botName = "Vue Chatapp Admin";
export const users = [];

//Join chat
export function userJoin(user){
    users.push(user);
    return user;
}

//Get current user in Room
export function getRoomUsers(room){
    return users.filter(user => user.room === room);
}