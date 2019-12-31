import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws'; 
import * as utils from './Utils/user'

const util = require('util')

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

   //connection is up, let's add a simple simple event
//   ws.on('message', (message: string) => {

//         //log the received message and send it back to the client
//         console.log('received: %s', message);

//         const broadcastRegex = /^broadcast\:/;

//         // send to all
//         wss.clients.forEach(client => {

//           if (client != ws) {
//               client.send(message);
//           }    
//       });

//         if (broadcastRegex.test(message)) {
//             message = message.replace(broadcastRegex, '');

//             //send back the message to the other clients
//             wss.clients.forEach(client => {
//                 if (client != ws) {
//                     client.send(`Hello, broadcast message -> ${message}`);
//                 }    
//             });
            
//         } else {
//             ws.send(`Hello, you sent -> ${message}`);
//         }
//   });

  ws.on('message', (data: any) => {
console.log(typeof data);
//   const tmp = JSON.parse(data)
    console.log('tmp',data);
    // const action = JSON.parse(JSON.stringify(data.action))
    // console.log('func',data.action);
    // console.log('func',data.data);
    console.log(util.inspect(data, false, null, true /* enable colors */)) 
    console.log(util.inspect(data, {showHidden: false, depth: null}))
       let sendData = {
        action: 'action1',
        data: 'data action 1'
    }

      switch (data) {
          case 'action1':
              console.log('action1 switch');
              ws.send(sendData);
              break;
    
          default:
              break;
      }
  })
});

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address()} :)`);
});