const wss = require("./websocket");

module.exports = {
  broadcastData: (data) => {
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(data));
    });
  },
};

// const broadcastData = (data) => {
//   wss.clients.forEach((client) => {
//     client.send(JSON.stringify(data));
//   });
// };

// module.exports = {
//   broadcastData,
// };
