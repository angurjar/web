import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'asdfcvg';

export const tokenVerification = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.auth;
    
    if (!auth || auth.scheme !== 'Bearer') {
        return res.status(401).send('Invalid scheme error');
    }

    const data = jwt.verify(auth.token, secretKey) as jwt.JwtPayload;
    req.auth.user = data['user']
};

export const generateToken = (user_data: any, cb: (error: any, token?: string) => void) => {
    jwt.sign({ user: user_data }, secretKey, { expiresIn: '300s' }, cb);
};

export const extractToken = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers['authorization'];
if(!bearer){
    return res.status(401)
}
    const auth = bearer.split(" ")[1];
    req.auth = {
        scheme: auth[0],
        token: auth[1]
    };

    if (!req.auth.token) {
        return res.status(401).send('Access denied');
    } else {
        next();
    }
};


declare global {
    namespace Express {
      interface Request {
        auth: {
            scheme: string;
            token: string;
            user?:object
        }
      }
    }
  }

