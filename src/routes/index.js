import express from 'express';
import user from './user';
import workOfArt from './workOfArt';
// import transaction from './transaction';
import { ensureLogin } from './privilege';
import { swagDocHandler } from '../utils';

const router = new express.Router();

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

// return swagger doc json data.
// open [http://swagger.daguchuangyi.com/?url=http://localhost:8888/swagger.json#!]
// to use Swagger UI to visualize the doc
router.get('/swagger.json', swagDocHandler);

//router.use(ensureLogin);

// example user routes providing: [create|login|get] method.
router.use('/users', user);
router.use('/works-of-art', workOfArt);
// router.use('/transactions', transaction);

export default router;
