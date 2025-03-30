import { io } from "socket.io-client";

const base = "192.168.8.233:3020";
    // io("http://192.168.8.233:3000", {
    // transports: ["websocket"], // Force WebSockets
    // withCredentials: true, // Needed if using cookies for auth
    // });

const connect = (path:string)=>{
    return io( `${base}/${path}`, {
        transports: ["websocket"], // Force WebSockets
        withCredentials: true, // Needed if using cookies for auth
        autoConnect: false,
        });
}
export const socket = connect("oracle");
export const regsocket = connect("register");
// WebSocket connection
export const authsocket = io("register");
