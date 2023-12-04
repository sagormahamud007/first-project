import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentsRoutes } from './app/modules/student/student.route';
import { UsersRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentsRoutes);
app.use('/api/v1/users', UsersRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
//error handler middlewares
app.use(globalErrorHandler)
//Not Found Route
app.use(notFound)

export default app;
