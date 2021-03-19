const wss = require("./websocket");

const broadcastData = (data) => {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(data));
  });
};

module.exports = {
  broadcastData,
};
