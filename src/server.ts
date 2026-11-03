import fastify from 'fastify';

const app = fastify();

app.get('/hello', () => {
    return { message: 'Hello, World!' };
});

const PORT = Number(process.env.PORT) || 3000;

try {
    await app.listen({ port: PORT });
    console.log(`http://localhost:${PORT}`);
} catch (error) {
    console.error(error);
    process.exit(1);
}
