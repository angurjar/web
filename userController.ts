import { Request, Response } from 'express';


import { User } from '../model/userModel';
import { sequelize } from '../config/db1';

export const getUser = (req: Request, res: Response) => {

    User.create({
        username:req.body.username
        ha
    })
        .then(() => {
            console.log('User saved successfully');
         
        })
        .catch((error: any) => {
            console.log('Error saving user:', error);
          
        });
};









 












// const token setUser(user)
// res.cookies(token )
// return.redirect(/)
