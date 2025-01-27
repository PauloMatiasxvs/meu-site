import express from 'express';
import path from 'path';
import itemsRouter from './routes/items';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/items', itemsRouter);
// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
