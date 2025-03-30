import { io } from "socket.io-client";

export const socket = io("http://localhost:3020/oracle", );
export const regsocket = io("http://localhost:3020/register", );
// WebSocket connection
export const authsocket = io("http://localhost:3020/register", { autoConnect: false });
