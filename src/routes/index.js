const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.status = 200;
  ctx.body = { msg: "Hello World" };
});

module.exports = router;
