import express, { Request, Response } from 'express';
import { router } from '../../routes';

const app = express();

app.use(express.json());

app.use(router);

const PORT = 3000;
app.listen(PORT, () => console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`));
