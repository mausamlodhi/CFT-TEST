module.exports = (sequelize,DataTypes)=>{
    const service = sequelize.define(
        'service',
        {
            categoryId:{
                type:DataTypes.INTEGER,
                allowNull:true,
                trim:true
            },
            name:{
                type:DataTypes.STRING(250),
                allowNull:false,
                trim:true
            },
            type:{
                type:DataTypes.ENUM('Normal','VIP'),
                allowNull:false
            },
            price:{
                type:DataTypes.INTEGER,
                allowNull:false,
                trim:true
            }
        }
    );
    service.associate = (models)=>{
        service.belongsTo(models.category,{
            foreignKey:'categoryId',
        })
    }
    return service;
}