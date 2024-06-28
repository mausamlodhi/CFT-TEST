module.exports = (sequelize,DataTypes)=>{
    const user = sequelize.define(
        'user',
        {
            email:{
                type:DataTypes.STRING(250),
                allowNull:false,
                trim:true
            },
            password:{
                type:DataTypes.STRING(255),
                allowNull:false,
                trim:true
            },
            token:{
                type:DataTypes.STRING(255),
                trim:true,
                allowNull:true
            }
        }
    );
    return user;
}