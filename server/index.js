import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { products } from "./data/products.js";

const app = new Hono();
const PORT = 3001;

app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  }),
);

app.get("/api/products", (c) => {
  return c.json(products);
});

app.get("/api/health", (c) => {
  return c.json({ ok: true });
});

console.log(`Server listening on http://localhost:${PORT}`);

serve({
  fetch: app.fetch,
  port: PORT,
});
