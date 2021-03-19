const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const appConfig = require("./configs/index");
const indexRoute = require("./routes/index");
const app = new Koa();

app.use(bodyParser());
app.use(indexRoute.routes());

// const server = app.listen(appConfig.NODE_PORT).on("error", (err) => {
//   console.log(err);
// });

const server = app.listen(appConfig.NODE_PORT, () => {
    console.log(`Server is running on port : ${appConfig.NODE_PORT}`)
  })

module.exports = server;
