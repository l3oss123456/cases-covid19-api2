const Websocket = require("ws");

const wss = new Websocket.Server({ port: 4000 });

wss.on("connection", (ws) => {
  // สร้าง connection

  ws.on("message", (message) => {
    // รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
  });

  ws.on("close", () => {
    // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
    ws.send("websocket disconnected !");
  });

  ws.send("websocket connected !");
});

module.exports = wss;
