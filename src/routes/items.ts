import express, { Request, Response } from 'express';
const router = express.Router();

let items: any[] = [];

// Rota para listar todos os itens
router.get('/', (_: Request, res: Response) => {
  res.json(items);
});

// Rota para adicionar um item
router.post('/', (req: Request, res: Response) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

// Rota para atualizar um item
router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = req.body;
  items[id] = item;
  res.json(item);
});

// Rota para deletar um item
router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  items.splice(id, 1);
  res.status(204).send();
});

export default router;