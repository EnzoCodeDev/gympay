import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { cors } from "@elysiajs/cors";
import { authRoutes } from "./routes/auth";
import { clientsRoutes } from "./routes/clients";
import { plansRoutes } from "./routes/plans";
import { membershipsRoutes } from "./routes/memberships";

const app = new Elysia()
  .use(cors())
  .use(authRoutes)
  .group("/api", (app) =>
    app.use(clientsRoutes).use(plansRoutes).use(membershipsRoutes),
  )
  // Serve React Build (Optional for Dev, needed for Prod)
  .use(
    staticPlugin({
      assets: "../client/dist",
      prefix: "/",
    }),
  )
  .get("*", () => Bun.file("../client/dist/index.html")) // SPA Fallback
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
