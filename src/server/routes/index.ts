import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/teste', (req, res) => {
	return res.send('TESTE');
});

router.get('/users', (req, res) => {
	return res.send('<h1>Usuários</h1>'); 
});

router.post('/hello', (req, res) => {
	console.log(req.body);
	return res.status(StatusCodes.UNAUTHORIZED).json(req.body); 
});

export { router };