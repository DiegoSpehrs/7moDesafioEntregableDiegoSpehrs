import {usersMongo} from '../../DAL/DAOs/MongoDAOs/usersMongo.dao.js';
import { hashData, compareData } from '../../utils.js';

class UsersService{
    async createUser(user){
        const filterAdmin = "adminCoder@coder.com";
        const {first_name,last_name,username,password} = user;
        if(!first_name || !last_name || !username || !password) throw new Error('Some required data is missing');
        //const userDB = await usersMongo.findOne(username);
        //if(userDB) throw new Error('user already exists');
        const hashPassword = await hashData(password);
        user.password = hashPassword;
        if(filterAdmin === user.email) {
            user.isAdmin = true;
            const newUser = await usersMongo.createOne(user);
            return newUser;
        }else{
            const newUser = await usersMongo.createOne(user);
            return newUser;
        }
    }

    async findUser(username){
       const user = await usersMongo.findOne({username});
       if(!user) throw new Error('User not found')
       return user;
    }

    async findUserLogin(username, password){
        if(!user || !password) throw new Error('Sing up first');
        const userDB = await usersMongo.findOne(username);
        const isPasswordValid = await compareData(password, userDB.password);
        if(!isPasswordValid) throw new Error('Username or Password not valid');
        return userDB
    }
}

export const userService = new UsersService();