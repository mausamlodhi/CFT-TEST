module.exports = (sequelize,DataTypes)=>{
    const category = sequelize.define(
        'category',
        {
            categoryName:{
                type:DataTypes.STRING(250),
                allowNull:false,
                trim:true
            }
        }
    )
    category.associate = (models)=>{
        category.hasMany(models.service,{
            foreignKey:'categoryId',
            onDelete:'cascade'
        });
    }
    return category;
}