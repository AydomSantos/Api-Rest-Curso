import app from './app';

const port = process.env.APP_PORT || 3001; // Define a porta, com fallback para 3000
app.listen(port, () => {
  console.log(`Servidor está rodando na porta: ${port}`);
});
