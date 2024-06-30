// user.services.ts
import { Request, Response } from 'express';
import userController from '../controllers/user.controller';
import { get } from './../../node_modules/mongodb/src/client-side-encryption/providers/utils';

// Service to get all users
async function getAllUsersService(req: Request, res: Response): Promise<void> {
  try {
    // Call the controller method
    await userController.getAllUsers(req, res); 
    // Note: The controller method handles the response directly.
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' }); 
  }
}

// Service to create a new user
async function createUserService(req: Request, res: Response): Promise<void> {
  const{ name, phone, age, email, status, money, active } = req.body;
  const newUser=req.body;
  try {
    await userController.createUser(req, res); // Pass the request and response objects
    console.log(`User created: ${newUser}`);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' }); 
  }
}

// Service to get a user by ID
async function getUserByIdService(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await userController.getUserById(req, res); 
    console.log('User found');
  } catch (error) {
    res.status(404).json({ message: 'User not found' }); 
  }
}
// Service to get a user by name
async function getUserByNameService(req: Request,res: Response): Promise<void>{
    const {name} = req.params;
    try{
        await userController.getUserByName(req,res);
        res.status(200).json({message: 'User found'});
        console.log('User found');
    }catch(error){
        res.status(404).json({message: 'User not found'});
    }
}
    //Service to get a user by mail
    async function getUserByEmailService(req: Request,res: Response): Promise<void>{
        const {email}=req.params;
        try{
            await userController.getUserByMail(req,res);
            res.status(200).json({message: 'User found'});
            console.log('User found');
        }
        catch(error){
            res.status(404).json({message: 'User not found'});
        }
    }


export { getAllUsersService, createUserService, getUserByIdService ,getUserByNameService, getUserByEmailService};


