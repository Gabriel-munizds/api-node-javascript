import { Router } from 'express';

const router = Router();

router.get('/teste', (req, res) => {
	return res.send('Rota funcionando!');
});

router.get('/users', (req, res) => {
	return res.send('<h1>Usuários</h1>'); 
});

router.get('/hello', (req, res) => {
	return res.send('Olá, Mundo!'); 
});

export { router };