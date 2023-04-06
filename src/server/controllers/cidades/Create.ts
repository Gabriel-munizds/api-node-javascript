import { StatusCodes } from 'http-status-codes';
import { Request, RequestHandler, Response, query } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';


interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
	nome: yup.string().required().min(3),
	estado: yup.string().required().min(3)

});

export const createValidation = validation({
	body: yup.object().shape({
		nome: yup.string().required().min(3),
		estado: yup.string().required().min(3)
	}),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
	console.log(req.body);
	return res.send('Create!');
};