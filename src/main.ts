import { Application, send } from "@oak";
import { router } from "./routes.ts";

const app = new Application();

//add cors
app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

// Serve static files
const ROOT_DIR = "./public/", ROOT_DIR_PATH = "/";
app.use(async (ctx, next) => {
  if (!ctx.request.url.pathname.startsWith(ROOT_DIR_PATH)) {
    next();
    return;
  }
  const filePath = ctx.request.url.pathname.replace(ROOT_DIR_PATH, "");
  await send(ctx, filePath, {
    root: ROOT_DIR,
  });
});

const PORT = 8369;
console.log(`Server is running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
