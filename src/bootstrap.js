import cors from 'cors';
import bodyParser from 'body-parser';
import  models from './models/index.js'
import routes from './routes/index.js'
export default class Bootstrap{
    constructor(app){
        this.app = app;
        this.middleware();
        this.connectDB();
        this.routes();
        this.start();
    }
    middleware(){
        const { app } = this;
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());
        app.use(cors());
    }
    connectDB(){
        const { sequelize } = models;
        sequelize.authenticate()
        .then(()=>{
            sequelize.sync();
            console.log('Database sync success ');
        })
        .catch((error)=>{
            console.log('Error : ',error);
        })
    }
    routes(){
        const { app } = this;
        routes(app);
    }
    start(){
        const { app } = this;
        const port = app.get('port');
        const server = app.listen(port || 5000,()=>{
            console.log('Server started',port);
        })
    }
}