import jwt from 'jsonwebtoken';
import { Request } from 'express';

export const getUser = (req: Request) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    return jwt.decode(token!);
}
