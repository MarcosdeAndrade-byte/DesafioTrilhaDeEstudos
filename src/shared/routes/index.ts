import { Router } from 'express';
import { accountsRoutes } from './accounts.routes';

const router = Router();

router.use('/users', accountsRoutes);

export { router };
