import { Request, Response, Router, NextFunction } from 'express';
import { getUser } from '../controller/userController';
import { extractToken, tokenVerification } from '../services/authUser';

const router = Router();

router.post('/', getUser);
//router.get('/id', getBycutomerId);
router.get('/user', extractToken, tokenVerification, (req: Request, res: Response, next: NextFunction) => {
    res.json((req as any).auth.user);
});

export default router;


