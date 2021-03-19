const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const appConfig = require("./configs/index");
const indexRoute = require("./routes/index");
const { broadcastData } = require("./utils/domains");
const { list_covid19_all_country } = require("./domains/index");
const app = new Koa();

app.use(bodyParser());
app.use(indexRoute.routes());

const server = app.listen(appConfig.NODE_PORT, () => {
  console.log(`Server is running on port : ${appConfig.NODE_PORT}`);
});

module.exports = server;
