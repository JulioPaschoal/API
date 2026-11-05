import crypto from 'node:crypto';

import { FastifyInstance } from 'fastify';

import { knex } from '../database.js';

export async function transactionsRoutes(app: FastifyInstance) {
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
}
