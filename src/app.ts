import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);


const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a)
};
app.get("/", test)

//error handler middlewares
app.use(globalErrorHandler)
//Not Found Route
app.use(notFound)

export default app;
