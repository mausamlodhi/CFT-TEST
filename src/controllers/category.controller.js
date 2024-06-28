import httpStatus from "http-status";
import repositories from "../repositories";
const {categoryRepository} = repositories
export default {
    async createCategory(req,res,next){
        try{
            const result = await categoryRepository.createCategory(req);
            if(result){
                res.status(httpStatus.OK).json({
                    success:true,
                    message:"Category created success",
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
    async getAllCategory(req,res,next){
        try{
            const result = await categoryRepository.getCategories();
            if(result){
                res.status(httpStatus.OK).json({
                    success:true,
                    message:"All categories fatched",
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
    async deleteCategory(req,res,next){
        try{
            const result = await categoryRepository.deleteCategory(req);
            if(result){
                res.status(httpStatus.OK).json({
                    success:true,
                    message:"Category deleted success",
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
    async updateCategory(req,res,next){
        try{
            const result = await categoryRepository.updateCategory(req.params.categoryId,req);
            if(result){
                res.status(httpStatus.OK).json({
                    message:'Category updated success',
                    data:null,
                    success:true
                })
            }
        }catch(error){
            console.log(error);
            res.status(httpStatus.BAD_REQUEST).json({
                message:"Something went wrong ",
                data:null,
                success:false
            })
        }
    }
}