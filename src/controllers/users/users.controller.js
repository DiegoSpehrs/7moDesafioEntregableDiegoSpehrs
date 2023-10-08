import { userService } from '../../services/users/users.service.js';
import {hashData} from '../../utils.js'

class UsersController {
    async singupUser(req,res) {
        const user = req.body;
        try {
          const result = await userService.createUser(user);
          res.status(200).json({message:'User cretad sucessfully', user: result}); 
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

export const usersController = new UsersController();