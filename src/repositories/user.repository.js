import models from  '../models/index';
import hashMthods from "../common/index"
const { user } = models;
export default {
    async signUp(req){
        try{
            const {
                body:{
                    email,
                    password
                }
            } = req;
            const hashPassword = await hashMthods.encryptPassword(password);
            const createUser = await user.create({email,password:hashPassword});
            return {
                ...createUser,
                password:undefined
            };
        }catch(error){
            console.log(error);
        }
    },
    async userLogin(req){
        try{
            const {
                body:{
                    email,
                    password
                }
            } = req;
            const isUserExists = await user.findOne({ where: { email } });
            if(isUserExists){
                const isValidPassword = hashMthods.comparePassword(password,isUserExists.password);
                if(isValidPassword){
                    const token = hashMthods.createToken(isUserExists.dataValues);
                    const userLoggedIn = await user.update({token},{where:{id:isUserExists.id}});
                    return {
                        ...isUserExists.dataValues,
                        token,
                        password:undefined
                    };
                }else{
                    return false
                }
            }else{
                return false
            }
        }catch(error){
            console.log("Error : ",error);
        }
    },
    async findUserByToken(token){
        try{
            const isUser = await user.findOne({where:token});
            return isUser
        }catch(error){
            console.log("Error : ",error);
        }
    }
}