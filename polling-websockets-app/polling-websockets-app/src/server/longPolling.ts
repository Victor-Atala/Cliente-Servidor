import { Request, Response } from 'express';

export const longPollingHandler = (req: Request, res: Response) => {
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    (async () => {
        await wait(10000); // simulate a long computation or waiting for an event
        const data = { message: 'Esta es la respuesta del long polling después de 10 segundos', timestamp: new Date() };
        res.json(data);
    })();
};
