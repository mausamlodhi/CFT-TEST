import httpStatus from "http-status";
import repositories from "../repositories";
const { serviceRepository } = repositories
export default {
    async createService(req,res,next){
        try{
            const result = await serviceRepository.createService(req)
            if(result){
                res.status(httpStatus.OK).json({
                    success:true,
                    message:"Service created success",
                    data: result
                });
            }
        }catch(error){
            console.log(error);
            res.status(httpStatus.BAD_REQUEST).json({
                success:false,
                message:'Something went wrong please try again',
                data:null
            })
        }
    },
    async getAllServices(req,res,next){
        try{
            const result = await serviceRepository.getService()
            if(result){
                res.status(httpStatus.OK).json({
                    success:true,
                    message:"All services fatched",
                    data: result
                });
            }
        }catch(error){
            console.log(error);
            res.status(httpStatus.BAD_REQUEST).json({
                success:false,
                message:'Something went wrong please try again',
                data:null
            })
        }
    },
    async deleteService(req,res,next){
        try{
            const result = await serviceRepository.deleteService(req);
            if(result){
                res.status(httpStatus.OK).json({
                    success:true,
                    message:"Service deleted success",
                    data: null
                });
            }
        }catch(error){
            console.log(error);
            res.status(httpStatus.BAD_REQUEST).json({
                success:false,
                message:'Something went wrong please try again',
                data:null
            })
        }
    },
}