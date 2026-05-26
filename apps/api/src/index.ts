import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });

app.get("/health", async () => {
  return { status: "ok", timestamp: new Date().toISOString() };
});

app.get("/api/v1/codes", async () => {
  return { codes: [], total: 0 };
});

const PORT = Number(process.env.API_PORT) || 3000;
const HOST = process.env.API_HOST || "0.0.0.0";

try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`Server running at http://${HOST}:${PORT}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
