import httpStatus from "http-status";
import repositories from "../repositories";
const { userRepository } = repositories;

export default {
    async userLogin(req,res,next){
        try{
            const result = await userRepository.userLogin(req);
            console.log();
            if(result){
                res.status(httpStatus.OK).json({
                    message:'Login success',
                    success:true,
                    data:result
                });
            }else{
                res.status(httpStatus.BAD_REQUEST).json({
                    message:'User not found',
                    success:false,
                    data:result
                });
            }
        }catch(error){
            console.log('Error',error);
            res.status(httpStatus.BAD_REQUEST).json({
                message:'Invalid password try again',
                success:false,
                data:null
            })
        }
    },
    async userSignup(req,res,next){
        try{
            const result = await userRepository.signUp(req);
            if(result){
                res.status(httpStatus.OK).json({
                    message:'Signup success',
                    success:true,
                    data:result
                });
            }
        }catch(error){
            console.log('Error',error);
            res.status(httpStatus.BAD_REQUEST).json({
                message:'Invalid password try again',
                success:false,
                data:null
            })
        }
    }
}