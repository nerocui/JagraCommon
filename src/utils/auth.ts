import jwt from 'jsonwebtoken';
import { Request } from 'express';

type User = {
    id: string,
    firstName: string,
    lastname: string,
    email: string,
    iat: number,
}

export const getUser = (req: Request) : User => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    return jwt.decode(token!) as User;
}
