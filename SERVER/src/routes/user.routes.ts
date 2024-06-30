import express from 'express';
import {createUserService, getAllUsersService, getUserByIdService, getUserByNameService, getUserByEmailService } from '../services/user.service';

const router = express.Router();

//la ruta es http://localhost:3000/api/users
router.get('/users', getAllUsersService);
//la ruta es http://localhost:3000/api/users
router.post('/users', createUserService);
//la ruta es http://localhost:3000/api/users/123456
router.get('/users/:id', getUserByIdService);
//la ruta es http://localhost:3000/api/users/name
router.get('/users/:name', getUserByNameService);
//la ruta es http://localhost:3000/api/users/email
router.get('/users/:email', getUserByEmailService);

export default router;

