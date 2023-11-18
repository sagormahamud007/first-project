import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentsRoutes } from './app/modules/student/student.route';

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
