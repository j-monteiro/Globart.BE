import express from 'express';

import { WorkOfArt } from 'models';

const router = new express.Router();

router.get('/', async (req, res) => {
    const worksOfArt = await WorkOfArt.find();
    return res.send(worksOfArt);
});

router.post('/create', async (req, res, next) => {
    const { workOfArt } = req.body;
    try {
        
    } catch (error) {
        next(error)
    }
});

export default router;