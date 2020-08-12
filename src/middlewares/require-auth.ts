import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    if (!token) {
        throw new NotAuthorizedError();
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET!);
    } catch (_) {
        throw new NotAuthorizedError();
    }
    next();
}
