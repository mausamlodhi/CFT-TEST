import models from "../models/index.js"
const { category } = models;
export default {
    async createCategory(req){
        try{
            const {
                body:{
                    name
                }
            } = req;
            const isCategoryCreated = await category.create(name);
            return isCategoryCreated;
        }catch(error){
            console.log('Error : ',error);
        }
    },
    async deleteCategory(req){
        try{
            const { 
                params:{
                    id
                }
            } = req;
            const isDeleted = await category.destroy({where:{id}});
            return isDeleted;
        }catch(error){
            console.log('Error : ',error);
        }
    },
    async getCategories(){
        try{
            const categories = await category.findAll();
            return categories;
        }catch(error){
            console.log('Error : ',error);
        }
    },
    async updateCategory(id,req){
        try{
            const {
                body:{
                    name
                }
            } = req;
            const isUpdate = await category.update({name},{where:{id}});
            return isUpdate;
        }catch(error){
            console.log(error);
        }
    }
}