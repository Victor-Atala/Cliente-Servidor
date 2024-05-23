import { Request, Response } from 'express';

export const shortPollingHandler = (req: Request, res: Response) => {
    const data = { message: 'This is a short polling response', timestamp: new Date() };
    res.json(data);
};
