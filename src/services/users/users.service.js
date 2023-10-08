import {usersMongo} from '../../DAL/DAOs/MongoDAOs/usersMongo.dao.js';
import { hashData } from '../../utils.js';

class UsersService{
    async createUser(user){
        const filterAdmin = "adminCoder@coder.com";
        const {first_name,last_name,username,password} = user;
        const userDB = await usersMongo.findOne(username);
        if(!first_name || !last_name || !username || !password) throw new Error('Some required data is missing');
        if(userDB) throw new Error('user already exists');
        const hasPassword = await hashData(password);
        if(filterAdmin === user.email) {
            user.isAdmin = true;
            const newUser = await usersMongo.createOne(user, {password:hasPassword});
            return newUser;
        }else{
            newUser = await usersMongo.createOne(user,{password:hasPassword});
            return newUser;
        }
    }

    async findUser(username){
       const user = await usersMongo.findOne({username});
       if(!user) throw new Error('User not found')
       return user;
    }
}

export const userService = new UsersService();