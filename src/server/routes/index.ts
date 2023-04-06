import { CidadesController } from './../controllers/cidades/index';
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	return res.send('FUNCIONANDO!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export { router };