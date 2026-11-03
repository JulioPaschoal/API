import fastify from 'fastify';
import { knex } from './database.js';

const app = fastify();

app.get('/hello', async () => {
    const tables = await knex('sqlite_schema').select('*');
    return { tables };
});

const PORT = Number(process.env.PORT) || 3000;

try {
    await app.listen({ port: PORT });
    console.log(`http://localhost:${PORT}`);
} catch (error) {
    console.error(error);
    process.exit(1);
}
