import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema, ValidationError } from 'yup';

type TPropety = 'body' | 'header' | 'params' | 'query';
type TAllSchemas = Record<TPropety, ObjectSchema<any>>;
type Tvalidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: Tvalidation = (schemas) => async (req, res, next) => {
	const ErrorsResult: Record<string, Record<string, string>> = {};

	Object.entries(schemas).forEach(([key, schema]) =>{
		try {
			schema.validateSync(req[key as TPropety], { abortEarly: false });
			return next();
		} catch (error) {
			const yupError = error as ValidationError;
			const Errors: Record<string, string> = {};
    
			yupError.inner.forEach(error => {
				if (!error.path) return;
				Errors[error.path] = error.message;
			});

			
            
			ErrorsResult[key] = Errors;
			// return res.status(StatusCodes.BAD_REQUEST).json({ Errors });
		}

	});

	if(Object.entries(ErrorsResult).length === 0){
		return next();
	} else {
		return res.status(StatusCodes.BAD_REQUEST).json({Error: ErrorsResult});
	}
};