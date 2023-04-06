import { Router } from 'express';
const router = Router();

const connection = mysql.createConnection({
  host: 'containers-us-west-32.railway.app',
  user: 'root',
  password: 'EVq54OKSNOt7SL2Ham4Y',
  database: 'railway',
  port: 7214
});

router.get('/', (req, res) => {
	return res.send('FUNCIONANDO!');
});

router.post('/cidades', CidadesController.create);

export { router };
