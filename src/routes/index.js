import { Router } from "express";
import httpStatus from "http-status";
import category from "./category.route"
import service from "./service.route"
import user from "./user.route.js"

const router = Router();
const register = (app)=>{
    app.use(router);
    router.use('/api',[
        user,
        category,
        service
    ]);
    app.use((error,req,res,next)=>{
        if(error){
            return res.status(httpStatus.BAD_REQUEST).json({
                success:false,
                message:'Not Found',
                data:nulll
            })
        }else{
            next()
        }
    })
}
export default register;