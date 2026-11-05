import fastify from 'fastify';

import { knex } from './database.js';
import { env } from './env/index.js';
import { transactionsRoutes } from './routes/transactions.js';

const app = fastify();

app.register(transactionsRoutes, { prefix: 'transactions' });

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
