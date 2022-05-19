import { Client, config } from "./deps.ts";

const cfg = await config();

const client = new Client({
    user: cfg.user,
    database: cfg.database,
    password: cfg.password,
    hostname: cfg.hostname,
    tls: {
        enabled: false
    }
})

await client.connect();

const res = await client.queryArray("SELECT id from patients");

for await (let v of res.rows) {
    console.log(v);
}