import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "@/pages/api/ws/type";
import { Server as SocketIoServer } from "socket.io";;
import { Server as HttpServer } from "http";

export default async function WsAlertNotice(req: NextApiRequest, res: NextApiResponseServerIo) {
  if (req.method === 'GET') {
    if (res.socket.server.io) {
      console.log('Socket is connected...');
    } else {
      console.log('New Socket...');
      const httpServer: HttpServer = res.socket.server as any;
      const io = new SocketIoServer(httpServer, {
        path: '/api/ws/alert/notice',
      })
      res.socket.server.iio = io;
    }
  } else {
    const message = req.body;
    res.socket.server.io.emit('message', message);
    res.status(201).json(message);
  }
}