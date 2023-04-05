import express, { Request, Response } from 'express';
import mysql from 'mysql2';

import { Router } from 'express';

import { CidadesController } from './../controllers';

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

router.get('/cidades', (req: Request, res: Response) => {
	const sql = 'SELECT * FROM cidades';
	connection.query(sql, (err, results) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Erro ao buscar cidades');
	  } else {
		res.json(results);
	  }
	});
  });

export { router };
