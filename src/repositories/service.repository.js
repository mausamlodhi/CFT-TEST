import models from "../models/index.js"
const { service } = models;

export default {
    async createService(req){
        try{
            const {
                body:{
                    categoryId,
                    name,
                    type,
                    priceId
                }
            } = req;
            const isCreated = await service.create({categoryId,name,type,priceId});
            return isCreated;
        }catch(error){
            console.log('Error : ',error);
        }
    },
    async getService(){
        try{
            const services = await service.findAll();
            return services;
        }catch(error){
            console.log('Error : ',error);
        }
    },
    async deleteService(req){
        try{
            const {
                params:{
                    categoryId,
                    serviceId
                }
            } = req;
            const isServiceDeleted = await service.update({categoryId:null},{where:{id:serviceId}});
            return true;
        }catch(error){
            console.log('Error : ',error);
        }
    }
}