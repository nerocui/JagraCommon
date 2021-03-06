import jwt from 'jsonwebtoken';
import { Request } from 'express';

type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    iat: number,
}

export const getUser = (req: Request) : User => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    return jwt.decode(token!) as User;
}

export const createTestToken = (secret: string) : string => {
    const user = {
        id: 'dsdasdadsada',
        email: 'test@test.com',
        password: 'password',
        firstName: 'test',
        lastName: 'test',
    };
    return jwt.sign(user, secret);
}
