import fastify from 'fastify';
import { knex } from './database.js';
import crypto from 'node:crypto';
import { env } from './env/index.js';

const app = fastify();

app.get('/hello', async () => {
    const transaction = await knex('transactions')
        .insert({
            id: crypto.randomUUID(),
            title: 'Transaction 1',
            amount: 100,
        })
        .returning('*');
    return transaction;
});

app.get('/', async () => {
    const transactions = await knex('transactions').select('*');
    return transactions;
});

const PORT = Number(env.PORT);

try {
    await app.listen({ port: PORT });
    console.log(`http://localhost:${PORT}`);
} catch (error) {
    console.error(error);
    process.exit(1);
}
