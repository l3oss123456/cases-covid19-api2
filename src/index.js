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

const country = [
  "USA",
  "Spain",
  "Italy",
  "Germany",
  "France",
  "UK",
  "Russia",
  "Belgium",
  "Netherlands",
  "Brazil",
];
let lastdays = 1;

setInterval(async () => {
  const resp = await list_covid19_all_country(country, lastdays);
  broadcastData(resp);
  lastdays = lastdays + 1;
  if (lastdays > 30) {
    lastdays = 1;
  }
}, 3000);

module.exports = server;
