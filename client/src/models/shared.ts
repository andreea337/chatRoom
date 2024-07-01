export interface chatRoom {
    photo: string;
    room: string;
    msg: string;
    time: string;
}
  
export interface chat {
    username: string;
    text: string;
    time: string;
    room?: string;
};