const connection = new WebSocket('ws://localhost:8999');

connection.onopen = () => {
  console.log('connected');
};

connection.onclose = () => {
  console.error('disconnected');
};

connection.onerror = (error) => {
  console.error('failed to connect', error);
};

connection.onmessage = (event) => {
  console.log('received', eventa.action);
  let eventActions = {};
  let li = document.createElement('li');
  const action = JSON.parse(event).action
  console.log('func', action);
  
  eventActions['action1'] = (event) => {li.innerText = event.data + 'test-1'};
  eventActions['action2'] = (event) => {li.innerText = event.data + 'test-2'};
  console.log('actions', eventActions);
  
console.log(typeof eventActions[action]);
console.log( eventActions['action2']);

  eventActions[action]();

  // switch (event.action) {
//   case 'test-1':
//     li.innerText = event.data + 'test-1';

//     break;

//     case 'test-2':
//       li.innerText = event.data + 'test 2';

//       break;

//   default:
//     break;
  // }

  document.querySelector('#chat').append(li);
};

function webSocketHelper (connection) {

  this.connection = connection;
  this.send = (action, data) => {
    const sendData = {
      meta: 'meta data',
      action: action,
      data : data
    }
  
    connection.send(sendData);    
  } 
}

document.querySelector('form').addEventListener('submit', (event) => {
  const emit = new webSocketHelper(connection);
console.log('emit', emit);

  event.preventDefault();
  let message = document.querySelector('#message').value;
  // connection.send(message);
  emit.send('action1', message + 'action-1')
  document.querySelector('#message').value = '';
});

